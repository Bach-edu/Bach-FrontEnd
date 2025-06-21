import React from 'react';
import { Music } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Music className="w-8 h-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-200 rounded-2xl animate-spin mx-auto"></div>
        </div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">SkillLink Creativo</h2>
        <p className="text-slate-600">Loading your musical journey...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
