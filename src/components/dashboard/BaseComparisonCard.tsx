import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { baseAnalysis } from "@/data/dashboard";
import { formatBRL, formatNumber } from "@/lib/format";
import { Store, Users, ShoppingBasket, Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

const Row = ({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex items-center justify-between py-2.5">
    <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
      <span className={cn(highlight ? "text-primary" : "text-muted-foreground")}>
        {icon}
      </span>
      {label}
    </div>
    <span
      className={cn(
        "text-sm font-semibold tabular-nums",
        highlight && "text-primary",
      )}
    >
      {value}
    </span>
  </div>
);

const Group = ({
  title,
  subtitle,
  data,
  highlight,
}: {
  title: string;
  subtitle: string;
  data: { customers: number; avgTicket: number; avgRecurrence: number };
  highlight?: boolean;
}) => (
  <div
    className={cn(
      "rounded-xl border p-4",
      highlight
        ? "border-primary/30 bg-gradient-to-br from-accent/60 to-card"
        : "border-border/60 bg-card",
    )}
  >
    <div className="flex items-center gap-2 mb-1">
      <Store
        className={cn(
          "h-4 w-4",
          highlight ? "text-primary" : "text-muted-foreground",
        )}
      />
      <p className="text-sm font-semibold">{title}</p>
    </div>
    <p className="text-xs text-muted-foreground mb-3">{subtitle}</p>
    <div className="divide-y divide-border/60">
      <Row
        icon={<Users className="h-4 w-4" />}
        label="Total de pessoas"
        value={formatNumber(data.customers)}
        highlight={highlight}
      />
      <Row
        icon={<ShoppingBasket className="h-4 w-4" />}
        label="Ticket médio"
        value={formatBRL(data.avgTicket)}
        highlight={highlight}
      />
      <Row
        icon={<Repeat className="h-4 w-4" />}
        label="Recorrência média / mês"
        value={data.avgRecurrence.toFixed(2).replace(".", ",")}
        highlight={highlight}
      />
    </div>
  </div>
);

export const BaseComparisonCard = () => {
  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Análise de Base</CardTitle>
        <CardDescription>
          Comparativo entre toda a base de clientes e a base do Avistão
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Group
          title="Todos os Mercados"
          subtitle="Base total analisada"
          data={baseAnalysis.allMarkets}
        />
        <Group
          title="Avistão Supermercados"
          subtitle="Base capturada pelo Avistão"
          data={baseAnalysis.avistao}
          highlight
        />
      </CardContent>
    </Card>
  );
};
