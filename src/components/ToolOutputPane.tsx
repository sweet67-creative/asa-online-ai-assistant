import { useState } from 'react';
import { Copy, Check, Download, Trash2, Edit3, Loader2, Sparkles } from 'lucide-react';

interface ToolOutputPaneProps {
  output: string;
  onChange: (newVal: string) => void;
  isGenerating: boolean;
  toolName: string;
  placeholder?: string;
  onClear?: () => void;
}

export function ToolOutputPane({
  output,
  onChange,
  isGenerating,
  toolName,
  placeholder = 'Generated AI output will appear here in an editable format once you click "Generate with AI". You can modify, copy, or export the text at any time.',
  onClear,
}: ToolOutputPaneProps) {
  const [copied, setCopied] = useState(false);

  const wordCount = output.trim() ? output.trim().split(/\s+/).length : 0;
  const charCount = output.length;

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${toolName.toLowerCase().replace(/\s+/g, '-')}-output.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id={`output-pane-${toolName.toLowerCase().replace(/\s+/g, '-')}`}
      className="flex flex-col h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-xl backdrop-blur-md relative"
    >
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Edit3 className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm text-zinc-100">Editable Output</h3>
              {isGenerating ? (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Generating (1.5s)...
                </span>
              ) : output ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Check className="h-3 w-3" />
                  Ready to edit
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800 text-zinc-400">
                  Waiting for generation
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-400">Directly modify output or copy into your workflow</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            id="btn-copy-output"
            onClick={handleCopy}
            disabled={!output || isGenerating}
            title="Copy to clipboard"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:hover:bg-zinc-800 text-zinc-200 transition-colors border border-zinc-700/60"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            id="btn-download-output"
            onClick={handleDownload}
            disabled={!output || isGenerating}
            title="Download text file"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:hover:bg-zinc-800 text-zinc-200 transition-colors border border-zinc-700/60"
          >
            <Download className="h-3.5 w-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Export</span>
          </button>

          {onClear && (
            <button
              type="button"
              id="btn-clear-output"
              onClick={onClear}
              disabled={!output || isGenerating}
              title="Clear output"
              className="p-1.5 rounded-lg text-xs text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Editable Output Textarea */}
      <div className="relative flex-1 mt-4 flex flex-col min-h-[420px]">
        {isGenerating && (
          <div className="absolute inset-0 z-10 bg-zinc-950/80 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-3 p-6 text-center border border-indigo-500/30">
            <div className="relative">
              <div className="h-12 w-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
              <Sparkles className="h-5 w-5 text-indigo-400 absolute inset-0 m-auto" />
            </div>
            <div>
              <p className="font-semibold text-sm text-zinc-100">ASA AI Engine Synthesizing...</p>
              <p className="text-xs text-zinc-400 mt-0.5">Structuring executive output in 1.5s</p>
            </div>
            <div className="w-48 bg-zinc-800 rounded-full h-1.5 overflow-hidden mt-1">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full animate-[pulse_1s_infinite] w-3/4 rounded-full" />
            </div>
          </div>
        )}

        <textarea
          id={`editable-output-textarea-${toolName.toLowerCase().replace(/\s+/g, '-')}`}
          value={output}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 w-full rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-4 text-sm font-mono text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/50 outline-none resize-none transition-all leading-relaxed"
          style={{ minHeight: '400px' }}
        />
      </div>

      {/* Footer metrics & guidance */}
      <div className="flex items-center justify-between pt-3 text-[11px] text-zinc-500 border-t border-zinc-800/60 mt-2">
        <div className="flex items-center gap-3">
          <span>{wordCount} words</span>
          <span>•</span>
          <span>{charCount} characters</span>
        </div>
        <div className="text-right text-zinc-500 italic">
          Fully editable • Changes persist in current session
        </div>
      </div>
    </div>
  );
}
