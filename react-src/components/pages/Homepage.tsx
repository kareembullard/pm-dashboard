
import React from 'react';
import { Link } from 'react-router-dom';
import { useProject } from '../../context/ProjectContext';
import { Calendar, Target, Clock, Rocket, BarChart2, ListChecks, BookOpen } from 'lucide-react';
import Card from '../ui/Card';

function Homepage(): React.ReactNode {
  const { state } = useProject();
  const { project, phases } = state;
  
  const totalTasks = phases.reduce((acc, phase) => acc + phase.tasks.length, 0);
  const completedTasks = phases.reduce((acc, phase) => 
    acc + phase.tasks.filter(task => task.completed).length, 0
  );
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const timeSpent = phases.reduce((acc, phase) => 
    acc + phase.tasks.reduce((taskAcc, task) => taskAcc + task.timeSpent, 0), 0
  );

  const stats = [
    { icon: Calendar, label: "Duration", value: project.duration },
    { icon: Clock, label: "Est. Hours", value: `${project.totalHours}h` },
    { icon: Rocket, label: "Phases", value: phases.length },
    { icon: Target, label: "Progress", value: `${progressPercentage.toFixed(1)}%` },
  ];

  const actions = [
      { icon: BarChart2, to: "/dashboard", title: "View Dashboard", description: "Monitor progress and phase completion" },
      { icon: ListChecks, to: "/tasks", title: "Manage Tasks", description: "Track and complete project activities" },
      { icon: BookOpen, to: "/wiki", title: "Project Wiki", description: "Reference documentation and guidelines" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{project.name}</h1>
        <p className="mt-4 text-lg text-indigo-300">Transform scattered React prototypes into a centralized, professional development environment.</p>
      </header>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(stat => (
            <Card key={stat.label}>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <stat.icon className="w-10 h-10 text-indigo-400" />
                    <h3 className="text-sm font-medium text-gray-400">{stat.label}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map(action => (
            <Link key={action.title} to={action.to}>
                <Card className="hover:bg-gray-700 hover:scale-105 transition-all duration-300 h-full">
                    <div className="flex items-center space-x-4">
                        <div className="bg-indigo-500 p-3 rounded-full">
                            <action.icon className="w-6 h-6 text-white"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                            <p className="text-gray-400 text-sm">{action.description}</p>
                        </div>
                    </div>
                </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
