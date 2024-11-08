import React from 'react';
import { BookOpen, UserCircle2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-lg font-medium">Тренажер ЕГЭ</span>
          </div>
          
          <button className="flex items-center px-4 py-2 rounded-full bg-gray-50 text-sm text-gray-700 hover:bg-gray-100">
            <UserCircle2 className="h-5 w-5 mr-2" />
            Личный кабинет
          </button>
        </div>
      </div>
    </header>
  );
}