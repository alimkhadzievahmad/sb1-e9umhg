import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

export function RecommendedCourses() {
  const courses = [
    {
      title: 'Алгебра',
      level: 'Базовый уровень',
      lessons: 12,
      progress: 60,
    },
    {
      title: 'Геометрия',
      level: 'Продвинутый уровень',
      lessons: 15,
      progress: 30,
    },
    {
      title: 'Теория вероятностей',
      level: 'Базовый уровень',
      lessons: 8,
      progress: 45,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">Рекомендуемые курсы</h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.title} className="flex items-center justify-between group">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-sm font-medium">{course.title}</h3>
                  <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
                </div>
                <p className="text-sm text-gray-500">{course.level}</p>
                <p className="text-sm text-gray-500">{course.lessons} уроков</p>
              </div>
            </div>
            <div className="w-48">
              <div className="h-2 bg-gray-100 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <div className="text-right text-sm text-gray-500 mt-1">{course.progress}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}