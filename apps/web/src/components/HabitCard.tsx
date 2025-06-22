import React from 'react';

interface HabitCardProps {
  name: string;
  streak: number;
  color: string;
  onComplete: () => void;
}

export const HabitCard = ({ name, streak, color, onComplete }: HabitCardProps) => (
  <div className={`p-4 rounded-lg shadow-sm border-l-4 border-${color}-500 bg-white`}>
    <div className="flex justify-between items-center">
      <h3 className="font-medium text-gray-900">{name}</h3>
      <span className={`text-sm px-2 py-1 rounded-full bg-${color}-100 text-${color}-800`}>
        {streak} days 🔥
      </span>
    </div>
    <button 
      onClick={onComplete}
      className="mt-3 w-full py-2 bg-primary-100 text-primary-700 rounded-md hover:bg-primary-200 transition-colors red"
    >
      Mark Complete
    </button>
  </div>
);