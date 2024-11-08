import React from 'react';

export function ProgressChart() {
  const subjects = [
    { name: 'Алгебра', progress: 75 },
    { name: 'Геометрия', progress: 80 },
    { name: 'Вероятности', progress: 85 },
  ];

  return (
    <div className="space-y-4">
      {subjects.map((subject) => (
        <div key={subject.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{subject.name}</span>
            <span className="font-medium">{subject.progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${subject.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}