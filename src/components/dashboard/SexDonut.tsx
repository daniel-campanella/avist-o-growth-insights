import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LabelList } from "recharts";
import { sexDistribution } from "@/data/dashboard";
import { formatNumber, formatPct } from "@/lib/format";

const COLORS = [
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-2))",
  "hsl(var(--muted-foreground) / 0.5)",
];

export const SexDonut = () => {
  const total = sexDistribution.reduce((s, d) => s + d.value, 0);
  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Distribuição por Sexo</CardTitle>
        <CardDescription>Composição da base analisada</CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sexDistribution}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
                label={({ value, name }: any) => {
                  const pct = (value / total) * 100;
                  return `${formatPct(pct, 0)}`;
                }}
                labelLine={false}
              >
                {sexDistribution.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(v: number) => formatNumber(v)}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 space-y-1.5">
          {sexDistribution.map((d, i) => (
            <div key={d.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: COLORS[i] }}
                />
                <span className="text-muted-foreground">{d.name}</span>
              </div>
              <span className="font-medium tabular-nums">
                {formatPct((d.value / total) * 100)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
