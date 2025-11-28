import React from 'react';

const FilterControls = ({ setFilter }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => setFilter('All')}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        All
      </button>
      <button
        onClick={() => setFilter('Pending')}
        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition"
      >
        Pending
      </button>
      <button
        onClick={() => setFilter('In Progress')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
      >
        In Progress
      </button>
      <button
        onClick={() => setFilter('Pending Approval')}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition"
      >
        Pending Approval
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterControls;
