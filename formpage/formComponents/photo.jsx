import React from 'react';

const Photo = ({question}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={question.keyword}
        className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200"
      >
        {question.name}
      </label>
      <input
        type="file"
        id={question.keyword}
        name={question.keyword}
        accept="image/*"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
};

export default Photo;