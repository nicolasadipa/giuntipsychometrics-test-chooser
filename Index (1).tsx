import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import TestCard from "@/components/TestCard";
import LoadingIndicator from "@/components/LoadingIndicator";
import { getRecommendations, generateReasoning, type TestRecommendation } from "@/data/mockTests";
import { Send } from "lucide-react";
import giuntiLogo from "@/assets/giunti-logo.png";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const exampleQueries = [
  "Paziente adulto con sintomi di ansia generalizzata e difficoltà di concentrazione",
  "Screening per ADHD in bambino di 8 anni con problemi comportamentali a scuola",
  "Valutazione della personalità per perizia forense in contesto di custodia",
  "Sospetto disturbo dello spettro autistico in bambina di 4 anni",
  "Adolescente con disturbo del comportamento alimentare",
  "Anziano con sospetto decadimento cognitivo e perdita di memoria",
];

export default function Index() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<TestRecommendation[] | null>(null);
  const [reasoning, setReasoning] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSubmit = useCallback(
    async (inputQuery?: string) => {
      const q = inputQuery ?? query;
      if (!q.trim()) return;

      setIsLoading(true);
      setResults(null);
      setReasoning("");
      setSubmittedQuery(q);

      await new Promise((r) => setTimeout(r, 1800));

      const recs = getRecommendations(q);
      const reason = generateReasoning(q, recs);

      setResults(recs);
      setReasoning(reason);
      setIsLoading(false);
    },
    [query],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const hasResults = results !== null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={giuntiLogo} alt="Giunti Psychometrics" className="h-8 object-contain" />
            <div className="h-5 w-px bg-border" />
            <span className="text-sm font-bold tracking-tight text-foreground font-satoshi">
              Test Chooser
            </span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-accent px-2 py-1 rounded-md">
            AI-Powered
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4">
        {/* Hero */}
        <AnimatePresence mode="wait">
          {!hasResults && !isLoading && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={spring}
              className="flex flex-col items-center justify-center min-h-[55vh] text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-satoshi text-balance leading-[1.1]">
                Descrivi il tuo
                <br />
                <span className="text-primary">quesito diagnostico.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                L'AI analizzerà i sintomi, la storia clinica e gli obiettivi diagnostici per
                consigliarti i test Giunti Psychometrics più rilevanti.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input area */}
        <div className={`${hasResults || isLoading ? "pt-8" : ""}`}>
          {submittedQuery && (hasResults || isLoading) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 rounded-xl bg-card p-4 border border-border/50"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                La tua richiesta
              </span>
              <p className="mt-1 text-sm text-foreground leading-relaxed">{submittedQuery}</p>
            </motion.div>
          )}

          {!isLoading && (
            <motion.div layout transition={spring}>
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={3}
                  className="w-full min-h-[120px] rounded-2xl bg-card border border-border/50 p-5 pr-14 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background resize-none font-satoshi leading-relaxed"
                  placeholder="Es.: Paziente adulto, 35 anni, presenta sintomi di inattenzione, iperattività e impulsività. Sospetto ADHD nell'adulto. Cerco una batteria di valutazione completa."
                />
                <button
                  onClick={() => handleSubmit()}
                  disabled={!query.trim()}
                  className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-all hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Example queries */}
              {!hasResults && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {exampleQueries.map((eq) => (
                    <button
                      key={eq}
                      onClick={() => {
                        setQuery(eq);
                        handleSubmit(eq);
                      }}
                      className="rounded-full bg-card border border-border/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground font-satoshi"
                    >
                      {eq.length > 60 ? eq.slice(0, 57) + "…" : eq}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {/* Loading */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={spring}
            >
              <LoadingIndicator />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {results && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={spring}
              className="mt-8 mb-24 rounded-2xl bg-card border border-border/50"
            >
              {/* Reasoning header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-medium">
                    Raccomandazioni AI
                  </span>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed prose prose-sm max-w-none">
                  <ReactMarkdown>{reasoning}</ReactMarkdown>
                </div>
              </div>

              {/* Test list */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.07 } },
                  hidden: {},
                }}
                className="divide-y divide-border/50"
              >
                {results.map((test, i) => (
                  <TestCard key={test.id} test={test} index={i} />
                ))}
              </motion.div>

              {/* Disclaimer */}
              <div className="px-6 py-4 border-t border-border/50">
                <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
                  Le raccomandazioni sono generate dall'AI sulla base del quesito clinico inserito e
                  del catalogo Giunti Psychometrics. Non sostituiscono il giudizio clinico
                  professionale. Verificare sempre l'adeguatezza dei test nel contesto specifico del
                  paziente.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {results && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Nessun test trovato per questa ricerca. Prova a descrivere i sintomi in modo più
              dettagliato.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
