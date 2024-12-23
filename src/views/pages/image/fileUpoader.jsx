import React, { useState } from "react";
import { AiOutlineFileMarkdown } from "react-icons/ai";
import Process from "./Process";

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Handle file selection
  const handleFiles = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  // Handle manual file input
  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  // Remove a specific file
  const handleRemoveFile = (fileIndex) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-100 p-4 rounded-lg">
      <input
        type="file"
        className="hidden"
        id="file-input"
        onChange={handleFileInputChange}
      />
      <label htmlFor="file-input" className="cursor-pointer">
        <div
          className={`border-[1px] hover:bg-base-300 transition-all ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-500"
          }  rounded-lg p-6 w-full text-center transition-colors text-gray-500 hover:text-blue-500`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <AiOutlineFileMarkdown className="w-8 h-8 text-green-500 mx-auto" />
          <label>
            {isDragging
              ? "Drop your files here"
              : "Drag and drop files here or click to upload"}
          </label>
        </div>

        <div className="mt-4 w-full">
          {files.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold">Uploaded Files:</h3>
              <ul className="mt-2 list-disc list-inside">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default FileUploader;
