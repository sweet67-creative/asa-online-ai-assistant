import { useState } from 'react';
import { Search, Sparkles, Wand2, RefreshCw, ArrowRight } from 'lucide-react';
import { ResearchInputs, generateMockResearch } from '../../data/mockGenerators';
import { ToolOutputPane } from '../ToolOutputPane';
import { ResponsibleAiDisclaimer } from '../ResponsibleAiDisclaimer';

export function ResearchAssistantTool() {
  const [inputs, setInputs] = useState<ResearchInputs>({
    topic: 'Impact of AI Automation on Enterprise Workflows & Knowledge Work in South Africa',
    industry: 'Enterprise Technology, Fintech & Professional Services',
    reportDepth: 'comprehensive-analysis',
    keyQuestions: '1. What are the highest ROI workplace AI use cases?\n2. How are regional tech hubs like Soweto adopting automation?\n3. What are key compliance and data sovereignty safeguards?',
  });

  const [output, setOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateMockResearch(inputs);
      setOutput(result);
      setIsGenerating(false);
    }, 1500); // 1.5s
  };

  const handleLoadSample = (sample: 'fintech' | 'soweto' | 'saas') => {
    if (sample === 'fintech') {
      setInputs({
        topic: 'Open Banking & Real-Time Payments Interoperability in Sub-Saharan Africa',
        industry: 'Fintech & Digital Banking',
        reportDepth: 'comprehensive-analysis',
        keyQuestions: 'What are the cross-border settlement challenges and regulatory sandbox frameworks?',
      });
    } else if (sample === 'soweto') {
      setInputs({
        topic: 'Grassroots Tech Innovation & Youth Digital Skills Hubs in Soweto (ASA 18 Initiative)',
        industry: 'Digital Inclusion & Workforce Development',
        reportDepth: 'executive-summary',
        keyQuestions: 'How can localized AI incubators scale practical workplace training for young professionals?',
      });
    } else {
      setInputs({
        topic: 'SaaS Productivity Tool Consolidation vs. Specialized AI Copilots',
        industry: 'Enterprise Software & Cloud Tools',
        reportDepth: 'competitor-landscape',
        keyQuestions: 'Are enterprises favoring all-in-one workspaces or dedicated agentic assistants?',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100">AI Research Assistant</h1>
            <p className="text-xs text-zinc-400">
              Synthesize market intelligence, competitive analysis, and strategic briefs in minutes
            </p>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Try Preset:</span>
          <button
            type="button"
            onClick={() => handleLoadSample('soweto')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Soweto Tech Hub
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('fintech')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Fintech Analysis
          </button>
          <button
            type="button"
            onClick={() => handleLoadSample('saas')}
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            SaaS Landscape
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
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <h3 className="font-semibold text-sm text-zinc-100">Research Parameters & Scope</h3>
              </div>
              <span className="text-[11px] font-medium text-zinc-400">Input Panel</span>
            </div>

            {/* Research Topic */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Research Topic or Hypothesis
              </label>
              <input
                type="text"
                value={inputs.topic}
                onChange={(e) => setInputs({ ...inputs, topic: e.target.value })}
                placeholder="What topic or trend do you want to investigate?"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Target Industry & Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Target Industry / Sector
                </label>
                <input
                  type="text"
                  value={inputs.industry}
                  onChange={(e) => setInputs({ ...inputs, industry: e.target.value })}
                  placeholder="e.g. Enterprise Software"
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Report Structure
                </label>
                <select
                  value={inputs.reportDepth}
                  onChange={(e) => setInputs({ ...inputs, reportDepth: e.target.value as any })}
                  className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-3 py-2 text-sm text-zinc-200 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="executive-summary">Executive Summary Brief</option>
                  <option value="comprehensive-analysis">Comprehensive Analysis</option>
                  <option value="competitor-landscape">Competitive Landscape</option>
                  <option value="swot-matrix">SWOT & Risk Matrix</option>
                </select>
              </div>
            </div>

            {/* Guiding Questions / Angles */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center justify-between">
                <span>Specific Questions or Strategic Angles</span>
                <span className="text-[11px] text-zinc-500">Optional focus areas</span>
              </label>
              <textarea
                rows={4}
                value={inputs.keyQuestions}
                onChange={(e) => setInputs({ ...inputs, keyQuestions: e.target.value })}
                placeholder="What specific questions must this research answer?"
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-5 mt-4 border-t border-zinc-800/80">
            <button
              type="button"
              id="btn-generate-research"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 transition-all shadow-lg shadow-cyan-600/20 active:scale-[0.99] cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Synthesizing Intelligence (1.5s)...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate Research Report
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
          toolName="AI Research Assistant"
          placeholder="Click 'Generate Research Report' to synthesize deep market insights, statistical comparisons, and strategic recommendations. You can edit the output directly here."
          onClear={() => setOutput('')}
        />
      </div>

      {/* Responsible AI Disclaimer */}
      <ResponsibleAiDisclaimer toolName="AI Research Assistant" />
    </div>
  );
}
