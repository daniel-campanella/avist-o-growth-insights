import { Sparkles } from "lucide-react";
import { ShareOfWalletCard } from "@/components/dashboard/ShareOfWalletCard";
import { CompetitorsCard } from "@/components/dashboard/CompetitorsCard";
import { BaseComparisonCard } from "@/components/dashboard/BaseComparisonCard";
import { AgeSexChart } from "@/components/dashboard/AgeSexChart";
import { SexDonut } from "@/components/dashboard/SexDonut";
import { LocationCard } from "@/components/dashboard/LocationCard";
import { RecoverablePotentialCard } from "@/components/dashboard/RecoverablePotentialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/40">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] text-primary-foreground shadow-elevated">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Retail Insights · Avistão Supermercados
              </h1>
              <p className="text-xs text-muted-foreground">
                Visão executiva de comportamento de gasto e oportunidades de recuperação
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            POC · Dados de demonstração
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 space-y-6">
        {/* Recoverable + Share of Wallet */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <RecoverablePotentialCard />
          <ShareOfWalletCard />
        </section>

        {/* Top Competitors */}
        <section>
          <CompetitorsCard />
        </section>


        {/* Base Comparison */}
        <section>
          <BaseComparisonCard />
        </section>

        {/* Demographics */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <AgeSexChart />
          </div>
          <SexDonut />
        </section>

        <section>
          <LocationCard />
        </section>

        <footer className="pt-4 pb-8 text-center text-xs text-muted-foreground">
          Base parcial · Cluster: clientes com ao menos 1 compra em loja mapeada · Avistão Supermercados © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
};

export default Index;
