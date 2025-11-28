import React, { useState, useEffect } from 'react';
import { mockData } from "./data/mockData";
import Dashboard from "./components/Dashboard";
import EmployeeCard from "./components/EmployeeCard";
import AddTaskForm from "./components/AddTaskForm";
import FilterControls from "./components/FilterControls";
import Login from './components/Login';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [employees, setEmployees] = useState(() => {
    const savedData = localStorage.getItem('employeeData');
    return savedData ? JSON.parse(savedData) : mockData.employees;
  });
  const [filter, setFilter] = useState("All");

  // Persist employees data to local storage
  useEffect(() => {
    localStorage.setItem('employeeData', JSON.stringify(employees));
  }, [employees]);

  // Check for logged-in user in local storage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const handleAddTask = (employeeId, newTask) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === employeeId ? { ...employee, tasks: [...employee.tasks, newTask] } : employee
      )
    );
  };

  const handleUpdateTaskStatus = (employeeId, taskId, newStatus) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee => {
        if (employee.id === employeeId) {
          const updatedTasks = employee.tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
          );
          return { ...employee, tasks: updatedTasks };
        }
        return employee;
      })
    );
  };

  const handleApproveTask = (employeeId, taskId) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee => {
        if (employee.id === employeeId) {
          const updatedTasks = employee.tasks.map(task =>
            task.id === taskId ? { ...task, status: "Completed" } : task
          );
          return { ...employee, tasks: updatedTasks };
        }
        return employee;
      })
    );
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} users={employees} />;
  }

  const regularUsers = employees.filter(e => e.role === 'User');
  const loggedInUserEmployee = employees.find(e => e.id === currentUser.id);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <nav className="container mx-auto flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Hi, <span className="text-indigo-400">{currentUser.name}</span>!
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>

      <div className="container mx-auto">
        {currentUser.role === 'Admin' ? (
          // Admin Dashboard
          <>
            <h2 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h2>
            <Dashboard employees={regularUsers} isAdmin={true} />
            <AddTaskForm employees={regularUsers} onAddTask={handleAddTask} />
            <FilterControls setFilter={setFilter} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {regularUsers.map(employee => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  filter={filter}
                  onApproveTask={(taskId) => handleApproveTask(employee.id, taskId)}
                  isUserDashboard={false} // Admin view is read-only
                />
              ))}
            </div>
          </>
        ) : (
          // User Dashboard
          <>
            <h2 className="text-4xl font-bold text-center mb-8">My Dashboard</h2>
            <Dashboard employees={[loggedInUserEmployee]} />
            <FilterControls setFilter={setFilter} />
            <div className="mt-8">
              <EmployeeCard
                employee={loggedInUserEmployee}
                onUpdateStatus={(taskId, newStatus) => handleUpdateTaskStatus(loggedInUserEmployee.id, taskId, newStatus)}
                isUserDashboard={true} // User view is interactive
                filter={filter}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
