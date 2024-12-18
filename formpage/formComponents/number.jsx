'use client'
import React from 'react';

const Number = ({ question }) => {
  
    let error = '';

    const handleChange = (e) => {
        const value = e.target.value;
        if(value.length < 10){
            console.log(value)
        }else{
            error = 'only 10 number allowed'
        }
    }
    
    return (
    <div className="mb-4">
      <label 
        htmlFor={question.keyword}
        className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200"
      >
        {question.name}
      </label>
      <input
        type="number"
        id={question.keyword}
        name={question.keyword}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 hover:border-blue-400"
        placeholder={`Enter ${question.name.toLowerCase()}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default Number;