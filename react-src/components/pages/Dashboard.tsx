import React from 'react';
import { useProject } from '../../context/ProjectContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

const COLORS = ['#4f46e5', '#818cf8', '#a78bfa', '#c4b5fd', '#ddd6fe'];

function Dashboard(): React.ReactNode {
  const { state } = useProject();
  
  const phaseData = state.phases.map(phase => {
    const completedTasks = phase.tasks.filter(task => task.completed).length;
    const totalTasks = phase.tasks.length;
    const remainingTasks = totalTasks - completedTasks;
    const completedHours = phase.tasks.reduce((acc, task) => acc + task.timeSpent, 0);
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    return {
      name: phase.name,
      completed: completedTasks,
      remaining: remainingTasks,
      total: totalTasks,
      hoursSpent: parseFloat(completedHours.toFixed(1)),
      totalHours: phase.totalHours,
      progress: parseFloat(progress.toFixed(1))
    };
  });

  const overallProgress = {
    totalTasks: state.phases.reduce((acc, phase) => acc + phase.tasks.length, 0),
    completedTasks: state.phases.reduce((acc, phase) => acc + phase.tasks.filter(t => t.completed).length, 0),
    totalHours: state.project.totalHours,
    completedHours: state.phases.reduce((acc, phase) => acc + phase.tasks.reduce((tAcc, t) => tAcc + t.timeSpent, 0), 0)
  };

  const pieData = [
    { name: 'Completed', value: overallProgress.completedTasks },
    { name: 'Remaining', value: overallProgress.totalTasks - overallProgress.completedTasks },
  ];
  
  const pieColors = ['#4f46e5', '#374151'];


  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Project Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-white mb-2">Overall Progress</h3>
            <div className="h-48">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#8884d8" paddingAngle={5} dataKey="value">
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}/>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="text-center mt-2 text-gray-300">{overallProgress.completedTasks} of {overallProgress.totalTasks} tasks completed</p>
          </Card>
          <Card>
              <h3 className="font-semibold text-white mb-2">Time Progress</h3>
              <div className="flex flex-col items-center justify-center h-full pt-4">
                  <span className="text-5xl font-bold text-indigo-400">{overallProgress.completedHours.toFixed(1)}h</span>
                  <span className="text-lg text-gray-400">/ {overallProgress.totalHours}h</span>
                  <p className="mt-4 text-gray-300">Total time spent</p>
              </div>
          </Card>
           <Card>
              <h3 className="font-semibold text-white mb-2">Progress</h3>
              <div className="flex flex-col items-center justify-center h-full pt-4">
                  <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path className="text-gray-700" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="text-indigo-500" strokeWidth="3" strokeDasharray={`${(overallProgress.completedTasks / overallProgress.totalTasks * 100).toFixed(0)}, 100`} strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                        {((overallProgress.completedTasks / overallProgress.totalTasks) * 100).toFixed(0)}%
                      </div>
                  </div>
                   <p className="mt-4 text-gray-300">Tasks completion</p>
              </div>
          </Card>
      </div>

      <Card>
        <h3 className="font-semibold text-white mb-4">Phase Progress (by Task Count)</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={phaseData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
              <YAxis tick={{ fill: '#9ca3af' }} />
              <Tooltip cursor={{fill: '#37415180'}} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}/>
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#4f46e5" name="Completed Tasks" />
              <Bar dataKey="remaining" stackId="a" fill="#374151" name="Remaining Tasks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <Card>
          <h3 className="font-semibold text-white mb-4">Phase Status Details</h3>
          <div className="space-y-4">
            {phaseData.map((phase) => (
              <div key={phase.name}>
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-gray-300">{phase.name}</h4>
                    <span className="text-sm font-mono text-indigo-300">{phase.completed}/{phase.total} tasks | {phase.hoursSpent}h/{phase.totalHours}h</span>
                </div>
                <ProgressBar progress={phase.progress} />
              </div>
            ))}
          </div>
      </Card>
    </div>
  );
}

export default Dashboard;