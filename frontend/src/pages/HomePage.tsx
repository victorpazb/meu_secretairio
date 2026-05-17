import { ActionButtons } from '../components/ActionButtons'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { TabSelector } from '../components/TabSelector'
import { TextAreas } from '../components/TextAreas'
import { useTextTool } from '../hooks/useTextTool'

export function HomePage() {
  const {
    tab,
    setTab,
    actions,
    selectedAction,
    setSelectedAction,
    input,
    setInput,
    result,
    isLoading,
    toast,
    handleGenerate,
    handleCopy,
    handlePdfPlaceholder,
  } = useTextTool()

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <Header />

      <main className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
        <TabSelector activeTab={tab} onTabChange={setTab} />
        <ActionButtons options={actions} selectedAction={selectedAction} onSelectAction={setSelectedAction} />

        <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isLoading}
            className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!result.trim()}
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handlePdfPlaceholder}
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-white"
          >
            Download PDF (soon)
          </button>
        </div>

        <TextAreas input={input} result={result} isLoading={isLoading} onInputChange={setInput} />
      </main>

      {toast && (
        <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}

      <Footer />
    </div>
  )
}
