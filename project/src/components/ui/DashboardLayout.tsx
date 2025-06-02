import React, { ReactNode, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Book, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  MessageSquare,
  PieChart,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRoleIcon } from './UserRoleIcon';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  active: boolean;
}

function NavItem({ to, icon, label, active }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 rounded-md transition-colors ${
        active
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = () => {
    switch (user?.role) {
      case 'admin':
        return [
          { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
          { to: '/admin/users', icon: <Users size={20} />, label: 'Manage Users' },
          { to: '/admin/content', icon: <Book size={20} />, label: 'Content' },
          { to: '/admin/analytics', icon: <PieChart size={20} />, label: 'Analytics' },
          { to: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
        ];
      case 'trainer':
        return [
          { to: '/trainer', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
          { to: '/trainer/content', icon: <Book size={20} />, label: 'My Content' },
          { to: '/trainer/templates', icon: <FileText size={20} />, label: 'Templates' },
          { to: '/trainer/students', icon: <Users size={20} />, label: 'My Students' },
          { to: '/trainer/ai-assistant', icon: <Sparkles size={20} />, label: 'AI Assistant' },
        ];
      case 'student':
        return [
          { to: '/student', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
          { to: '/student/courses', icon: <Book size={20} />, label: 'My Courses' },
          { to: '/student/progress', icon: <PieChart size={20} />, label: 'My Progress' },
          { to: '/student/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
        ];
      case 'parent':
        return [
          { to: '/parent', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
          { to: '/parent/children', icon: <Users size={20} />, label: 'My Children' },
          { to: '/parent/progress', icon: <PieChart size={20} />, label: 'Progress' },
          { to: '/parent/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 z-20 m-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-white shadow-md text-gray-700"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 z-10 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-md">
                <UserRoleIcon role={user?.role || 'student'} className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-600">Tichlux</span>
            </div>
          </div>

          <div className="flex items-center p-4 border-b border-gray-200">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-medium">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems().map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                active={location.pathname === item.to}
              />
            ))}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
            >
              <LogOut size={20} className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.role === 'admin' && 'Admin Dashboard'}
              {user?.role === 'trainer' && 'Trainer Dashboard'}
              {user?.role === 'student' && 'Student Dashboard'}
              {user?.role === 'parent' && 'Parent Dashboard'}
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay to close mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-0 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}