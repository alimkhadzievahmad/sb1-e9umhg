import React from 'react';
import { BarChart2, Clock, LineChart, Timer } from 'lucide-react';

export function Analytics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-4">Аналитика</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Performance Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart2 className="h-5 w-5 text-purple-500" />
            </div>
            <span className="font-medium">Успеваемость</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Алгебра</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Геометрия</span>
                <span>80%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '80%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Вероятности</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Timer className="h-5 w-5 text-blue-500" />
            </div>
            <span className="font-medium">Распределение</span>
          </div>
          <div className="flex items-center justify-center h-[140px]">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray={`${78 * 0.78}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-semibold">78%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <LineChart className="h-5 w-5 text-green-500" />
            </div>
            <span className="font-medium">Прогресс</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Решено задач:</span>
              <span className="font-medium">145</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Правильных ответов:</span>
              <span className="text-green-500 font-medium">89%</span>
            </div>
          </div>
        </div>

        {/* Time Card */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-orange-500" />
            </div>
            <span className="font-medium">Время</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Среднее время на задачу</span>
              <span className="font-medium">4.5 мин</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Всего времени</span>
              <span className="font-medium">12.4 ч</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}