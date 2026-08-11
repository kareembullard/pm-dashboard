
import React, { useState } from 'react';
import { WikiSection } from '../../types';

const wikiContent: Record<string, WikiSection> = {
    overview: {
      title: "Project Overview",
      content: `
# React Portfolio Centralization (RPC-2025)

## Objective
Transform scattered Perplexity prototype React apps into a centralized, AI-assisted development environment with a professional deployment pipeline.

## Success Criteria
- All prototypes migrated to GitHub repositories
- AI-assisted development environment operational
- Continuous deployment pipeline established
- Data persistence layer implemented
- Professional development workflow achieved
      `
    },
    architecture: {
      title: "Tech Stack Architecture",
      content: `
# Recommended Tech Stack

## Core Infrastructure
- **GitHub**: Version control and repository management
- **GitHub Codespaces**: Cloud development environment
- **Vercel**: React app hosting and deployment
- **Supabase**: Backend services and database

## AI Assistance
- **GitHub Copilot**: Primary AI coding assistant
- **Gemini Code Assist**: Secondary AI assistant with free tier
- **Loveable**: Strategic usage for complex implementations
      `
    },
    workflow: {
      title: "Development Workflow",
      content: `
# Development Process

## Daily Workflow
1. Use GitHub Codespaces for development
2. Implement features with AI assistance
3. Commit changes to GitHub
4. Automatic deployment via Vercel
5. Monitor through Supabase dashboard

## Best Practices
- Consistent repository structure
- Regular commits with descriptive messages
- Environment variable management
- Testing before deployment
      `
    }
  };

function Wiki(): React.ReactNode {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)] bg-gray-800 rounded-xl shadow-lg">
      <aside className="w-full md:w-64 flex-shrink-0 bg-gray-900/50 p-6 border-b md:border-b-0 md:border-r border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Documentation</h2>
        <nav className="space-y-2">
          {Object.entries(wikiContent).map(([key, section]) => (
            <button
              key={key}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors text-sm ${
                activeSection === key 
                ? 'bg-indigo-600 text-white font-semibold' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setActiveSection(key)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>
      
      <main className="flex-1 p-8 overflow-y-auto">
        <article className="prose prose-invert prose-pre:bg-gray-900/70 prose-pre:rounded-lg max-w-none">
          <pre className="whitespace-pre-wrap font-sans">{wikiContent[activeSection].content}</pre>
        </article>
      </main>
    </div>
  );
}

export default Wiki;
