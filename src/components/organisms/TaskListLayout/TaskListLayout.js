/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

// UI local components
import TaskList from "../../molecules/TasksList/TaskList";

// Context
import { TasksContext } from "../../../context/TasksContext";

// Style
import "./TaskListLayout.css";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

const TaskListLayout = () => {
  /* --------------------------------- STATES --------------------------------- */

  const [newTask, setNewTask] = useState("");
  const { tasks, setTasks } = useContext(TasksContext);

  /* -------------------------------- CALLBACKS ------------------------------- */

  const fetchTasks = async () => {
    // We can refactor API endpoints requests in a specific folder
    const request = {
      method: "get",
      url: "http://localhost:5000/api/tasks",
    };
    const { data } = await axios(request);
    if (data?.success && data?.tasks?.length) setTasks(data.tasks);
  };

  const addTask = async () => {
    const task = { title: newTask };
    try {
      const request = {
        method: "post",
        url: "http://localhost:5000/api/task",
        data: task,
      };

      const { data } = await axios(request);

      task._id = data._id;
      setTasks([task, ...tasks]);
    } catch (error) {
      console.log("error", error);
      alert("error");
    }
  };

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="layout">
      <input
        type="text"
        value={newTask}
        placeholder="Add a task"
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskListLayout;
