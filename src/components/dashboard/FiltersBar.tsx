import { Calendar, Filter, MapPin, Users, Wallet } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FilterSelect = ({
  icon,
  placeholder,
  options,
}: {
  icon: React.ReactNode;
  placeholder: string;
  options: string[];
}) => (
  <Select>
    <SelectTrigger className="h-10 bg-card border-border/70 min-w-[150px]">
      <span className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">{icon}</span>
        <SelectValue placeholder={placeholder} />
      </span>
    </SelectTrigger>
    <SelectContent>
      {options.map((o) => (
        <SelectItem key={o} value={o}>
          {o}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export const FiltersBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border/70 bg-card p-3 shadow-card">
      <div className="flex items-center gap-2 px-2 text-sm font-medium text-muted-foreground">
        <Filter className="h-4 w-4" />
        Filtros
      </div>
      <FilterSelect
        icon={<MapPin className="h-4 w-4" />}
        placeholder="Região"
        options={["Todas", "Rio das Ostras", "Macaé", "Cabo Frio", "Casimiro de Abreu"]}
      />
      <FilterSelect
        icon={<Users className="h-4 w-4" />}
        placeholder="Faixa etária"
        options={["Todas", "<=20", "21-30", "31-40", "41-50", "51+"]}
      />
      <FilterSelect
        icon={<Wallet className="h-4 w-4" />}
        placeholder="Classe social"
        options={["Todas", "A", "B", "C", "D/E"]}
      />
      <FilterSelect
        icon={<Calendar className="h-4 w-4" />}
        placeholder="Período"
        options={["Últimos 30 dias", "Últimos 90 dias", "Últimos 6 meses", "12 meses"]}
      />
      <div className="flex-1" />
      <Button variant="outline" size="sm" className="h-10">
        Limpar
      </Button>
      <Button size="sm" className="h-10">
        Aplicar
      </Button>
    </div>
  );
};
