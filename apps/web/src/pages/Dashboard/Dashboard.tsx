import React, { useState } from 'react';
import { HabitCard } from '../../components/HabitCard';
import { PlusIcon } from '@heroicons/react/24/outline';

const mockHabits = [
  { id: 1, name: 'Morning Meditation', streak: 7, color: 'primary' },
  { id: 2, name: 'Drink 2L Water', streak: 3, color: 'secondary' },
];

export const Dashboard = () => {
  const [habits, setHabits] = useState(mockHabits);

  const handleComplete = (id: number) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, streak: h.streak + 1 } : h
    ));
  };

  return (
    <div>
      <header className="mb-6 items-center">
        <h1 className="text-2xl font-bold text-gray-900">Today's Habits</h1>
        <p className="text-gray-600">Keep your streak going!</p>
      </header>

      <div className="space-y-4">
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            name={habit.name}
            streak={habit.streak}
            color={habit.color}
            onComplete={() => handleComplete(habit.id)}
          />
        ))}
      </div>

      <button 
        className="mt-8 w-full py-3 bg-primary-500 text-white rounded-lg flex items-center justify-center gap-2"
        onClick={() => window.location.href = '/create'}
      >
        <PlusIcon className="w-5 h-5" />
        Add New Habit
      </button>
    </div>
  );
};