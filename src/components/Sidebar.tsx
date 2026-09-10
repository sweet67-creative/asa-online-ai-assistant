import {
  LayoutDashboard,
  Mail,
  FileText,
  CalendarCheck,
  Search,
  Bot,
  Sparkles,
  X,
  Shield,
  MapPin,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { NavigationTab, NavItem } from '../types';

interface SidebarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ currentTab, onSelectTab, isOpen, onClose }: SidebarProps) {
  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      shortDesc: 'Overview & quick launch',
      iconName: 'LayoutDashboard',
    },
    {
      id: 'email-generator',
      label: 'Smart Email Generator',
      shortDesc: 'Draft executive emails',
      iconName: 'Mail',
      badge: 'Fast',
    },
    {
      id: 'meeting-summarizer',
      label: 'Meeting Notes Summarizer',
      shortDesc: 'Decisions & action items',
      iconName: 'FileText',
    },
    {
      id: 'task-planner',
      label: 'AI Task Planner',
      shortDesc: 'Agile sprints & breakdown',
      iconName: 'CalendarCheck',
    },
    {
      id: 'research-assistant',
      label: 'AI Research Assistant',
      shortDesc: 'Market briefs & analysis',
      iconName: 'Search',
    },
    {
      id: 'chatbot',
      label: 'AI Chatbot Interface',
      shortDesc: 'Natural language copilot',
      iconName: 'Bot',
      badge: 'Live',
    },
  ];

  const renderIcon = (name: string, active: boolean) => {
    const cls = `h-4 w-4 transition-colors ${active ? 'text-indigo-400' : 'text-zinc-400 group-hover:text-zinc-200'}`;
    switch (name) {
      case 'LayoutDashboard':
        return <LayoutDashboard className={cls} />;
      case 'Mail':
        return <Mail className={cls} />;
      case 'FileText':
        return <FileText className={cls} />;
      case 'CalendarCheck':
        return <CalendarCheck className={cls} />;
      case 'Search':
        return <Search className={cls} />;
      case 'Bot':
        return <Bot className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  const handleNavClick = (id: NavigationTab) => {
    onSelectTab(id);
    onClose();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          id="sidebar-backdrop"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar container */}
      <aside
        id="app-sidebar"
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#18181b] border-r border-zinc-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-zinc-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-base shadow-lg shadow-indigo-500/20">
                ASA
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm tracking-wide text-white">ASA ONLINE</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    PRO
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-medium">AI Workplace Assistant</p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              type="button"
              id="btn-close-sidebar"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Workplace Modules
          </div>

          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`group w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-zinc-800/90 text-white font-semibold border border-zinc-700/80 shadow-md shadow-black/20'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      isActive ? 'bg-indigo-600/20 border border-indigo-500/30' : 'bg-zinc-900/80 border border-zinc-800'
                    }`}
                  >
                    {renderIcon(item.iconName, isActive)}
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-medium tracking-tight truncate">{item.label}</div>
                    <div className="text-[10px] text-zinc-500 truncate">{item.shortDesc}</div>
                  </div>
                </div>

                {item.badge ? (
                  <span
                    className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-indigo-500/30 text-indigo-200'
                        : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : isActive ? (
                  <ChevronRight className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Bottom Branding Section: Andile Dube ASA 18 Soweto */}
        <div className="p-3.5 border-t border-zinc-800/80 space-y-3">
          {/* Status badge */}
          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-zinc-300 font-medium">AI Engine Online</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">1.5s Mock SLA</span>
          </div>

          {/* Requested Andile Dube ASA 18 Soweto Branding Card */}
          <div
            id="andile-dube-branding-card"
            className="rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-3.5 shadow-md text-left"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-200">
                <Shield className="h-3.5 w-3.5 text-indigo-400" />
                <span>Andile Dube</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                ASA 18
              </span>
            </div>

            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-zinc-400">
              <MapPin className="h-3 w-3 text-rose-400 shrink-0" />
              <span className="truncate">Soweto, South Africa</span>
            </div>

            <p className="mt-2 text-[10px] leading-relaxed text-zinc-500">
              AI Workplace Productivity Platform. Engineered for executive speed and precision.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
