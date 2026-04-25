import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";
import { recoverablePotential } from "@/data/dashboard";
import { formatBRL } from "@/lib/format";

export const RecoverablePotentialCard = () => {
  return (
    <Card className="shadow-card border-border/60">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-base">Potencial Recuperável</CardTitle>
            <CardDescription>
              Gasto dos seus clientes em concorrentes/mês
            </CardDescription>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingDown className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-5">
        <div className="flex h-[200px] flex-col items-center justify-center">
          <p className="text-4xl font-semibold tracking-tight text-primary">
            {formatBRL(recoverablePotential)}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Oportunidade mensal de recuperação
          </p>
        </div>
        <div className="mt-3 rounded-lg bg-accent/60 p-3 text-center">
          <p className="text-xs text-muted-foreground">
            Valor que seus clientes gastam em supermercados concorrentes a cada mês
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
