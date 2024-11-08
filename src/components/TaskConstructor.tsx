import React, { useState } from 'react';
import { ChevronRight, Trophy, Minus, Plus } from 'lucide-react';

interface Task {
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface TopicSection {
  id: string;
  title: string;
  tasks: Task[];
  isExpanded?: boolean;
}

export function TaskConstructor() {
  const [shortAnswer, setShortAnswer] = useState(true);
  const [detailedAnswer, setDetailedAnswer] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const topics: TopicSection[] = [
    {
      id: 'plane-geometry',
      title: 'Планиметрия',
      tasks: [
        {
          name: 'Прямоугольный треугольник',
          description: 'В прямоугольном треугольнике катеты равны 6 см и 8 см. Найдите длину гипотенузы и площадь треугольника.',
          difficulty: 'easy'
        },
        {
          name: 'Равнобедренный треугольник',
          description: 'В равнобедренном треугольнике равные стороны равны 10 см, а основание — 12 см. Найдите высоту и площадь треугольника.',
          difficulty: 'medium'
        },
        {
          name: 'Общий треугольник',
          description: 'В треугольнике ABC сторона AB = 7 см, сторона AC = 9 см, и угол при вершине A = 60°. Найдите длину стороны BC.',
          difficulty: 'hard'
        },
        {
          name: 'Параллелограмм',
          description: 'В параллелограмме стороны равны 5 см и 8 см, а угол между ними — 45°. Найдите площадь параллелограмма.',
          difficulty: 'medium'
        },
        {
          name: 'Трапеция',
          description: 'В трапеции основания равны 14 см и 10 см, а боковые стороны равны 5 см каждая. Определите высоту и площадь трапеции.',
          difficulty: 'hard'
        }
      ]
    },
    {
      id: 'vectors',
      title: 'Векторы',
      tasks: [
        {
          name: 'Сложение векторов',
          description: 'Даны векторы a = (3, -2) и b = (-1, 4). Найдите результирующий вектор c = a + b.',
          difficulty: 'easy'
        },
        {
          name: 'Скалярное произведение',
          description: 'Вычислите скалярное произведение векторов u = (2, -1, 3) и v = (4, 0, -2).',
          difficulty: 'medium'
        },
        {
          name: 'Величина и направление',
          description: 'Найдите величину и угол направления вектора w = (5, 5).',
          difficulty: 'medium'
        },
        {
          name: 'Перпендикулярные векторы',
          description: 'Определите, являются ли векторы p = (7, -2) и q = (2, 7) перпендикулярными.',
          difficulty: 'hard'
        },
        {
          name: 'Умножение на скаляр',
          description: 'Если вектор r = (3, -4), найдите 2r и его величину.',
          difficulty: 'easy'
        }
      ]
    },
    {
      id: 'solid-geometry',
      title: 'Стереометрия',
      tasks: [
        {
          name: 'Куб',
          description: 'Куб имеет объем 216 см³. Найдите длину одной стороны и общую площадь поверхности.',
          difficulty: 'easy'
        },
        {
          name: 'Прямоугольный параллелепипед',
          description: 'Прямоугольный параллелепипед имеет размеры длины = 10 см, ширины = 4 см и высоты = 5 см. Найдите длину пространственной диагонали.',
          difficulty: 'medium'
        },
        {
          name: 'Составное тело',
          description: 'К цилиндру с радиусом 3 см и высотой 10 см прикреплен конус с тем же радиусом и высотой 4 см. Найдите общий объем составного тела.',
          difficulty: 'hard'
        },
        {
          name: 'Площадь поверхности',
          description: 'Найдите площадь поверхности призмы с треугольным основанием, стороны которого 6 см, 8 см и 10 см, и высотой 12 см.',
          difficulty: 'medium'
        },
        {
          name: 'Объем пирамиды',
          description: 'Вычислите объем пирамиды с квадратным основанием со стороной 9 см и перпендикулярной высотой 15 см.',
          difficulty: 'medium'
        }
      ]
    },
    // ... [Previous topics remain the same]
    {
      id: 'number-properties',
      title: 'Числа и их свойства',
      tasks: [
        {
          name: 'Делимость и простые числа',
          description: 'Является ли число 97 простым числом?',
          difficulty: 'easy'
        },
        {
          name: 'Числовые последовательности',
          description: 'Найдите 10-й член арифметической прогрессии, если первый член равен 3, а разность — 5',
          difficulty: 'medium'
        },
        {
          name: 'Сумма ряда',
          description: 'Вычислите сумму всех четных чисел от 1 до 100',
          difficulty: 'medium'
        },
        {
          name: 'Комбинаторика',
          description: 'Сколько различных 4-значных чисел можно составить, используя цифры 1, 2, 3 и 4 без повторений?',
          difficulty: 'medium'
        },
        {
          name: 'Сюжетная задача',
          description: 'В театре 15 рядов, каждый ряд имеет на 2 места больше, чем предыдущий. Если в первом ряду 20 мест, сколько всего мест в театре?',
          difficulty: 'hard'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const weekDays = [
    { key: 'mon', label: 'П' },
    { key: 'tue', label: 'В' },
    { key: 'wed', label: 'С' },
    { key: 'thu', label: 'Ч' },
    { key: 'fri', label: 'П' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-3xl font-bold mb-1">0</div>
          <div className="text-sm text-gray-500">Решите 3 задачи, чтобы начать серию</div>
        </div>
        <Trophy className="h-12 w-12 text-yellow-400" />
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {weekDays.map((day) => (
          <div key={day.key} className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400">
            {day.label}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Конструктор варианта</h2>
        <p className="text-sm text-gray-500">Выберите темы и количество заданий для тренировки</p>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {topics.map((topic) => (
          <div key={topic.id} className="border-b border-gray-100 pb-4">
            <button
              onClick={() => toggleSection(topic.id)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center">
                <ChevronRight 
                  className={`h-4 w-4 mr-2 transition-transform ${
                    expandedSections.includes(topic.id) ? 'transform rotate-90' : ''
                  }`}
                />
                <span className="text-sm font-medium">{topic.title}</span>
              </div>
            </button>
            
            {expandedSections.includes(topic.id) && (
              <div className="mt-2 ml-6 space-y-2">
                {topic.tasks.map((task) => (
                  <TaskRow 
                    key={task.name}
                    task={task}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="short" 
            checked={shortAnswer}
            onChange={(e) => setShortAnswer(e.target.checked)}
            className="mr-2" 
          />
          <label htmlFor="short" className="text-sm">Краткий ответ</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="detailed" 
            checked={detailedAnswer}
            onChange={(e) => setDetailedAnswer(e.target.checked)}
            className="mr-2" 
          />
          <label htmlFor="detailed" className="text-sm">Развернутый ответ</label>
        </div>
      </div>

      <button className="w-full mt-6 bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-colors">
        Начать тренировку
      </button>
    </div>
  );
}

interface TaskRowProps {
  task: Task;
  className?: string;
}

function TaskRow({ task, className = '' }: TaskRowProps) {
  const [count, setCount] = useState(0);

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-700">{task.name}</span>
            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
              task.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              task.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {task.difficulty === 'easy' ? 'легкий' :
               task.difficulty === 'medium' ? 'средний' :
               'сложный'}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-4">
        <button 
          className="p-1 text-gray-400 hover:text-gray-600"
          onClick={() => setCount(prev => Math.max(0, prev - 1))}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{count}</span>
        <button 
          className="p-1 text-gray-400 hover:text-gray-600"
          onClick={() => setCount(prev => prev + 1)}
        >
          <Plus className="h-4 w-4" />
        </button>
        <button className="ml-2 text-gray-400 hover:text-gray-600">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}