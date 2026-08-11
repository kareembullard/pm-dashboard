
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Homepage from './components/pages/Homepage';
import Dashboard from './components/pages/Dashboard';
import TaskManager from './components/pages/TaskManager';
import Wiki from './components/pages/Wiki';

function App(): React.ReactNode {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 font-sans">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
