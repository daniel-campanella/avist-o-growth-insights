import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  hint?: string;
  icon?: ReactNode;
  accent?: "primary" | "neutral";
  trend?: { value: string; positive?: boolean };
}

export const KpiCard = ({
  label,
  value,
  hint,
  icon,
  accent = "neutral",
  trend,
}: KpiCardProps) => {
  return (
    <Card className="shadow-card border-border/60 hover:shadow-elevated transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {label}
            </p>
            <p
              className={cn(
                "text-2xl font-semibold tracking-tight truncate",
                accent === "primary" ? "text-primary" : "text-foreground",
              )}
            >
              {value}
            </p>
            {hint && (
              <p className="text-xs text-muted-foreground">{hint}</p>
            )}
            {trend && (
              <p
                className={cn(
                  "text-xs font-medium",
                  trend.positive ? "text-primary" : "text-destructive",
                )}
              >
                {trend.value}
              </p>
            )}
          </div>
          {icon && (
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg shrink-0",
                accent === "primary"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent text-accent-foreground",
              )}
            >
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
