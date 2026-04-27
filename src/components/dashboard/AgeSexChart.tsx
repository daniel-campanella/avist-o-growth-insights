import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  LabelList,
} from "recharts";
import { ageSexDistribution } from "@/data/dashboard";
import { formatPct } from "@/lib/format";

const colors: Record<string, string> = {
  Feminino: "hsl(var(--chart-3))",
  Masculino: "hsl(var(--chart-2))",
  Outro: "hsl(var(--chart-4))",
  "Não informado": "hsl(var(--muted-foreground) / 0.5)",
};

export const AgeSexChart = () => {
  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Distribuição por Idade e Sexo</CardTitle>
        <CardDescription>
          Clientes analisados agrupados por faixa etária e sexo
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-5">
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageSexDistribution} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="range"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--accent) / 0.4)" }}
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Legend
                iconType="circle"
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              />
              {(["Feminino", "Masculino", "Outro", "Não informado"] as const).map((key, idx, arr) => {
                const isLast = idx === arr.length - 1;
                const grandTotal = ageSexDistribution.reduce((s, r) => s + (r.total || 0), 0);
                return (
                  <Bar
                    key={key}
                    dataKey={key}
                    stackId="a"
                    fill={colors[key]}
                    radius={isLast ? [6, 6, 0, 0] : [0, 0, 0, 0]}
                  >
                    <LabelList
                      dataKey={key}
                      position="inside"
                      content={(props: any) => {
                        const { x, y, width, height, value, index } = props;
                        const row = ageSexDistribution[index];
                        if (!row || !value || !row.total) return null;
                        const pct = (value / row.total) * 100;
                        if (pct < 6 || height < 14) return null;
                        return (
                          <text
                            x={x + width / 2}
                            y={y + height / 2}
                            textAnchor="middle"
                            dominantBaseline="central"
                            style={{ fontSize: 10, fill: "#fff", fontWeight: 600 }}
                          >
                            {formatPct(pct, 0)}
                          </text>
                        );
                      }}
                    />
                    {isLast && (
                      <LabelList
                        dataKey={key}
                        position="top"
                        content={(props: any) => {
                          const { x, y, width, index } = props;
                          const row = ageSexDistribution[index];
                          if (!row || !grandTotal) return null;
                          const pct = (row.total / grandTotal) * 100;
                          return (
                            <text
                              x={x + width / 2}
                              y={y - 6}
                              textAnchor="middle"
                              style={{ fontSize: 11, fill: "hsl(var(--foreground))", fontWeight: 600 }}
                            >
                              {formatPct(pct, 1)}
                            </text>
                          );
                        }}
                      />
                    )}
                  </Bar>
                );
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
