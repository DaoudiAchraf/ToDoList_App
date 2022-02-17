/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from "react";
import PropTypes from "prop-types";

// UI local components
import Task from "../../atomes/Task/Task";

// Style
import "./TaskList.css";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */


const TaskList = ({tasks}) => {
  return tasks.map((item) => <Task key={item._id} task={item} />);
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default TaskList;
