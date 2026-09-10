import { useState } from 'react';
import { CalendarCheck, Sparkles, Wand2, RefreshCw, ArrowRight } from 'lucide-react';
import { TaskPlannerInputs, generateMockTaskPlan } from '../../data/mockGenerators';
import { ToolOutputPane } from '../ToolOutputPane';
import { ResponsibleAiDisclaimer } from '../ResponsibleAiDisclaimer';

export function TaskPlannerTool() {
  const [inputs, setInputs] = useState<TaskPlannerInputs>({
    projectTitle: 'ASA Online Workplace AI Rollout',
    timeframe: 'this-week',
    priorityLevel: 'critical',
    teamMembers: 'Andile Dube (Lead), Front-end Specialist, Backend Dev, QA Engineer',
    goalSummary: 'Ship a responsive, dark-mode workplace assistant with 6 tools, side-by-side editing, and Soweto branding within 3 days.',
    knownBlockers: 'Need to ensure side-by-side editing works smoothly on mobile with responsive fallback.',
  });

  const [output, setOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateMockTaskPlan(inputs);
      setOutput(result);
      setIsGenerating(false);
    }, 1500); // 1.5s
  };

  const handleLoadSample = (sample: 'weekly' | 'sprint' | 'day') => {
    if (sample === 'weekly') {
      setInputs({
        projectTitle: 'Client Onboarding & Training Sprint',
        timeframe: 'this-week',
        priorityLevel: 'high',
        teamMembers: 'Andile Dube, Client Success Manager',
        goalSummary: 'Onboard 40 corporate knowledge workers across Soweto enterprise cluster.',
        knownBlockers: 'Awaiting scheduling confirmations from department heads.',
      });
    } else if (sample === 'sprint') {
      setInputs({
        projectTitle: 'ASA 18 Soweto AI Research Hub v2.0',
        timeframe: '2-week-sprint',
        priorityLevel: 'critical',
        teamMembers: 'Andile Dube, Senior AI Researcher, Data Engineer',
        goalSummary: 'Fine-tune domain prompts and deliver deep intelligence synthesis pipeline.',
        knownBlockers: 'Compute quotas for high-throughput batch evaluation.',
      });
    } else {
      setInputs({
        projectTitle: 'Daily High-Leverage Execution Checklist',
        timeframe: 'today',
        priorityLevel: 'critical',
        teamMembers: 'Andile Dube',
        goalSummary: 'Zero out urgent client email threads, review PRs, and finalize sprint demo.',
        knownBlockers: 'Afternoon stakeholder sync at 14:00.',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100">AI Task Planner</h1>
            <p className="text-xs text-zinc-400">
              Break down complex projects into prioritized agile phases, time estimates, and deliverables
            </p>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Try Preset:</span>
          <button
            type="button"
            onClick={() => handleLoadSample('weekly')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Weekly Sprint
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('sprint')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            2-Week Agile
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('day')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Daily Focus
          </button>
        </div>
      </div>

      {/* Side-by-side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Pane */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-xl backdrop-blur-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <h3 className="font-semibold text-sm text-zinc-100">Project Scoping & Parameters</h3>
              </div>
              <span className="text-[11px] font-medium text-zinc-400">Input Panel</span>
            </div>

            {/* Project Title */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Initiative / Project Title
              </label>
              <input
                type="text"
                value={inputs.projectTitle}
                onChange={(e) => setInputs({ ...inputs, projectTitle: e.target.value })}
                placeholder="What project are you structuring?"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Timeframe & Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Execution Timeframe
                </label>
                <select
                  value={inputs.timeframe}
                  onChange={(e) => setInputs({ ...inputs, timeframe: e.target.value as any })}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:border-emerald-500 focus:outline-none"
                >
                  <option value="today">Today (Single Day Focus)</option>
                  <option value="this-week">This Week (5-Day Plan)</option>
                  <option value="2-week-sprint">2-Week Agile Sprint</option>
                  <option value="monthly">Monthly Strategic Plan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Priority Level
                </label>
                <div className="flex items-center gap-2">
                  {(['critical', 'high', 'medium'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setInputs({ ...inputs, priorityLevel: level })}
                      className={`flex-1 py-2 text-xs rounded-lg font-medium capitalize border transition-all ${
                        inputs.priorityLevel === level
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60'
                          : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Team Members & Resource Roles
              </label>
              <input
                type="text"
                value={inputs.teamMembers}
                onChange={(e) => setInputs({ ...inputs, teamMembers: e.target.value })}
                placeholder="e.g. Andile Dube (Lead), Designer, Backend Dev"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Goal Summary */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Core Goal & Desired Outcome
              </label>
              <textarea
                rows={3}
                value={inputs.goalSummary}
                onChange={(e) => setInputs({ ...inputs, goalSummary: e.target.value })}
                placeholder="Describe what success looks like at completion..."
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            {/* Known Blockers */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Known Dependencies / Bottlenecks (Optional)
              </label>
              <input
                type="text"
                value={inputs.knownBlockers}
                onChange={(e) => setInputs({ ...inputs, knownBlockers: e.target.value })}
                placeholder="Any external risks, waiting approvals, or blockers?"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-5 mt-4 border-t border-zinc-800/80">
            <button
              type="button"
              id="btn-generate-tasks"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.99] cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating Plan (1.5s)...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate Agile Task Plan
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Output Pane */}
        <ToolOutputPane
          output={output}
          onChange={setOutput}
          isGenerating={isGenerating}
          toolName="AI Task Planner"
          placeholder="Click 'Generate Agile Task Plan' to produce a phased, actionable execution plan with estimates and checkable items. Directly edit any section here."
          onClear={() => setOutput('')}
        />
      </div>

      {/* Responsible AI Disclaimer */}
      <ResponsibleAiDisclaimer toolName="AI Task Planner" />
    </div>
  );
}
