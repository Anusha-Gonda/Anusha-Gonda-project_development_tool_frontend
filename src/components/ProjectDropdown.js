import React, { useState } from 'react';

function ProjectDropdown({ projects, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        Select Project
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
          <ul className="py-2">
            {projects.map((project, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => onSelect(project)}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectDropdown;
