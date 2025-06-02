import React from 'react';
import DashboardLayout from '../../components/ui/DashboardLayout';
import StatCard from '../../components/ui/StatCard';
import { BookOpen, Clock, Award, FileCheck } from 'lucide-react';

export default function StudentDashboard() {
  // Mock data
  const recentCourses = [
    { id: 1, title: 'Advanced Mathematics', trainer: 'John Smith', progress: 75, lastAccessed: '2023-09-15' },
    { id: 2, title: 'Physics Fundamentals', trainer: 'Emily Johnson', progress: 60, lastAccessed: '2023-09-14' },
    { id: 3, title: 'English Literature', trainer: 'Robert Davis', progress: 90, lastAccessed: '2023-09-12' },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'Algebra Problem Set', course: 'Advanced Mathematics', dueDate: '2023-09-20' },
    { id: 2, title: 'Lab Report: Forces', course: 'Physics Fundamentals', dueDate: '2023-09-22' },
    { id: 3, title: 'Essay: Shakespeare Analysis', course: 'English Literature', dueDate: '2023-09-25' },
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Enrolled Courses" 
          value="8" 
          icon={<BookOpen size={24} className="text-blue-600" />}
        />
        <StatCard 
          title="Hours Spent" 
          value="126" 
          icon={<Clock size={24} className="text-teal-600" />}
          change="12h" 
          positive={true} 
        />
        <StatCard 
          title="Achievements" 
          value="15" 
          icon={<Award size={24} className="text-amber-600" />}
          change="2" 
          positive={true} 
        />
        <StatCard 
          title="Completed Tasks" 
          value="42" 
          icon={<FileCheck size={24} className="text-purple-600" />}
          change="8" 
          positive={true} 
        />
      </div>

      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">My Courses</h3>
          </div>
          <div className="px-6 py-4">
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{course.title}</h4>
                    <span className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Trainer: {course.trainer}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-medium text-gray-700">{course.progress}% complete</span>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Upcoming Assignments</h3>
        </div>
        <div className="px-6 py-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {upcomingAssignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.title}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.course}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.dueDate}</td>
                    <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All Assignments
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}