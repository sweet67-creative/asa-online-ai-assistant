import { useState } from 'react';
import { NavigationTab } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { EmailGeneratorTool } from './components/tools/EmailGeneratorTool';
import { MeetingSummarizerTool } from './components/tools/MeetingSummarizerTool';
import { TaskPlannerTool } from './components/tools/TaskPlannerTool';
import { ResearchAssistantTool } from './components/tools/ResearchAssistantTool';
import { ChatbotInterfaceTool } from './components/tools/ChatbotInterfaceTool';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'dashboard':
        return <DashboardView onSelectTab={setCurrentTab} />;
      case 'email-generator':
        return <EmailGeneratorTool />;
      case 'meeting-summarizer':
        return <MeetingSummarizerTool />;
      case 'task-planner':
        return <TaskPlannerTool />;
      case 'research-assistant':
        return <ResearchAssistantTool />;
      case 'chatbot':
        return <ChatbotInterfaceTool />;
      default:
        return <DashboardView onSelectTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-zinc-100 flex">
      {/* Fixed Left Sidebar (Responsive drawer on mobile) */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {/* Sticky Header */}
        <Header
          currentTab={currentTab}
          onOpenSidebar={() => setSidebarOpen(true)}
          onSelectTab={setCurrentTab}
        />

        {/* Scrollable View Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}
