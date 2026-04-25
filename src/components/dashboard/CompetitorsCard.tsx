import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { topCompetitors } from "@/data/dashboard";
import { formatBRL, formatPct } from "@/lib/format";
import { Trophy } from "lucide-react";

export const CompetitorsCard = () => {
  const max = Math.max(...topCompetitors.map((c) => c.spend));

  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-base">Top 5 Concorrentes</CardTitle>
            <CardDescription>
              Onde os clientes do Avistão mais gastam fora
            </CardDescription>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Trophy className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {topCompetitors.map((c, i) => {
          const w = (c.spend / max) * 100;
          return (
            <div key={c.name} className="space-y-1.5">
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent text-xs font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span className="font-medium truncate">{c.name}</span>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-semibold tabular-nums">
                    {formatBRL(c.spend, { compact: true })}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    Share of Wallet: {formatPct(c.share)}
                  </span>
                </div>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))]"
                  style={{ width: `${w}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
