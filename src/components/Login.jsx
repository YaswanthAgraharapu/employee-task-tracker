import React, { useState } from 'react';

const Login = ({ onLogin, users }) => {
  const [loginType, setLoginType] = useState('User'); // 'User' or 'Admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);

    if (user && user.role === loginType) {
      onLogin(user);
    } else if (user && user.role !== loginType) {
      setError(`Please use the '${user.role}' sign-in tab.`);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-2xl shadow-lg">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white">ProU Task Tracker</h1>
          <p className="text-gray-400 mt-2">Sign in to access your dashboard</p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-gray-700">
          <button
            onClick={() => { setLoginType('User'); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium transition-colors duration-300 ${
              loginType === 'User'
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            User Sign-In
          </button>
          <button
            onClick={() => { setLoginType('Admin'); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium transition-colors duration-300 ${
              loginType === 'Admin'
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Admin Sign-In
          </button>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <input
              placeholder={loginType === 'User' ? "Company Email" : "Admin Email"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-sm text-center text-red-400 animate-pulse">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors duration-300"
            >
              Sign In as {loginType}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;