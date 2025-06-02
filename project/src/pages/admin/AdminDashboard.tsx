import React from 'react';
import DashboardLayout from '../../components/ui/DashboardLayout';
import StatCard from '../../components/ui/StatCard';
import { Users, BookOpen, UserCheck, Award } from 'lucide-react';

export default function AdminDashboard() {
  // Mock data
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student', date: '2023-09-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'trainer', date: '2023-09-14' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'student', date: '2023-09-12' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'parent', date: '2023-09-10' },
  ];

  const recentContent = [
    { id: 1, title: 'Advanced Mathematics Curriculum', type: 'curriculum', author: 'Jane Smith', date: '2023-09-13' },
    { id: 2, title: 'Basic Science Laboratory Guide', type: 'reference', author: 'Michael Brown', date: '2023-09-11' },
    { id: 3, title: 'English Literature Syllabus', type: 'syllabus', author: 'Sarah Wilson', date: '2023-09-09' },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Users" 
          value="1,248" 
          icon={<Users size={24} className="text-blue-600" />}
          change="12%" 
          positive={true} 
        />
        <StatCard 
          title="Active Trainers" 
          value="86" 
          icon={<UserCheck size={24} className="text-teal-600" />}
          change="8%" 
          positive={true} 
        />
        <StatCard 
          title="Course Content" 
          value="324" 
          icon={<BookOpen size={24} className="text-amber-600" />}
          change="15%" 
          positive={true} 
        />
        <StatCard 
          title="Certifications" 
          value="578" 
          icon={<Award size={24} className="text-purple-600" />}
          change="7%" 
          positive={true} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Recently Added Users</h3>
          </div>
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{user.role}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Users
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Recent Content Uploads</h3>
          </div>
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentContent.map((content) => (
                    <tr key={content.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{content.title}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{content.type}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{content.author}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{content.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}