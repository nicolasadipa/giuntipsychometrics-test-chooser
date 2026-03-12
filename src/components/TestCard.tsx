import { motion } from "framer-motion";
import { ExternalLink, BadgeCheck } from "lucide-react";
import type { TestRecommendation } from "@/data/mockTests";

interface TestCardProps {
  test: TestRecommendation;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function TestCard({ test, index }: TestCardProps) {
  const relevanceColor =
    test.relevance >= 80
      ? "bg-emerald-500"
      : test.relevance >= 50
        ? "bg-amber-500"
        : "bg-slate-400";

  const relevanceLabel =
    test.relevance >= 80
      ? "Alta rilevanza"
      : test.relevance >= 50
        ? "Rilevanza media"
        : "Complementare";

  return (
    <motion.div variants={cardVariants} className="p-5 hover:bg-accent/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono text-muted-foreground/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-bold text-foreground font-satoshi">{test.name}</h3>
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary uppercase tracking-wider">
              {test.category}
            </span>
            {test.purchaseLevel && (
              <span className="inline-flex items-center rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                Liv. {test.purchaseLevel}
              </span>
            )}
          </div>

          {/* Full name */}
          <p className="mt-1 text-sm text-muted-foreground">{test.fullName}</p>

          {/* Description */}
          <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{test.useCase}</p>

          {/* Meta row */}
          <div className="mt-3 flex items-center gap-4 flex-wrap">
            <span className="text-[11px] text-muted-foreground">
              <strong>Età:</strong> {test.ageRange}
            </span>

            {/* Relevance bar */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${relevanceColor} transition-all duration-500`}
                  style={{ width: `${test.relevance}%` }}
                />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground">
                {relevanceLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Link */}
        <a
          href={test.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          title="Vedi su giuntipsy.it"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
