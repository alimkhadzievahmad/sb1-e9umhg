import React from 'react';

interface TaskDifficultyProps {
  difficulty: 'easy' | 'medium' | 'hard';
}

export function TaskDifficulty({ difficulty }: TaskDifficultyProps) {
  const getColor = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLabel = () => {
    switch (difficulty) {
      case 'easy':
        return 'легкий';
      case 'medium':
        return 'средний';
      case 'hard':
        return 'сложный';
      default:
        return '';
    }
  };

  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getColor()}`}>
      {getLabel()}
    </span>
  );
}