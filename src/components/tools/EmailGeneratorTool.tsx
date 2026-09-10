import { useState } from 'react';
import { Mail, Sparkles, Wand2, RefreshCw, Send, ArrowRight } from 'lucide-react';
import { EmailInputs, generateMockEmail } from '../../data/mockGenerators';
import { ToolOutputPane } from '../ToolOutputPane';
import { ResponsibleAiDisclaimer } from '../ResponsibleAiDisclaimer';

export function EmailGeneratorTool() {
  const [inputs, setInputs] = useState<EmailInputs>({
    recipient: 'Client Executive & Steering Committee',
    senderName: 'Andile Dube',
    subject: 'Project Milestone Status & Q3 Deliverables Sign-off',
    tone: 'professional',
    bulletPoints: `• Successfully resolved integration testing across all endpoints\n• Optimized latency benchmarks by 40% ahead of scheduled timeline\n• QA signoff complete with 0 blocking defects\n• Staging preview deployed for stakeholder review`,
    callToAction: 'Please review the staging environment and reply with sign-off approval by 15:00 CAT tomorrow.',
  });

  const [output, setOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateMockEmail(inputs);
      setOutput(generated);
      setIsGenerating(false);
    }, 1500); // 1.5s as requested
  };

  const handleLoadSample = (type: 'client' | 'urgent' | 'friendly') => {
    if (type === 'client') {
      setInputs({
        recipient: 'Strategic Partner Leads',
        senderName: 'Andile Dube',
        subject: 'Partnership Expansion & ASA 18 Soweto Collaboration',
        tone: 'professional',
        bulletPoints: `• Reviewed quarterly productivity growth metrics (+32% adoption)\n• Prepared draft Memorandum of Understanding (MoU)\n• Scheduled technical alignment briefing for next Tuesday`,
        callToAction: 'Kindly confirm your team’s availability for the briefing session.',
      });
    } else if (type === 'urgent') {
      setInputs({
        recipient: 'DevOps & Reliability Engineering',
        senderName: 'Andile Dube',
        subject: 'URGENT: Cloud Infrastructure Maintenance Window Confirmation',
        tone: 'urgent',
        bulletPoints: `• Database failover drill scheduled for Sunday 02:00 CAT\n• Expected maintenance window: 45 minutes maximum\n• Real-time telemetry monitoring channels will be active`,
        callToAction: 'Acknowledge standby protocol in the incident response channel by 17:00 today.',
      });
    } else {
      setInputs({
        recipient: 'Product & Design Guild',
        senderName: 'Andile Dube',
        subject: 'Exciting Launch Week Kudos & Team Appreciation',
        tone: 'friendly',
        bulletPoints: `• Incredible effort on launching ASA Online on schedule\n• Stellar feedback from initial beta cohort across South Africa\n• Celebratory async coffee break planned for Friday afternoon`,
        callToAction: 'Drop your favorite win from this sprint in the general channel!',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-100">Smart Email Generator</h1>
              <p className="text-xs text-zinc-400">
                Transform rough bullets into polished, executive-ready correspondence in seconds
              </p>
            </div>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Try Preset:</span>
          <button
            type="button"
            onClick={() => handleLoadSample('client')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Client Update
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('urgent')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Urgent Notice
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('friendly')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Team Kudos
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
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <h3 className="font-semibold text-sm text-zinc-100">Email Parameters & Context</h3>
              </div>
              <span className="text-[11px] font-medium text-zinc-400">Input Panel</span>
            </div>

            {/* Recipient & Sender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Recipient Name / Team
                </label>
                <input
                  type="text"
                  value={inputs.recipient}
                  onChange={(e) => setInputs({ ...inputs, recipient: e.target.value })}
                  placeholder="e.g. Executive Board, John Smith"
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Your Name / Signature
                </label>
                <input
                  type="text"
                  value={inputs.senderName}
                  onChange={(e) => setInputs({ ...inputs, senderName: e.target.value })}
                  placeholder="e.g. Andile Dube"
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Subject Line / Purpose
              </label>
              <input
                type="text"
                value={inputs.subject}
                onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
                placeholder="What is this email about?"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Tone Selector */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Communication Tone
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {(['professional', 'concise', 'friendly', 'urgent', 'persuasive'] as const).map(
                  (tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setInputs({ ...inputs, tone })}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium capitalize transition-all border ${
                        inputs.tone === tone
                          ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500/60 shadow-sm'
                          : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      {tone}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Bullet Points */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center justify-between">
                <span>Key Details & Talking Points (one per line)</span>
                <span className="text-[11px] text-zinc-500">Unfiltered bullets welcome</span>
              </label>
              <textarea
                rows={4}
                value={inputs.bulletPoints}
                onChange={(e) => setInputs({ ...inputs, bulletPoints: e.target.value })}
                placeholder="Paste your raw notes or bullets here..."
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Call to Action */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Target Call to Action (Next Step)
              </label>
              <input
                type="text"
                value={inputs.callToAction}
                onChange={(e) => setInputs({ ...inputs, callToAction: e.target.value })}
                placeholder="e.g. Schedule a 15-min sync by Friday"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-5 mt-4 border-t border-zinc-800/80">
            <button
              type="button"
              id="btn-generate-email"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.99] cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating Draft (1.5s)...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate Email with AI
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
          toolName="Smart Email Generator"
          onClear={() => setOutput('')}
        />
      </div>

      {/* Responsible AI Disclaimer */}
      <ResponsibleAiDisclaimer toolName="Smart Email Generator" />
    </div>
  );
}
