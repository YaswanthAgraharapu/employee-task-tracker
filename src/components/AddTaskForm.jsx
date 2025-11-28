import React, { useState } from 'react';

const AddTaskForm = ({ employees, onAddTask }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]?.id || '');
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim() || !selectedEmployee) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      status: "Pending",
    };
    onAddTask(Number(selectedEmployee), newTask);
    setTaskTitle("");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
        {employees.length > 1 && (
          <div className="flex-grow">
            <label htmlFor="employee" className="block text-sm font-medium text-gray-300 mb-1">
              Assign To
            </label>
            <select
              id="employee"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
            >
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="flex-grow">
          <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-300 mb-1">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
            placeholder="Enter task title"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
