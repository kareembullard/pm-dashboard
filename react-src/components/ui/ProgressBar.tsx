
import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

function ProgressBar({ progress, className = '' }: ProgressBarProps): React.ReactNode {
  const sanitizedProgress = Math.max(0, Math.min(100, progress));
  
  return (
    <div className={`w-full bg-gray-700 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${sanitizedProgress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
