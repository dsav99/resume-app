'use client'
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoBrowsers, IoDocumentTextOutline } from 'react-icons/io5';



const DocumentGenerator = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', text, file);
    // API call would be handled here
    
  
    console.log(completion.choices[0]);
  };

  // Adding AWS deployment

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-xl font-bold text-center">Coding Challenge</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Text Input goes here..."
              className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              rows="5"
            ></textarea>
          </div>
          <div {...getRootProps({ className: 'dropzone' })} className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400">
            <input {...getInputProps()} />
            <IoBrowsers size="3em" className="my-2" />
            <p className="text-sm text-gray-500">Drag n drop file here, or click to upload</p>
            {file && <p className="mt-2 text-blue-500">File: {file.name}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 p-4 text-lg text-white rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentGenerator;
