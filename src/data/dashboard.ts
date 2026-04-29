// Static data extracted from POC CSVs for Avistão Supermercados

export const baseAnalysis = {
  allMarkets: {
    customers: 4520,
    avgTicket: 65.9442267659671,
    avgRecurrence: 4.0087331259453752,
  },
  avistao: {
    customers: 1496,
    avgTicket: 100.51658551338258,
    avgRecurrence: 1.6623931623931624,
  },
};

export const wallet = {
  avistaoSpend: 664716.18,
  totalSpend: 9307976.04,
  shareValue: 7.14, // %
  totalTxns: 140775,
  avistaoTxns: 6613,
  shareTxns: 4.7,
};

// Recoverable potential = monthly spend of Avistão customers in competitors
export const recoverablePotential = 421029.04818181455;

// Top competitors (excluding Avistão itself and "Other / Unclassified")
export const topCompetitors = [
  { name: "Atacadão", spend: 2511134.45, share: 22.53 },
  { name: "Supermercado Super Bom", spend: 527146.29, share: 4.73 },
  { name: "Assaí Atacadista", spend: 270298.27, share: 2.42 },
  { name: "Hortifruti", spend: 253921.18, share: 2.28 },
  { name: "Multimarket", spend: 238826.13, share: 2.14 },
  { name: "Supermercado Princesa", spend: 229131.57, share: 2.06 },
  { name: "Supermercado Mancebo", spend: 224693.76, share: 2.02 },
  { name: "Star Mais Supermercados", spend: 201705.12, share: 1.81 },
  { name: "Supermarket", spend: 194507.96, share: 1.74 },
  { name: "Supermercado Elshaday", spend: 193844.72, share: 1.74 },
  { name: "Supermercado Âncora", spend: 162331.21, share: 1.46 },
  { name: "Supermercado Guanabara", spend: 161138.49, share: 1.45 },
  { name: "Carrefour", spend: 143279.52, share: 1.29 },
  { name: "Mercado Extra", spend: 142220.15, share: 1.28 },
  { name: "Rede Economia", spend: 119401.72, share: 1.07 },
];

export const ageDistribution = [
  { range: "<=20", count: 607 },
  { range: "21-30", count: 1359 },
  { range: "31-40", count: 997 },
  { range: "41-50", count: 806 },
  { range: "51+", count: 555 },
];

const totalAgeSex = 607 + 1359 + 997 + 806 + 555;

export const ageSexDistribution = [
  {
    range: "<=20",
    Feminino: 147,
    Masculino: 66,
    Outro: 359,
    "Não informado": 35,
    total: 607,
  },
  {
    range: "21-30",
    Feminino: 691,
    Masculino: 310,
    Outro: 302,
    "Não informado": 56,
    total: 1359,
  },
  {
    range: "31-40",
    Feminino: 607,
    Masculino: 227,
    Outro: 150,
    "Não informado": 13,
    total: 997,
  },
  {
    range: "41-50",
    Feminino: 500,
    Masculino: 183,
    Outro: 115,
    "Não informado": 8,
    total: 806,
  },
  {
    range: "51+",
    Feminino: 354,
    Masculino: 118,
    Outro: 78,
    "Não informado": 5,
    total: 555,
  },
].map((d) => ({ ...d, totalShare: (d.total / totalAgeSex) * 100 }));

export const sexDistribution = [
  { name: "Feminino", value: 2299 },
  { name: "Outro", value: 1004 },
  { name: "Masculino", value: 904 },
  { name: "Não informado", value: 117 },
];

const cityRaw: Array<[string, number]> = [
  ["RIO DAS OSTRAS", 2712],
  ["CASIMIRO DE ABREU", 185],
  ["CABO FRIO", 165],
  ["MACAE", 145],
  ["DUQUE DE CAXIAS", 76],
  ["SAO GONCALO", 63],
  ["SAO JOAO DE MERITI", 59],
  ["CAMPOS DOS GOYTACAZES", 58],
  ["NOVA IGUACU", 53],
  ["BELFORD ROXO", 39],
  ["NITEROI", 32],
  ["RIO DE JANEIRO", 280],
  ["MAGE", 23],
  ["NOVA FRIBURGO", 22],
  ["ARMACAO DOS BUZIOS", 20],
  ["SAO PEDRO DA ALDEIA", 19],
  ["ITABORAI", 18],
  ["PETROPOLIS", 15],
  ["ITAPERUNA", 14],
  ["MESQUITA", 13],
  ["TERESOPOLIS", 12],
];

const totalCityCustomers = 4520;

const formatCityName = (s: string) =>
  s
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export const cityDistribution = cityRaw
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .map(([name, count]) => ({
    name: formatCityName(name),
    count,
    share: (count / totalCityCustomers) * 100,
  }));

const top8Sum = cityRaw
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .reduce((s, [, n]) => s + n, 0);

export const otherCities = {
  count: totalCityCustomers - top8Sum,
  share: ((totalCityCustomers - top8Sum) / totalCityCustomers) * 100,
};

export const monthlySpendAvistao: Array<{ month: string; total: number }> = [
  { month: "Nov/24", total: 790.06 },
  { month: "Dez/24", total: 5670.4 },
  { month: "Jan/25", total: 6379.85 },
  { month: "Fev/25", total: 20794.46 },
  { month: "Mar/25", total: 26605.46 },
  { month: "Abr/25", total: 30762.65 },
  { month: "Mai/25", total: 33982.12 },
  { month: "Jun/25", total: 38379.11 },
  { month: "Jul/25", total: 35159.31 },
  { month: "Ago/25", total: 33690.46 },
  { month: "Set/25", total: 35433.47 },
  { month: "Out/25", total: 38237.89 },
  { month: "Nov/25", total: 30154.41 },
  { month: "Dez/25", total: 110292.98 },
  { month: "Jan/26", total: 89751.02 },
  { month: "Fev/26", total: 62816.02 },
  { month: "Mar/26", total: 32771.15 },
  { month: "Abr/26", total: 33045.36 },
];
