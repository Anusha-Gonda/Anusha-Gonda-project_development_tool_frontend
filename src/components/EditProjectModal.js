import React, { useState } from 'react';

function EditProjectModal({ show, handleClose, projectName, handleEdit }) {
  const [newProjectName, setNewProjectName] = useState(projectName);

  const handleSubmit = () => {
    handleEdit(newProjectName);
    handleClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 ${show ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl mb-4">Edit Project</h2>
          <input
            type="text"
            className="border p-2 w-full mb-4 rounded"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <div className="flex justify-between">
            <button className="bg-gray-400 text-white py-2 px-4 rounded" onClick={handleClose}>
              Close
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProjectModal;
