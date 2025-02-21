import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AppLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
