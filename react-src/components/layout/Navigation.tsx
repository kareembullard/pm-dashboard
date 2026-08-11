
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Task Manager', path: '/tasks' },
  { name: 'Wiki', path: '/wiki' },
];

function Navigation(): React.ReactNode {
  const activeLinkClass = 'bg-indigo-600 text-white';
  const inactiveLinkClass = 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-indigo-400" />
            <span className="text-white text-xl font-bold ml-3">RPC-PM</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
