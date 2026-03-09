import React from "react";
import { AppData } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { logoutUser, user } = AppData();
  const navigate = useNavigate();

  // Check if user exists and has data
  const userData = user?.data || user;
  const userName = userData?.name || userData?.email || "User";
  const userRole = userData?.role || user?.role || "User Role";
  const userEmail = userData?.email || "No email available";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome to Employee Portal
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-gray-600">Signed in as</p>
              <p className="font-medium text-gray-800">{userName}</p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              onClick={() => logoutUser(navigate)}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* User Info Card */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Hello, {userName}!
                </h2>
                <p className="text-blue-100">Welcome back to your dashboard</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
                <p className="text-sm text-blue-100 mb-1">Current Role</p>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
                  <p className="text-xl font-bold capitalize">{userRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* User Details Card */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  User Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium text-gray-800">{userName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">{userEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <div className="inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 capitalize">
                      {userRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Last Login</span>
                    <span className="text-gray-800 font-medium">Today</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Access Level</span>
                    <span className="text-gray-800 font-medium capitalize">{userRole}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button
                    className="w-full bg-red-50 hover:bg-red-100 text-red-700 px-4 py-3 rounded-lg text-left transition duration-200 flex items-center gap-3"
                    onClick={() => logoutUser(navigate)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Logout from Portal
                  </button>
                  
                  {user && (user.role === "admin" || userRole === "admin") && (
                    <Link
                      to="/dashboard"
                      className="block bg-purple-50 hover:bg-purple-100 text-purple-700 px-4 py-3 rounded-lg text-left transition duration-200 flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                      </svg>
                      Go to Admin Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Welcome to Your Portal</h3>
              <p className="text-gray-600 mb-4">
                You have successfully logged into the Employee Management System. 
                {userRole === "admin" 
                  ? " As an administrator, you can manage employees, view reports, and configure system settings from the dashboard." 
                  : " You can view your information, check your schedule, and update your profile as needed."}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">System is operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">All services are running</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Employee Portal. All rights reserved.</p>
          <p className="mt-1">Need help? Contact support at support@employeeportal.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;