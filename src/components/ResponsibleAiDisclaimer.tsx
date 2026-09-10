import { ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  className?: string;
  toolName?: string;
}

export function ResponsibleAiDisclaimer({ className = '', toolName }: Props) {
  return (
    <footer
      id="responsible-ai-disclaimer"
      className={`mt-8 rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-4 backdrop-blur-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
        <div className="flex items-start sm:items-center gap-2.5">
          <div className="mt-0.5 sm:mt-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-semibold text-zinc-300">Responsible AI Disclaimer:</span>{' '}
            AI-generated content {toolName ? `from ${toolName}` : ''} may contain inaccuracies. Always review, edit, and verify critical information, sensitive communications, and data before operational use.
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 text-zinc-500 text-[11px] font-medium border-t sm:border-t-0 border-zinc-800/60 pt-2 sm:pt-0">
          <span className="inline-flex items-center gap-1 text-zinc-400">
            <Sparkles className="h-3 w-3 text-indigo-400" />
            ASA 18 Soweto
          </span>
          <span>•</span>
          <span className="text-zinc-400">Andile Dube</span>
        </div>
      </div>
    </footer>
  );
}
