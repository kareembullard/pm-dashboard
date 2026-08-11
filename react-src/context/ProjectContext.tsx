import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectState } from '../types';
import { initialState } from '../data/initialState';

type Action = 
  | { type: 'TOGGLE_TASK'; payload: { taskId: number } }
  | { type: 'UPDATE_TIME_SPENT'; payload: { taskId: number; timeSpent: number } };

interface ProjectContextType {
  state: ProjectState;
  dispatch: (action: Action) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProjectState>(initialState);

  const dispatch = (action: Action) => {
    switch (action.type) {
      case 'TOGGLE_TASK':
        setState(prevState => {
          const updatedPhases = prevState.phases.map(phase => ({
            ...phase,
            tasks: phase.tasks.map(task =>
              task.id === action.payload.taskId ? { ...task, completed: !task.completed } : task
            ),
          }));
          return { ...prevState, phases: updatedPhases };
        });
        break;
      case 'UPDATE_TIME_SPENT':
        setState(prevState => {
          const updatedPhases = prevState.phases.map(phase => ({
            ...phase,
            tasks: phase.tasks.map(task =>
              task.id === action.payload.taskId ? { ...task, timeSpent: action.payload.timeSpent } : task
            ),
          }));
          return { ...prevState, phases: updatedPhases };
        });
        break;
      default:
        console.error('Unknown action:', action.type);
    }
  };

  const value: ProjectContextType = {
    state,
    dispatch,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext(): ProjectContextType {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}
export const useProject = useProjectContext;
