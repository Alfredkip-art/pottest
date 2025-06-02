import React from 'react';
import DashboardLayout from '../../components/ui/DashboardLayout';
import StatCard from '../../components/ui/StatCard';
import { Users, BookOpen, MessageSquare, Award } from 'lucide-react';

export default function ParentDashboard() {
  // Mock data
  const children = [
    { 
      id: 1, 
      name: 'Emma Wilson', 
      grade: '10th Grade', 
      courses: [
        { id: 1, title: 'Advanced Mathematics', progress: 75, grade: 'A-' },
        { id: 2, title: 'Physics Fundamentals', progress: 60, grade: 'B+' },
        { id: 3, title: 'English Literature', progress: 90, grade: 'A' },
      ]
    },
    { 
      id: 2, 
      name: 'James Wilson', 
      grade: '8th Grade', 
      courses: [
        { id: 1, title: 'Mathematics', progress: 80, grade: 'B+' },
        { id: 2, title: 'Science', progress: 85, grade: 'A-' },
        { id: 3, title: 'History', progress: 70, grade: 'B' },
      ]
    }
  ];

  const recentMessages = [
    { id: 1, from: 'Ms. Johnson (Math Teacher)', subject: 'Progress Report', date: '2023-09-15', read: false },
    { id: 2, from: 'Mr. Davis (Science Teacher)', subject: 'Upcoming Science Fair', date: '2023-09-14', read: true },
    { id: 3, from: 'School Admin', subject: 'Parent-Teacher Conference', date: '2023-09-12', read: true },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="My Children" 
          value="2" 
          icon={<Users size={24} className="text-blue-600" />}
        />
        <StatCard 
          title="Enrolled Courses" 
          value="12" 
          icon={<BookOpen size={24} className="text-teal-600" />}
        />
        <StatCard 
          title="Unread Messages" 
          value="3" 
          icon={<MessageSquare size={24} className="text-amber-600" />}
          change="1" 
          positive={false} 
        />
        <StatCard 
          title="Achievements" 
          value="8" 
          icon={<Award size={24} className="text-purple-600" />}
          change="2" 
          positive={true} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">My Children</h3>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-8">
                {children.map((child) => (
                  <div key={child.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{child.name}</h4>
                        <p className="text-sm text-gray-600">{child.grade}</p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Full Profile
                      </button>
                    </div>
                    
                    <h5 className="text-md font-medium text-gray-700 mb-2">Enrolled Courses</h5>
                    <div className="space-y-3">
                      {child.courses.map((course) => (
                        <div key={course.id} className="bg-gray-50 p-3 rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <h6 className="text-sm font-medium text-gray-800">{course.title}</h6>
                            <span className="text-sm font-medium text-gray-700">Grade: {course.grade}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-end mt-1">
                            <span className="text-xs text-gray-500">{course.progress}% complete</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">Recent Messages</h3>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`p-3 rounded-md ${message.read ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-blue-500'}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h6 className={`text-sm font-medium ${message.read ? 'text-gray-800' : 'text-blue-800'}`}>
                      {message.from}
                    </h6>
                    <span className="text-xs text-gray-500">{message.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{message.subject}</p>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Read message
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}