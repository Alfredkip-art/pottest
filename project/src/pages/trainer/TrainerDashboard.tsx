import React from 'react';
import DashboardLayout from '../../components/ui/DashboardLayout';
import StatCard from '../../components/ui/StatCard';
import { Users, BookOpen, FileText, Sparkles } from 'lucide-react';

export default function TrainerDashboard() {
  // Mock data
  const recentContent = [
    { id: 1, title: 'Introduction to Algebra', type: 'syllabus', status: 'approved', date: '2023-09-15' },
    { id: 2, title: 'Chemistry Lab Safety Guide', type: 'reference', status: 'pending', date: '2023-09-14' },
    { id: 3, title: 'English Grammar Essentials', type: 'curriculum', status: 'approved', date: '2023-09-10' },
  ];

  const upcomingTemplates = [
    { id: 1, title: 'Weekly Lesson Plan', type: 'Lesson Plan', date: '2023-09-20' },
    { id: 2, title: 'End of Term Assessment', type: 'Assessment', date: '2023-09-25' },
    { id: 3, title: 'Science Project Guidelines', type: 'Project', date: '2023-09-30' },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="My Students" 
          value="156" 
          icon={<Users size={24} className="text-blue-600" />}
          change="5%" 
          positive={true} 
        />
        <StatCard 
          title="Content Created" 
          value="42" 
          icon={<BookOpen size={24} className="text-teal-600" />}
          change="12%" 
          positive={true} 
        />
        <StatCard 
          title="Templates Used" 
          value="18" 
          icon={<FileText size={24} className="text-amber-600" />}
          change="3" 
          positive={true} 
        />
        <StatCard 
          title="AI Assists" 
          value="24" 
          icon={<Sparkles size={24} className="text-purple-600" />}
          change="8" 
          positive={true} 
        />
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <BookOpen size={20} className="mr-2" />
              Upload New Content
            </button>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center">
              <FileText size={20} className="mr-2" />
              Create Template
            </button>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center">
              <Sparkles size={20} className="mr-2" />
              Use AI Assistant
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">My Recent Content</h3>
          </div>
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentContent.map((content) => (
                    <tr key={content.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{content.title}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{content.type}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          content.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {content.status}
                        </span>
                      </td>
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

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Templates</h3>
          </div>
          <div className="px-6 py-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {upcomingTemplates.map((template) => (
                    <tr key={template.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{template.title}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{template.type}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{template.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}