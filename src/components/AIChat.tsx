import React, { useState } from 'react';
import { Send, Bot, X, Minimize2 } from 'lucide-react';

export function AIChat() {
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-3 border-b flex items-center justify-between bg-white">
        <div className="flex items-center">
          <Bot className="h-5 w-5 text-blue-500" />
          <h2 className="ml-2 text-sm font-medium">Математический ассистент</h2>
          <div className="ml-2 text-xs text-green-500">5 сек</div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-gray-600"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <div className="h-[200px] bg-gray-50 p-4 overflow-y-auto">
            <div className="flex items-start space-x-2 mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                <p className="text-sm">Привет! Я ваш персональный помощник по математике. Как я могу помочь вам сегодня?</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите ваш вопрос..."
                className="flex-1 text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}