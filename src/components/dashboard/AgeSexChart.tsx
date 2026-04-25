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
} from "recharts";
import { ageSexDistribution } from "@/data/dashboard";

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
              <Bar dataKey="Feminino" stackId="a" fill={colors.Feminino} radius={[0, 0, 0, 0]} />
              <Bar dataKey="Masculino" stackId="a" fill={colors.Masculino} />
              <Bar dataKey="Outro" stackId="a" fill={colors.Outro} />
              <Bar dataKey="Não informado" stackId="a" fill={colors["Não informado"]} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
