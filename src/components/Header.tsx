import { Menu, Sparkles, Shield, MapPin } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  currentTab: NavigationTab;
  onOpenSidebar: () => void;
  onSelectTab: (tab: NavigationTab) => void;
}

export function Header({ currentTab, onOpenSidebar, onSelectTab }: HeaderProps) {
  const getTabTitle = (tab: NavigationTab) => {
    switch (tab) {
      case 'dashboard':
        return 'Executive Productivity Dashboard';
      case 'email-generator':
        return 'Smart Email Generator';
      case 'meeting-summarizer':
        return 'Meeting Notes Summarizer';
      case 'task-planner':
        return 'AI Task Planner';
      case 'research-assistant':
        return 'AI Research Assistant';
      case 'chatbot':
        return 'AI Chatbot Interface';
    }
  };

  return (
    <header
      id="app-header"
      className="sticky top-0 z-20 h-16 border-b border-zinc-800 bg-[#18181b]/90 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        {/* Hamburger Menu button for mobile/tablet */}
        <button
          type="button"
          id="btn-hamburger-menu"
          onClick={onOpenSidebar}
          aria-label="Open navigation menu"
          className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Current Tab Breadcrumbs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectTab('dashboard')}
            className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors hidden sm:inline"
          >
            AI Workplace Assistant
          </button>
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-sm font-bold text-zinc-100 truncate max-w-[200px] sm:max-w-md">
            {getTabTitle(currentTab)}
          </span>
        </div>
      </div>

      {/* Right side: Branding & Live indicators */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
          <div className="flex items-center gap-1.5 font-medium text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>ASA 18 Soweto</span>
          </div>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">Andile Dube</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="hidden md:inline font-mono text-[11px] text-zinc-400">Ready (1.5s latency)</span>
        </div>
      </div>
    </header>
  );
}
