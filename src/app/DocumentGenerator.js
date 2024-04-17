// Hypothetical directive or method to ensure this component is recognized as a client component
// The actual implementation would depend on your specific framework or setup.
// use client;
'use client'
import React, { useState } from 'react';

const DocumentGenerator = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', text, file);
    // Here you would handle the API call
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Generate Document</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text prompt"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentGenerator;
