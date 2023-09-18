import React from "react";

import "./Tasks.css";

import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, idx) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, idx)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, idx)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
