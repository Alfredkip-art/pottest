import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  positive?: boolean;
}

export default function StatCard({ title, value, icon, change, positive }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
      <div className="mr-4 bg-blue-100 p-3 rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="flex items-center mt-1">
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
          {change && (
            <span className={`ml-2 text-sm font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
              {positive ? '+' : ''}{change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}