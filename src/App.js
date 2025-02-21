import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';
import DropdownMenu from './components/DropdownMenu';
import EditProjectModal from './components/EditProjectModal';
import Task from './components/Task';
import TaskModal from './components/TaskModal';
import AppLayout from './components/AppLayout';
import ProjectDropdown from './components/ProjectDropdown';

function App() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [projects] = useState([{ name: 'Project 1' }, { name: 'Project 2' }]);

  const handleEdit = (newName) => {
    console.log('Project Edited:', newName);
  };

  const handleSaveTask = (task) => {
    console.log('Task Saved:', task);
  };

  return (
    <AppLayout>
      <ButtonPrimary onClick={() => setShowEditModal(true)}>Edit Project</ButtonPrimary>
      <ButtonSecondary onClick={() => setShowTaskModal(true)}>Add Task</ButtonSecondary>
      <DropdownMenu />
      <ProjectDropdown projects={projects} onSelect={(project) => console.log('Selected:', project)} />

      <EditProjectModal 
        show={showEditModal} 
        handleClose={() => setShowEditModal(false)} 
        projectName="Old Project Name" 
        handleEdit={handleEdit}
      />
      <TaskModal 
        show={showTaskModal} 
        handleClose={() => setShowTaskModal(false)} 
        handleSave={handleSaveTask} 
      />

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </AppLayout>

  );
}

export default App;
