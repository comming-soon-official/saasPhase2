import React, { useState, useCallback } from "react";
import {
  X,
  Upload,
  Camera,
  Plus,
  Edit2,
  Image,
  HardDrive,
  Delete,
  Trash,
} from "lucide-react";
import { MdAddToDrive } from "react-icons/md";
import pipelineStore from "../../../redux/pipelineSore";

const MLTrainingInterface = () => {
  const imageClasses = pipelineStore((state) => state.imageClasses);
  const write = pipelineStore((state) => state.write);
  const [dragActiveClass, setDragActiveClass] = useState(null);
  const [editingClass, setEditingClass] = useState(null);

  const handleImageUpload = (classId, files) => {
    write((state) => ({
      imageClasses: state.imageClasses.map((c) => {
        if (c.id === classId) {
          const newImages = Array.from(files).map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
          }));
          return {
            ...c,
            images: [...c.images, ...newImages],
          };
        }
        return c;
      }),
    }));
  };

  const handleDrop = useCallback((classId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveClass(null);

    const files = [...e.dataTransfer.files];
    if (files.length) {
      handleImageUpload(classId, files);
    }
  }, []);

  const handleDragOver = useCallback((classId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveClass(classId);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActiveClass(null);
  }, []);

  const removeImage = (classId, imageId) => {
    write((state) => ({
      imageClasses: state.imageClasses.map((c) => {
        if (c.id === classId) {
          return {
            ...c,
            images: c.images.filter((img) => img.id !== imageId),
          };
        }
        return c;
      }),
    }));
  };

  const addClass = () => {
    write((state) => ({
      imageClasses: [
        ...state.imageClasses,
        {
          id: Math.max(...state.imageClasses.map((c) => c.id)) + 1,
          name: `Class ${state.imageClasses.length + 1}`,
          images: [],
        },
      ],
    }));
  };

  const removeClass = ({ id }) => {
    write((state) => ({
      imageClasses: state.imageClasses.filter((c) => c.id !== id),
    }));
  };

  const startEditing = (classId) => {
    const classItem = imageClasses.find((c) => c.id === classId);
    setEditingClass({ id: classId, name: classItem.name });
  };

  const saveClassName = (name) => {
    if (!name.trim()) return;

    write((state) => ({
      imageClasses: state.imageClasses.map((c) =>
        c.id === editingClass.id ? { ...c, name: name.trim() } : c
      ),
    }));
    setEditingClass(null);
  };

  return (
    <div className="p-4 mx-auto w-1/2">
      <div className="space-y-4">
        {imageClasses.map((classItem) => (
          <div
            key={classItem.id}
            className={`card bg-base-100  shadow-xl ${
              dragActiveClass === classItem.id ? " bg-blue-200" : ""
            } border-gray-500 border-[1px]`}
            onDrop={(e) => handleDrop(classItem.id, e)}
            onDragOver={(e) => handleDragOver(classItem.id, e)}
            onDragLeave={handleDragLeave}
          >
            <div className="p-4 card-body">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  {editingClass?.id === classItem.id ? (
                    <input
                      type="text"
                      defaultValue={editingClass.name}
                      className="w-40 input input-sm input-bordered"
                      onBlur={(e) => saveClassName(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && saveClassName(e.target.value)
                      }
                      autoFocus
                    />
                  ) : (
                    <>
                      <h2 className="text-lg card-title">{classItem.name}</h2>
                      <button
                        onClick={() => startEditing(classItem.id)}
                        className="btn btn-ghost btn-xs"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>
                {imageClasses.length > 2 && (
                  <Trash
                    onClick={() => removeClass(classItem)}
                    className="w-4 h-4 cursor-pointer text-error"
                  />
                )}
              </div>
              <div className="border-b border-gray-400"></div>
              {/* Content */}
              <div className="flex gap-4 mt-4">
                {/* Left side - Upload area */}
                <div className="w-56">
                  <div
                    className={`flex flex-col justify-center items-center p-6 mb-3 bg-blue-50 rounded-lg border-2 border-blue-200 border-dashed`}
                  >
                    <div className="text-center">
                      <div className="mb-2">
                        <HardDrive className="mx-auto w-6 h-6 text-blue-500" />
                      </div>
                      <p className="mb-1 text-sm text-blue-600">
                        Choose images from your files,
                      </p>
                      <p className="text-sm text-blue-600">
                        or drag & drop here
                      </p>
                    </div>
                  </div>

                  <div className="p-3 mb-3 bg-blue-50 rounded-lg border-2 border-blue-200 border-dashed">
                    <div className="text-center">
                      <MdAddToDrive className="mx-auto mb-2 w-6 h-6 text-blue-500" />
                      <p className="text-sm text-blue-600">
                        Import images from
                        <br />
                        Google Drive
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-start items-center text-xs text-blue-600">
                    <Image />
                    <span>{classItem.images.length} Images</span>
                  </div>
                </div>

                {/* Right side - Image grid */}
                <div className="overflow-x-hidden flex-1">
                  <div className="grid grid-cols-5 gap-3 max-h-[150px] overflow-y-auto p-1">
                    {classItem.images.map((image) => (
                      <div
                        key={image.id}
                        className="relative group aspect-square"
                      >
                        <img
                          src={image.url}
                          alt="Sample"
                          className="object-cover w-full h-full rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(classItem.id, image.id)}
                          className="absolute -top-1 -right-1 bg-white shadow-md opacity-0 transition-opacity btn btn-circle btn-xs group-hover:opacity-100"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add class button */}
        <div className="card bg-base-100 border-gray-500 border-[1px] shadow-xl">
          <button
            onClick={addClass}
            className="items-center py-4 text-center transition-colors card-body text-base-content/60 hover:text-base-content"
          >
            <Plus className="w-5 h-5" />
            Add a class
          </button>
        </div>
      </div>
    </div>
  );
};

export default MLTrainingInterface;
