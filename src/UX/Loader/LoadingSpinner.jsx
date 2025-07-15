// components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner Animation */}
        <div className="relative w-24 h-24">
          {/* Outer circle (faded) */}
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-full animate-pulse"></div>
          {/* Inner spinning arc */}
          <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Loading Text with Animated Dots */}
        <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 tracking-wide">
          Loading
          <span className="inline-block animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
        </div>

        {/* Optional: Subtitle or Tip */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 animate-fade-in">
          Please wait a moment...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;