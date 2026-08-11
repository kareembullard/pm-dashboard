import { ProjectState } from '../types';

export const initialState: ProjectState = {
  project: {
    name: "Learning React",
    startDate: "2024-01-01",
    duration: "4 weeks",
    totalHours: 40,
  },
  phases: [
    {
      id: 1,
      name: "Phase 1",
      totalHours: 10,
      tasks: [
        {
          id: 1,
          text: "Learn React Basics",
          hours: 10,
          completed: false,
          timeSpent: 0
        }
      ]
    }
  ]
};
