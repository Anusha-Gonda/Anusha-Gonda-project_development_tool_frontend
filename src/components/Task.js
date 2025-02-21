import React from 'react';

function Task({ taskName, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <span>{taskName}</span>
      <div>
        <button onClick={onEdit} className="text-blue-500 mx-2">Edit</button>
        <button onClick={onDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}

export default Task;
