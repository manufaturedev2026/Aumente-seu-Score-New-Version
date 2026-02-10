
import React from 'react';
import { Home, Compass, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import { View } from '../types';

interface NavigationProps {
  activeTab: View;
  onTabChange: (tab: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard' as View, icon: Home, label: 'Início' },
    { id: 'plan' as View, icon: Compass, label: '30 Passos' },
    { id: 'modules' as View, icon: BookOpen, label: 'Cursos' },
    { id: 'checklist' as View, icon: CheckCircle, label: 'Checklist' },
    { id: 'tools' as View, icon: Briefcase, label: 'Ferramentas' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pb-safe-area-inset-bottom z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <tab.icon size={22} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
