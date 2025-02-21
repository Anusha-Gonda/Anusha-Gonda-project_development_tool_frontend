import React, { useState } from 'react';
import AddProjectModal from './AddProjectModal';

function AddProject() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="p-4">
      <button onClick={toggleModal} className="bg-blue-500 text-white p-2 rounded">
        Add Project
      </button>

      <AddProjectModal show={showModal} handleClose={toggleModal} />
    </div>
  );
}

export default AddProject;
