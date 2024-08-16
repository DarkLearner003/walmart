'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [ismemoryModalOpen, setIsmemoryModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [memory, setmemory] = useState([]);
  const [newmemory, setNewmemory] = useState('');
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const togglememoryModal = () => {
    setIsmemoryModalOpen(!ismemoryModalOpen);
  };

  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };

  const addmemory = () => {
    if (newmemory.trim()) {
      setmemory([...memory, newmemory]);
      setNewmemory('');
    }
  };

  const deletememory = (index) => {
    setmemory(memory.filter((_, i) => i !== index));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <form
        className="flex border-2 w-1/2 justify-between p-1 rounded-3xl"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`search?query=${query}`);
        }}
      >
        <input
          className="p-1 rounded-3xl"
          type="text"
          placeholder="Search Walmart"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="bg-blue-500 rounded-full p-2">🔍</button>
      </form>
      <button
        className="absolute top-2 right-3 px-2 py-1 bg-blue-500 text-white rounded-full"
        onClick={togglememoryModal}
      >
        M
      </button>
      <button
        className="absolute top-2 right-16 px-2 py-1 bg-green-500 text-white rounded-full"
        onClick={toggleTaskModal}
      >
        H
      </button>

      {/* memory-Taking Modal */}
      {ismemoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">Memories</h2>
            <input
              type="text"
              className="border p-2 rounded w-full mb-4"
              placeholder="Add a new memory"
              value={newmemory}
              onChange={(e) => setNewmemory(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              onClick={addmemory}
            >
              Add memory
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
                      onClick={() => deletememory(index)}
                    >
                      &#x2715;
                    </button>
                  </div>
                ))
              )}
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={togglememoryModal}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}

      {/* Task Management Modal */}
      {isTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4">History</h2>
            Suggest me some cameras under 30k
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
