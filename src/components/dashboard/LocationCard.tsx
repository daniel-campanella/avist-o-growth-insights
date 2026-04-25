import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cityDistribution, otherCities } from "@/data/dashboard";
import { formatPct, formatNumber } from "@/lib/format";
import { MapPin } from "lucide-react";

export const LocationCard = () => {
  const max = Math.max(...cityDistribution.map((c) => c.share));

  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-base">Distribuição por Local</CardTitle>
            <CardDescription>
              Clientes analisados por cidade de moradia
            </CardDescription>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {cityDistribution.map((c) => {
          const w = (c.share / max) * 100;
          return (
            <div key={c.name} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium truncate">{c.name}</span>
                <div className="flex items-center gap-3 text-xs tabular-nums">
                  <span className="text-muted-foreground">
                    {formatNumber(c.count)}
                  </span>
                  <span className="font-semibold text-primary w-12 text-right">
                    {formatPct(c.share)}
                  </span>
                </div>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary/80"
                  style={{ width: `${w}%` }}
                />
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between border-t border-border/60 pt-2.5 text-xs text-muted-foreground">
          <span>Outras cidades</span>
          <div className="flex items-center gap-3 tabular-nums">
            <span>{formatNumber(otherCities.count)}</span>
            <span className="font-semibold w-12 text-right">
              {formatPct(otherCities.share)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
