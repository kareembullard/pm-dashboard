export interface Task {
  id: number;
  text: string;
  hours: number;
  completed: boolean;
  timeSpent: number;
}

export interface Phase {
  id: number;
  name: string;
  totalHours: number;
  tasks: Task[];
}

export interface ProjectState {
  project: {
    name: string;
    startDate: string;
    duration: string;
    totalHours: number;
  };
  phases: Phase[];
}

export interface WikiSection {
    title: string;
    content: string;
}
}
