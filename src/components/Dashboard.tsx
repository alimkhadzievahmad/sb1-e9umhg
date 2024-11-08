import React from 'react';
import { TaskConstructor } from './TaskConstructor';
import { RecommendedCourses } from './RecommendedCourses';
import { Analytics } from './Analytics';
import { AIChat } from './AIChat';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <TaskConstructor />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <RecommendedCourses />
          <Analytics />
          <div className="fixed bottom-4 right-4 w-80">
            <AIChat />
          </div>
        </div>
      </div>
    </div>
  );
}