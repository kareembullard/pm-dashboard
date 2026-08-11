
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = '' }: CardProps): React.ReactNode {
  return (
    <div className={`bg-gray-800 shadow-lg rounded-xl overflow-hidden ${className}`}>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export default Card;
