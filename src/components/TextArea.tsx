import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-start text-sm font-medium text-gray-200 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full min-h-[200px] bg-white/5 border border-gray-700 rounded-lg p-4 
          text-white placeholder-gray-400 focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:border-transparent ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}