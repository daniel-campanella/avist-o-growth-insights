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
  { name: "Atacadão", spend: 2509687.1, share: 26.96 },
  { name: "Supermercado Super Bom", spend: 526097.45, share: 5.65 },
  { name: "Assaí Atacadista", spend: 270198.19, share: 2.9 },
  { name: "Hortifruti", spend: 253745.47, share: 2.73 },
  { name: "Multimarket", spend: 238772.92, share: 2.57 },
  { name: "Supermercado Mancebo", spend: 224666.81, share: 2.41 },
  { name: "Supermarket", spend: 194307.17, share: 2.09 },
  { name: "Star Mais Supermercados", spend: 184458.19, share: 1.98 },
  { name: "Supermercado Âncora", spend: 162312.21, share: 1.74 },
  { name: "Supermercado Guanabara", spend: 160200.84, share: 1.72 },
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
