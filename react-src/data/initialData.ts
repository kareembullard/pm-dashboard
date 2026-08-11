
import { ProjectState } from '../types';

export const initialData: ProjectState = {
  project: {
    name: "React Portfolio Centralization (RPC-2025)",
    startDate: "2025-07-29",
    duration: "3 weeks",
    totalHours: 42,
  },
  phases: [
    {
      id: 1,
      name: "Infrastructure Foundation",
      totalHours: 9,
      tasks: [
        { id: 101, text: "Create GitHub organization or prepare personal account", hours: 1, completed: false, timeSpent: 0 },
        { id: 102, text: "Design repository naming convention and structure", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 103, text: "Create template repository with standard React structure", hours: 1, completed: false, timeSpent: 0 },
        { id: 104, text: "Configure organization settings and permissions", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 105, text: "Set up GitHub CLI on local machine", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 106, text: "Create Supabase account and new project", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 107, text: "Design initial database schema for prototype data", hours: 1, completed: false, timeSpent: 0 },
        { id: 108, text: "Configure authentication settings", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 109, text: "Set up API keys and environment variables", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 110, text: "Test database connectivity and basic operations", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 111, text: "Create Vercel account and connect to GitHub", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 112, text: "Configure deployment settings and build commands", hours: 1, completed: false, timeSpent: 0 },
        { id: 113, text: "Set up environment variable management", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 114, text: "Test initial deployment with sample React app", hours: 1, completed: false, timeSpent: 0 },
      ],
    },
    {
      id: 2,
      name: "Prototype Migration",
      totalHours: 10,
      tasks: [
        { id: 201, text: "Inventory all existing Perplexity prototypes", hours: 1, completed: false, timeSpent: 0 },
        { id: 202, text: "Document features and functionality of each prototype", hours: 2, completed: false, timeSpent: 0 },
        { id: 203, text: "Identify common dependencies and patterns", hours: 1, completed: false, timeSpent: 0 },
        { id: 204, text: "Create migration priority list based on complexity", hours: 0.5, completed: false, timeSpent: 0 },
        { id: 205, text: "Create individual repositories for each prototype", hours: 1, completed: false, timeSpent: 0 },
        { id: 206, text: "Migrate prototype code to respective repositories", hours: 2, completed: false, timeSpent: 0 },
        { id: 207, text: "Standardize package.json and dependencies", hours: 1, completed: false, timeSpent: 0 },
        { id: 208, text: "Update import statements and file paths", hours: 1, completed: false, timeSpent: 0 },
        { id: 209, text: "Test each migrated prototype locally", hours: 0.5, completed: false, timeSpent: 0 },
      ],
    },
    {
        id: 3,
        name: "AI Development Integration",
        totalHours: 8,
        tasks: [
            { id: 301, text: "Create .devcontainer configuration files", hours: 1, completed: false, timeSpent: 0 },
            { id: 302, text: "Configure development environment with React dependencies", hours: 1, completed: false, timeSpent: 0 },
            { id: 303, text: "Set up VS Code extensions and settings", hours: 0.5, completed: false, timeSpent: 0 },
            { id: 304, text: "Test Codespaces environment with multiple projects", hours: 1, completed: false, timeSpent: 0 },
            { id: 305, text: "Set up GitHub Copilot subscription and configuration", hours: 0.5, completed: false, timeSpent: 0 },
            { id: 306, text: "Configure Gemini Code Assist integration", hours: 0.5, completed: false, timeSpent: 0 },
            { id: 307, text: "Test AI assistance across different project types", hours: 1, completed: false, timeSpent: 0 },
            { id: 308, text: "Create Loveable credit usage strategy", hours: 0.5, completed: false, timeSpent: 0 },
            { id: 309, text: "Document AI assistant workflows and best practices", hours: 2, completed: false, timeSpent: 0 },
        ]
    },
    {
        id: 4,
        name: "Data Layer Implementation",
        totalHours: 9,
        tasks: [
            { id: 401, text: "Analyze data requirements for each prototype", hours: 1.5, completed: false, timeSpent: 0 },
            { id: 402, text: "Design normalized database schema", hours: 1, completed: false, timeSpent: 0 },
            { id: 403, text: "Create database tables and relationships in Supabase", hours: 1, completed: false, timeSpent: 0 },
            { id: 404, text: "Set up Row Level Security policies", hours: 1, completed: false, timeSpent: 0 },
            { id: 405, text: "Install Supabase client libraries in relevant projects", hours: 0.5, completed: false, timeSpent: 0 },
            { id: 406, text: "Implement database connection and configuration", hours: 1, completed: false, timeSpent: 0 },
            { id: 407, text: "Create API service modules for data operations", hours: 2, completed: false, timeSpent: 0 },
            { id: 408, text: "Implement authentication components", hours: 1, completed: false, timeSpent: 0 },
        ]
    },
    {
        id: 5,
        name: "Deployment Pipeline",
        totalHours: 6,
        tasks: [
            { id: 501, text: "Configure Vercel deployment for each repository", hours: 2, completed: false, timeSpent: 0 },
            { id: 502, text: "Set up custom domains if required", hours: 1, completed: false, timeSpent: 0 },
            { id: 503, text: "Configure environment variables for production", hours: 1, completed: false, timeSpent: 0 },
            { id: 504, text: "Test deployment pipeline with sample changes", hours: 1, completed: false, timeSpent: 0 },
            { id: 505, text: "Create GitHub Actions workflows for automated testing", hours: 1, completed: false, timeSpent: 0 },
        ]
    }
  ],
};
