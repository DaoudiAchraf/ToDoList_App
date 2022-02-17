/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Context
import { TasksContext } from "../../../context/TasksContext";

// Style
import "./Task.css";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

const Task = ({ task }) => {
  /* ---------------------------------- HOOKS --------------------------------- */
  const { tasks, setTasks } = useContext(TasksContext);
  /* -------------------------------- RENDERING ------------------------------- */

  const deleteTask = async () => {
    try {
      const request = {
        method: "delete",
        url: `http://localhost:5000/api/task/${task._id}`,
      };
      const { data } = await axios(request);

      if (data?.success) {
        const updatedTasks = tasks.filter((item) => item._id !== task._id);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.log("error", error);
      alert("error");
    }
  };

  const editTask = async () => {
    const title = prompt("Please enter the new task title :", `${task.title}`);
    if (title !== null && title !== "") {
      const editedTask = { title };
      try {
        const request = {
          method: "put",
          url: `http://localhost:5000/api/task/${task._id}`,
          data: editedTask,
        };
        const { data } = await axios(request);

        if (data?.success) {
          console.log("ff");
          const updatedTasks = tasks.map((item) =>
            item._id === task._id ? { ...item, title: title } : item
          );

          setTasks(updatedTasks);
        }
      } catch (error) {
        console.log("error", error);
        alert("error");
      }
    }
  };
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={editTask}>edit</button>
      <button onClick={deleteTask}>delete</button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Task;
