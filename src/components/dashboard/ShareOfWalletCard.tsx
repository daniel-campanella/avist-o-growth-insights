import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { wallet } from "@/data/dashboard";
import { formatPct, formatBRL } from "@/lib/format";

export const ShareOfWalletCard = () => {
  const data = [
    { name: "Avistão", value: wallet.shareValue },
    { name: "Concorrentes", value: 100 - wallet.shareValue },
  ];

  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Share of Wallet</CardTitle>
        <CardDescription>
          Participação do Avistão no gasto total dos clientes
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        <div className="relative h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={58}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="hsl(var(--primary))" />
                <Cell fill="hsl(var(--muted))" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-primary">
              {formatPct(wallet.shareValue)}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">do gasto total</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center">
          <div className="rounded-lg bg-accent/60 p-2.5">
            <p className="text-xs text-muted-foreground">Avistão</p>
            <p className="text-sm font-semibold text-primary">
              {formatBRL(wallet.avistaoSpend, { compact: true })}
            </p>
          </div>
          <div className="rounded-lg bg-muted/60 p-2.5">
            <p className="text-xs text-muted-foreground">Mercado total</p>
            <p className="text-sm font-semibold">
              {formatBRL(wallet.totalSpend, { compact: true })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
