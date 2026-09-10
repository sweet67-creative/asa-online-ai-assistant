import {
  Mail,
  FileText,
  CalendarCheck,
  Search,
  Bot,
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
  Target,
  Layers,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { NavigationTab, ToolCardData } from '../types';
import { ResponsibleAiDisclaimer } from './ResponsibleAiDisclaimer';

interface DashboardViewProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export function DashboardView({ onSelectTab }: DashboardViewProps) {
  const toolCards: ToolCardData[] = [
    {
      id: 'email-generator',
      title: 'Smart Email Generator',
      description: 'Transform rough notes and bullet points into polished, executive-ready emails in customized tones.',
      category: 'Communication',
      iconName: 'Mail',
      accentColor: 'indigo',
      estimatedTime: '1.5s generation',
      sampleInput: 'Client status updates, milestone sign-offs, urgent alerts',
    },
    {
      id: 'meeting-summarizer',
      title: 'Meeting Notes Summarizer',
      description: 'Convert unstructured meeting transcripts and shorthand into clear decisions and assigned action items.',
      category: 'Documentation',
      iconName: 'FileText',
      accentColor: 'purple',
      estimatedTime: '1.5s generation',
      sampleInput: 'Sprint retros, weekly standups, board briefings',
    },
    {
      id: 'task-planner',
      title: 'AI Task Planner',
      description: 'Deconstruct high-level initiatives into phased agile sprints, hourly time estimates, and risk flags.',
      category: 'Execution',
      iconName: 'CalendarCheck',
      accentColor: 'emerald',
      estimatedTime: '1.5s generation',
      sampleInput: 'Sprint rollouts, project launches, daily focus lists',
    },
    {
      id: 'research-assistant',
      title: 'AI Research Assistant',
      description: 'Synthesize complex market trends, competitive benchmarks, and structured strategic briefs on demand.',
      category: 'Intelligence',
      iconName: 'Search',
      accentColor: 'cyan',
      estimatedTime: '1.5s generation',
      sampleInput: 'African tech ecosystems, SaaS trends, SWOT analyses',
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot Interface',
      description: 'Engage with an adaptive workplace copilot specializing in executive advisory, operations, and communications.',
      category: 'Copilot',
      iconName: 'Bot',
      accentColor: 'blue',
      estimatedTime: '1.5s generation',
      sampleInput: 'Instant advisory, problem solving, talking point drafting',
    },
    {
      id: 'email-generator', // 6th card linking to quick-start hub / ASA Soweto productivity workflow
      title: 'ASA Quick Prompt Hub',
      description: 'Curated executive templates, POPIA-compliant guidelines, and operational frameworks by Andile Dube.',
      category: 'Frameworks',
      iconName: 'Sparkles',
      accentColor: 'amber',
      estimatedTime: 'Instant Access',
      sampleInput: 'Soweto innovation hub standards, high-leverage workflows',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero / Gradient Header Section */}
      <section
        id="hero-gradient-header"
        className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            <Award className="h-3.5 w-3.5 text-indigo-400" />
            <span>Andile Dube · ASA 18 Soweto Innovation Suite</span>
          </div>

          {/* Requested Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Your AI workplace assistant{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              — Automate emails, summarize meetings, plan your week, and research smarter
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Empowering professionals with intelligent side-by-side editing, instant 1.5s synthesis, and responsible AI governance designed for peak operational focus.
          </p>

          {/* 2 Requested Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              id="hero-btn-email"
              onClick={() => onSelectTab('email-generator')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>Launch Email Drafter</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-80" />
            </button>

            <button
              type="button"
              id="hero-btn-chatbot"
              onClick={() => onSelectTab('chatbot')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-800/90 hover:bg-zinc-700/90 hover:text-white border border-zinc-700/80 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Bot className="h-4 w-4 text-blue-400" />
              <span>Open AI Chatbot</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Stats Cards */}
      <section id="stats-section" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stat Card 1 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Clock className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              +28% Efficiency
            </span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">8.5h saved</div>
            <div className="text-xs font-medium text-zinc-300 mt-1">Weekly time saved per employee</div>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              Automated first-draft generation and fast meeting synthesis eliminate administrative drag.
            </p>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Zap className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              1.5s Mock Latency
            </span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">12x faster</div>
            <div className="text-xs font-medium text-zinc-300 mt-1">Workflow turnaround speed</div>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              From raw notes to finalized corporate correspondence in a fraction of traditional drafting time.
            </p>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Target className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Zero Distraction
            </span>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">100% focused</div>
            <div className="text-xs font-medium text-zinc-300 mt-1">High-impact deep work</div>
            <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
              Agile task structuring and side-by-side editing keep you anchored in uninterrupted execution.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Tool Cards Grid */}
      <section id="tool-grid-section" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-zinc-100">Workplace Productivity Suite</h2>
            <p className="text-xs text-zinc-400">Select any module to open its dedicated side-by-side workspace</p>
          </div>
          <span className="text-xs text-zinc-500 font-medium">6 Specialized Modules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolCards.map((tool, idx) => {
            const getIcon = () => {
              switch (tool.iconName) {
                case 'Mail':
                  return <Mail className="h-5 w-5 text-indigo-400" />;
                case 'FileText':
                  return <FileText className="h-5 w-5 text-purple-400" />;
                case 'CalendarCheck':
                  return <CalendarCheck className="h-5 w-5 text-emerald-400" />;
                case 'Search':
                  return <Search className="h-5 w-5 text-cyan-400" />;
                case 'Bot':
                  return <Bot className="h-5 w-5 text-blue-400" />;
                default:
                  return <Sparkles className="h-5 w-5 text-amber-400" />;
              }
            };

            const getBorderClass = () => {
              switch (tool.accentColor) {
                case 'indigo':
                  return 'hover:border-indigo-500/50 hover:bg-indigo-950/10';
                case 'purple':
                  return 'hover:border-purple-500/50 hover:bg-purple-950/10';
                case 'emerald':
                  return 'hover:border-emerald-500/50 hover:bg-emerald-950/10';
                case 'cyan':
                  return 'hover:border-cyan-500/50 hover:bg-cyan-950/10';
                case 'blue':
                  return 'hover:border-blue-500/50 hover:bg-blue-950/10';
                default:
                  return 'hover:border-amber-500/50 hover:bg-amber-950/10';
              }
            };

            return (
              <div
                key={`${tool.id}-${idx}`}
                id={`card-tool-${tool.id}-${idx}`}
                onClick={() => onSelectTab(tool.id)}
                className={`group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm transition-all duration-200 cursor-pointer ${getBorderClass()}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/90 border border-zinc-700/60 group-hover:scale-105 transition-transform">
                      {getIcon()}
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/40">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-zinc-100 group-hover:text-white transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {tool.estimatedTime}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                    Launch
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Soweto Innovation Spotlight Card */}
      <section
        id="branding-spotlight"
        className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm text-zinc-100">Andile Dube · ASA 18 Soweto</h4>
              <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Official Release
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Built with precision engineering in Soweto, South Africa for modern digital enterprises worldwide.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectTab('email-generator')}
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
        >
          Explore Workflows
        </button>
      </section>

      {/* Responsible AI Disclaimer on Dashboard */}
      <ResponsibleAiDisclaimer toolName="ASA Online" />
    </div>
  );
}
