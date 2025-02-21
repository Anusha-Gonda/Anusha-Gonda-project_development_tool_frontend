import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
