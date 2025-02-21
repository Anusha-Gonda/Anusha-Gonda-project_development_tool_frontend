import React from 'react';

function ButtonSecondary({ onClick, children }) {
  return (
    <button 
      onClick={onClick} 
      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
