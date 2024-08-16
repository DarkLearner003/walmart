"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [ismemoryModalOpen, setIsmemoryModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [memory, setMemory] = useState([]);
  const [newMemory, setNewMemory] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const toggleMemoryModal = () => {
    setIsmemoryModalOpen(!ismemoryModalOpen);
  };

  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const addMemory = () => {
    if (newMemory.trim()) {
      setMemory([...memory, newMemory]);
      setNewMemory("");
    }
  };

  const deleteMemory = (index) => {
    setMemory(memory.filter((_, i) => i !== index));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
       <div className="flex items-center">
            <span className="ml-4 font-bold text-lg">SmallMart</span>
          </div>
      <form
        className="flex border-2 w-full max-w-lg mx-auto p-1 rounded-3xl shadow-md bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?query=${encodeURIComponent(query)}`);
        }}
      >
        <input
          className="flex-grow p-1 rounded-3xl focus:outline-none focus:border-blue-500 transition text-black" // Added text-black class
          type="text"
          placeholder="Describe the product you need"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          className="ml-2 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition"
          type="submit"
        >
          🔍
        </button>
      </form>
      <div className="fixed top-2 right-2 space-x-2">
        <button
          className="bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition"
          onClick={toggleMemoryModal}
        >
          M
        </button>
        <button
          className="bg-green-500 text-white rounded-full p-2 shadow-md hover:bg-green-600 transition"
          onClick={toggleTaskModal}
        >
          H
        </button>
      </div>

      {/* Memory Modal */}
      {ismemoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Memories</h2>
            <input
              type="text"
              className="border p-2 rounded w-full mb-4 border-gray-300 focus:outline-none focus:border-blue-500 transition"
              placeholder="Add a new memory"
              value={newMemory}
              onChange={(e) => setNewMemory(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4 shadow-md hover:bg-blue-600 transition"
              onClick={addMemory}
            >
              Add Memory
            </button>
            <div className="max-h-64 overflow-y-auto">
              {memory.length === 0 ? (
                <p className="text-gray-700">No memory yet.</p>
              ) : (
                memory.map((memory, index) => (
                  <div
                    key={index}
                    className="border-b py-2 flex justify-between items-center"
                  >
                    <span className="text-gray-700">{memory}</span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteMemory(index)}
                    >
                      &#x2715;
                    </button>
                  </div>
                ))
              )}
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleMemoryModal}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}

      {isTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Tasks</h2>
            <input
              type="text"
              className="border p-2 rounded w-full mb-4 border-gray-300 focus:outline-none focus:border-green-500 transition"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mb-4 shadow-md hover:bg-green-600 transition"
              onClick={addTask}
            >
              Add Task
            </button>
            <div className="max-h-64 overflow-y-auto">
              {tasks.length === 0 ? (
                <p className="text-gray-700">No tasks yet.</p>
              ) : (
                tasks.map((task, index) => (
                  <div
                    key={index}
                    className="border-b py-2 flex justify-between items-center"
                  >
                    <span className="text-gray-700">{task}</span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteTask(index)}
                    >
                      &#x2715;
                    </button>
                  </div>
                ))
              )}
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleTaskModal}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
