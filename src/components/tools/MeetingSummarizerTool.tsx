import { useState } from 'react';
import { FileText, Sparkles, Wand2, RefreshCw, ArrowRight } from 'lucide-react';
import { MeetingInputs, generateMockMeetingSummary } from '../../data/mockGenerators';
import { ToolOutputPane } from '../ToolOutputPane';
import { ResponsibleAiDisclaimer } from '../ResponsibleAiDisclaimer';

export function MeetingSummarizerTool() {
  const [inputs, setInputs] = useState<MeetingInputs>({
    title: 'Q3 Product Strategy & Growth Alignment',
    date: '2026-09-10',
    attendees: 'Andile Dube, Sipho Molefe, Zanele Khumalo, Operations Team',
    meetingType: 'weekly-sync',
    rawNotes: `Discussed roadmap for Q3.
Andile presented ASA Online productivity benchmarks: 8.5 hours saved weekly per employee.
Sipho highlighted client feedback: users love the editable output feature.
Zanele brought up deployment timeline: staging preview ready today, production rollout scheduled for end of week.
Decided to lock QA approvals 48h early.
Action items:
Andile to draft deployment checklist by Thursday 17:00.
Sipho to collect beta feedback digest.
Technical lead to stress-test high volume requests.
Next meeting set for next Wednesday 10:00 CAT.`,
  });

  const [output, setOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateMockMeetingSummary(inputs);
      setOutput(result);
      setIsGenerating(false);
    }, 1500); // 1.5s
  };

  const handleLoadSample = (sampleType: 'sprint' | 'client' | 'retro') => {
    if (sampleType === 'sprint') {
      setInputs({
        title: 'Sprint 24 Planning & Backlog Grooming',
        date: '2026-09-10',
        attendees: 'Sprint Lead Andile Dube, Full Stack Devs, UX Lead',
        meetingType: 'project-kickoff',
        rawNotes: `Sprint goal: Ship AI Chatbot & Task Planner integration.
Velocity: 42 story points committed.
Tickets reviewed: JIRA-402 (Dark theme polish), JIRA-405 (1.5s mock latency simulator), JIRA-408 (Export to txt).
Risks: Third party sandbox rate limit. Resolved by caching local state.
Decisions: Merge feature branch by Thursday. Release candidate Friday noon.`,
      });
    } else if (sampleType === 'client') {
      setInputs({
        title: 'Enterprise Client Review - Soweto Tech Hub',
        date: '2026-09-10',
        attendees: 'Andile Dube (ASA Lead), Executive VP of Operations, IT Director',
        meetingType: 'client-review',
        rawNotes: `Client evaluated ASA Online prototype.
Feedback: High satisfaction with side-by-side editing layout and responsive hamburger navigation.
Requested feature: Responsible AI disclaimer on every generated document (agreed & fulfilled).
Budget approved for full pilot across 50 knowledge workers in Soweto & Johannesburg.`,
      });
    } else {
      setInputs({
        title: 'Incident Post-Mortem & Sprint Retrospective',
        date: '2026-09-10',
        attendees: 'Engineering Team & QA Guild',
        meetingType: 'retrospective',
        rawNotes: `What went well: Instant turnaround on mock response features. Clean dark aesthetic (#18181b) praised by design testers.
What could be improved: Better keyboard accessibility on action buttons.
Action items: Audit ARIA labels, add tooltips to quick copy buttons.`,
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100">Meeting Notes Summarizer</h1>
            <p className="text-xs text-zinc-400">
              Convert raw transcripts and shorthand notes into structured executive briefings
            </p>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Try Preset:</span>
          <button
            type="button"
            onClick={() => handleLoadSample('sprint')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Sprint Planning
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('client')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Client Review
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('retro')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Retro Notes
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
                <Sparkles className="h-4 w-4 text-purple-400" />
                <h3 className="font-semibold text-sm text-zinc-100">Meeting Transcript / Raw Notes</h3>
              </div>
              <span className="text-[11px] font-medium text-zinc-400">Input Panel</span>
            </div>

            {/* Title & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Meeting Title / Subject
                </label>
                <input
                  type="text"
                  value={inputs.title}
                  onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                  placeholder="e.g. Weekly Standup"
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Meeting Date
                </label>
                <input
                  type="date"
                  value={inputs.date}
                  onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Attendees */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Attendees / Stakeholders
              </label>
              <input
                type="text"
                value={inputs.attendees}
                onChange={(e) => setInputs({ ...inputs, attendees: e.target.value })}
                placeholder="e.g. Andile Dube, Sipho, Sarah"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Meeting Type */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Meeting Category
              </label>
              <select
                value={inputs.meetingType}
                onChange={(e) => setInputs({ ...inputs, meetingType: e.target.value as any })}
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:border-purple-500 focus:outline-none"
              >
                <option value="weekly-sync">Weekly Sync / Status Call</option>
                <option value="project-kickoff">Project Kickoff / Sprint Planning</option>
                <option value="executive-briefing">Executive Briefing / Board Review</option>
                <option value="client-review">Client Demo / Feedback Review</option>
                <option value="retrospective">Sprint Retrospective</option>
              </select>
            </div>

            {/* Raw Notes Textarea */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center justify-between">
                <span>Raw Meeting Notes, Chat Log, or Transcript</span>
                <span className="text-[11px] text-zinc-500">Messy notes welcome</span>
              </label>
              <textarea
                rows={7}
                value={inputs.rawNotes}
                onChange={(e) => setInputs({ ...inputs, rawNotes: e.target.value })}
                placeholder="Paste verbatim notes, bullet fragments, or transcripts here..."
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none leading-relaxed font-mono"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-5 mt-4 border-t border-zinc-800/80">
            <button
              type="button"
              id="btn-generate-summary"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-purple-600/20 active:scale-[0.99] cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Summarizing Notes (1.5s)...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Synthesize Meeting Summary
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
          toolName="Meeting Notes Summarizer"
          placeholder="Click 'Synthesize Meeting Summary' to generate an executive report with key decisions, action item owners, and deadlines. You can edit the result right here."
          onClear={() => setOutput('')}
        />
      </div>

      {/* Responsible AI Disclaimer */}
      <ResponsibleAiDisclaimer toolName="Meeting Notes Summarizer" />
    </div>
  );
}
