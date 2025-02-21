import React from 'react';

function ButtonPrimary({ onClick, children }) {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
