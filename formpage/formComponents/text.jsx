import React from 'react';

const Text = ({ question }) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={question.keyword}
        className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200"
      >
        {question.name}
      </label>
      <input
        type="text"
        id={question.keyword}
        name={question.keyword}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
        placeholder={`Enter ${question.name.toLowerCase()}`}
      />
    </div>
  );
};

export default Text;