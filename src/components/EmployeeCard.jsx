import React from 'react';

const EmployeeCard = ({ employee, filter, onUpdateStatus, onApproveTask, isUserDashboard }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      case 'Pending Approval':
        return 'bg-purple-500';
      case 'Pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const userStatuses = ["Pending", "In Progress"];
  const filteredTasks = filter === 'All' ? employee.tasks : employee.tasks.filter(task => task.status === filter);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{employee.name}</h3>
      <p className="text-gray-400">{employee.title}</p>
      <ul className="mt-4 space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex flex-wrap justify-between items-center bg-gray-700 p-3 rounded-lg gap-2">
            <span className="flex-1 pr-4">{task.title}</span>
            <div className="flex items-center gap-2">
              {isUserDashboard ? (
                <>
                  {(task.status === 'Pending' || task.status === 'In Progress') && (
                    <select
                      value={task.status}
                      onChange={(e) => onUpdateStatus(task.id, e.target.value)}
                      className={`text-xs font-semibold rounded-full px-2 py-1 border-none outline-none appearance-none ${getStatusClass(task.status)}`}
                    >
                      {userStatuses.map(status => (
                        <option key={status} value={status} className="bg-gray-800 text-white">{status}</option>
                      ))}
                    </select>
                  )}
                  {task.status === 'In Progress' && (
                    <button onClick={() => onUpdateStatus(task.id, 'Pending Approval')} className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-2 rounded-full transition">
                      Request Approval
                    </button>
                  )}
                  {(task.status === 'Pending Approval' || task.status === 'Completed') && (
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(task.status)}`}>{task.status}</span>
                  )}
                </>
              ) : (
                <>
                  {task.status === 'Pending Approval' ? (
                    <button onClick={() => onApproveTask(task.id)} className="text-xs bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded-full transition">Approve</button>
                  ) : (
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(task.status)}`}>{task.status}</span>
                  )}
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeCard;
