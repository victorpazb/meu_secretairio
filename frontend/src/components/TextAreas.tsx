type TextAreasProps = {
  input: string
  result: string
  isLoading: boolean
  onInputChange: (value: string) => void
}

export function TextAreas({ input, result, isLoading, onInputChange }: TextAreasProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-300">Input</span>
        <textarea
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="Paste your text here..."
          className="h-64 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-100 outline-none transition focus:border-indigo-400"
        />
      </label>

      <div className="space-y-2">
        <span className="text-sm font-medium text-slate-300">Result</span>
        <div className="h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-100">
          {isLoading ? 'Generating...' : result || 'Generated text appears here.'}
        </div>
      </div>
    </div>
  )
}
