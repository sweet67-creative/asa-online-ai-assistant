import { useState } from 'react';
import { Bot, Sparkles, Wand2, RefreshCw, Send, ArrowRight, MessageSquareCode, User } from 'lucide-react';
import { generateMockChatResponse } from '../../data/mockGenerators';
import { ToolOutputPane } from '../ToolOutputPane';
import { ResponsibleAiDisclaimer } from '../ResponsibleAiDisclaimer';

export function ChatbotInterfaceTool() {
  const [prompt, setPrompt] = useState<string>(
    'How can our team restructure our weekly sprint rituals to eliminate redundant meetings and boost focused execution time?'
  );
  const [persona, setPersona] = useState<'executive' | 'technical' | 'operations' | 'communications'>(
    'executive'
  );
  const [output, setOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const response = generateMockChatResponse(prompt, persona);
      setOutput(response);
      setIsGenerating(false);
    }, 1500); // 1.5s
  };

  const handleQuickPrompt = (text: string, selectedPersona?: 'executive' | 'technical' | 'operations' | 'communications') => {
    setPrompt(text);
    if (selectedPersona) setPersona(selectedPersona);
  };

  return (
    <div className="space-y-6">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-100">AI Chatbot Interface</h1>
            <p className="text-xs text-zinc-400">
              Interactive workplace intelligence copilot for quick drafting, advice, and problem solving
            </p>
          </div>
        </div>

        {/* Quick prompt chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-500 font-medium">Quick Prompts:</span>
          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                'Provide a 3-step strategy to transition our department from reactive firefighting to proactive sprint cycles.',
                'operations'
              )
            }
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Sprint Strategy
          </button>
          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                'Draft a concise negotiation talking points memo for enterprise cloud contract renewals in South Africa.',
                'executive'
              )
            }
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            Negotiation Memo
          </button>
          <button
            type="button"
            onClick={() =>
              handleQuickPrompt(
                'Explain best practices for securing employee AI usage under POPIA compliance standards.',
                'technical'
              )
            }
            className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors"
          >
            POPIA Compliance
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
                <Sparkles className="h-4 w-4 text-blue-400" />
                <h3 className="font-semibold text-sm text-zinc-100">AI Persona & User Inquiry</h3>
              </div>
              <span className="text-[11px] font-medium text-zinc-400">Input Panel</span>
            </div>

            {/* Persona Selector */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                AI Copilot Role / Persona
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'executive', label: 'Executive Advisor' },
                  { id: 'operations', label: 'Operations Lead' },
                  { id: 'technical', label: 'Technical Architect' },
                  { id: 'communications', label: 'Communications Pro' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPersona(item.id as any)}
                    className={`p-2 rounded-xl text-left border transition-all ${
                      persona === item.id
                        ? 'bg-blue-600/20 text-blue-300 border-blue-500/60'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* User Prompt / Input */}
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center justify-between">
                <span>Your Prompt / Question / Request</span>
                <span className="text-[11px] text-zinc-500">Natural language assistant</span>
              </label>
              <textarea
                rows={7}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask anything or request drafting, strategy advice, formatting, code, or ideas..."
                className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none leading-relaxed font-sans"
              />
            </div>

            {/* Suggested Topic Tags */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                Topic Suggestions:
              </label>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span
                  onClick={() => setPrompt('Create a 1-page executive update on our weekly deliverables for senior stakeholders.')}
                  className="px-2 py-1 rounded-md bg-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  Executive Update
                </span>
                <span
                  onClick={() => setPrompt('Summarize key productivity techniques for distributed remote teams across African time zones.')}
                  className="px-2 py-1 rounded-md bg-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  Remote Best Practices
                </span>
                <span
                  onClick={() => setPrompt('Draft talking points for Andile Dube regarding ASA 18 Soweto youth technology empowerment.')}
                  className="px-2 py-1 rounded-md bg-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  ASA 18 Soweto Talking Points
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-5 mt-4 border-t border-zinc-800/80">
            <button
              type="button"
              id="btn-generate-chat"
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99] cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Generating Response (1.5s)...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  Generate AI Response
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
          toolName="AI Chatbot Interface"
          placeholder="Click 'Generate AI Response' to receive an intelligent, structured response tailored to your prompt and selected persona. You can directly edit the response text here."
          onClear={() => setOutput('')}
        />
      </div>

      {/* Responsible AI Disclaimer */}
      <ResponsibleAiDisclaimer toolName="AI Chatbot Interface" />
    </div>
  );
}
