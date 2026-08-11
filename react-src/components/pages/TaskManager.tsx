import React, { useState, useEffect, useCallback } from 'react';
import { useProjectContext } from '../../context/ProjectContext';
import { Clock, CheckCircle, Circle, Play, Square } from 'lucide-react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { Task, Phase } from '../../types';

function TaskManager() {
  const { state, dispatch } = useProjectContext();
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timerStart, setTimerStart] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState<number>(0);

  const stopTimer = useCallback(() => {
    if (activeTimer && timerStart) {
      const timeSpentInSeconds = (Date.now() - timerStart) / 1000;
      const timeSpentInHours = timeSpentInSeconds / 3600;
      
      const currentTask = state.phases
        .flatMap(phase => phase.tasks)
        .find(task => task.id === activeTimer);
      
      if (currentTask) {
        dispatch({ 
          type: 'UPDATE_TIME_SPENT', 
          payload: { taskId: activeTimer, timeSpent: currentTask.timeSpent + timeSpentInHours }
        });
      }
    }
    setActiveTimer(null);
    setTimerStart(null);
    setElapsed(0);
  }, [activeTimer, dispatch, state.phases, timerStart]);

  const startTimer = (taskId: number) => {
    if(activeTimer) {
      stopTimer();
    }
    setActiveTimer(taskId);
    setTimerStart(Date.now());
  };


  useEffect(() => {
    let interval: number | undefined;
    if (activeTimer && timerStart) {
      interval = window.setInterval(() => {
        setElapsed(Date.now() - timerStart);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTimer, timerStart]);


  const toggleTask = (taskId: number) => {
    if (activeTimer === taskId) {
        stopTimer();
    }
    dispatch({ type: 'TOGGLE_TASK', payload: { taskId } });
  };
  
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Task Manager</h1>
      
      {state.phases.map(phase => {
        const completedTasks = phase.tasks.filter(t => t.completed).length;
        const totalTasks = phase.tasks.length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        return (
        <Card key={phase.id}>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-indigo-300">{phase.name}</h2>
            <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-400">{completedTasks} of {totalTasks} completed</span>
            </div>
            <ProgressBar progress={progress} className="mt-2"/>
          </div>
          
          <div className="space-y-2">
            {phase.tasks.map(task => (
              <div key={task.id} className={`flex items-center p-3 rounded-lg transition-colors ${task.completed ? 'bg-green-500/10' : 'bg-gray-700/50 hover:bg-gray-700'}`}>
                <button 
                  className="flex-shrink-0 mr-4"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? <CheckCircle className="w-6 h-6 text-green-400"/> : <Circle className="w-6 h-6 text-gray-500"/>}
                </button>
                
                <div className="flex-grow">
                  <span className={` ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>{task.text}</span>
                  <div className="flex items-center text-xs text-gray-400 mt-1 space-x-4">
                    <span className="flex items-center"><Clock size={12} className="mr-1"/>Est: {task.hours}h</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1"/>Spent: {task.timeSpent.toFixed(2)}h</span>
                  </div>
                </div>
                
                <div className="flex items-center ml-4">
                 {activeTimer === task.id && <span className="text-indigo-400 font-mono text-sm mr-4">{formatTime(elapsed)}</span>}
                  {activeTimer === task.id ? (
                    <button 
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/40"
                      onClick={stopTimer}
                      title="Stop Timer"
                    >
                      <Square size={14} />
                    </button>
                  ) : (
                    <button 
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${task.completed ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-green-500/20 text-green-400 hover:bg-green-500/40'}`}
                      onClick={() => startTimer(task.id)}
                      disabled={task.completed}
                      title="Start Timer"
                    >
                      <Play size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )})}
    </div>
  );
}

export default TaskManager;
