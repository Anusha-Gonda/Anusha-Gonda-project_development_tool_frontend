import React, { useState } from 'react';

function AddProjectModal({ show, handleClose }) {
  const [projectName, setProjectName] = useState('');

  const handleSubmit = () => {
    console.log('Project Added:', projectName);
    handleClose();
  };

  return (
    <div className={`modal ${show ? 'block' : 'hidden'}`}>
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Add Project</h2>
        <input
          type="text"
          placeholder="Enter project name"
          className="border p-2 w-full mb-4 rounded"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-gray-400 text-white py-2 px-4 rounded" onClick={handleClose}>
            Close
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProjectModal;
