import React from 'react';

const Dashboard = ({ employees, isAdmin = false }) => {
  const totalTasks = employees.reduce((acc, employee) => acc + employee.tasks.length, 0);
  const completedTasks = employees.reduce((acc, employee) => {
    return acc + employee.tasks.filter(task => task.status === 'Completed').length;
  }, 0);
  const completionPercentage = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">{isAdmin ? "Total Employees" : "My Team"}</h3>
          <p className="text-3xl font-bold">{employees.length}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-3xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Completion Rate</h3>
          <p className="text-3xl font-bold">{completionPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
