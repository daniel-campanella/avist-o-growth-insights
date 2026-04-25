// Static data extracted from POC CSVs for Avistão Supermercados

export const baseAnalysis = {
  allMarkets: {
    customers: 4391,
    avgTicket: 53.33,
    avgRecurrence: 3.66,
  },
  avistao: {
    customers: 1488,
    avgTicket: 100.88,
    avgRecurrence: 1.66,
  },
};

export const wallet = {
  avistaoSpend: 658414.02,
  totalSpend: 6048810.64,
  shareValue: 10.89, // %
  totalTxns: 113419,
  avistaoTxns: 6527,
  shareTxns: 5.75,
};

// Recoverable potential = monthly spend of Avistão customers in competitors
export const recoverablePotential = 302440.532;

export const topCompetitors = [
  { name: "Supermercado Super Bom", spend: 521833.16, share: 8.63 },
  { name: "Hortifruti", spend: 252933.35, share: 4.18 },
  { name: "Multimarket", spend: 235676.68, share: 3.9 },
  { name: "Supermercado Mancebo", spend: 223212.36, share: 3.69 },
  { name: "Supermarket", spend: 190543.04, share: 3.15 },
  { name: "Star Mais Supermercados", spend: 183671.68, share: 3.04 },
  { name: "Supermercado Ancora", spend: 161194.24, share: 2.66 },
  { name: "Supermercado Guanabara", spend: 159189.0, share: 2.63 },
  { name: "Mercado Extra", spend: 141525.54, share: 2.34 },
  { name: "Lufelana Supermercados", spend: 85589.98, share: 1.41 },
  { name: "Supermercado Adonai", spend: 72253.76, share: 1.19 },
  { name: "Supermercado Tinoco", spend: 69985.22, share: 1.16 },
];

export const ageDistribution = [
  { range: "<=20", count: 590 },
  { range: "21-30", count: 1323 },
  { range: "31-40", count: 970 },
  { range: "41-50", count: 772 },
  { range: "51+", count: 545 },
];

const totalAgeSex = 590 + 1323 + 970 + 772 + 545;

export const ageSexDistribution = [
  {
    range: "<=20",
    Feminino: 140,
    Masculino: 65,
    Outro: 353,
    "Não informado": 32,
    total: 590,
  },
  {
    range: "21-30",
    Feminino: 671,
    Masculino: 305,
    Outro: 294,
    "Não informado": 53,
    total: 1323,
  },
  {
    range: "31-40",
    Feminino: 591,
    Masculino: 220,
    Outro: 146,
    "Não informado": 13,
    total: 970,
  },
  {
    range: "41-50",
    Feminino: 482,
    Masculino: 175,
    Outro: 107,
    "Não informado": 8,
    total: 772,
  },
  {
    range: "51+",
    Feminino: 347,
    Masculino: 118,
    Outro: 75,
    "Não informado": 5,
    total: 545,
  },
].map((d) => ({ ...d, totalShare: (d.total / totalAgeSex) * 100 }));

export const sexDistribution = [
  { name: "Feminino", value: 2231 },
  { name: "Outro", value: 975 },
  { name: "Masculino", value: 883 },
  { name: "Não informado", value: 111 },
];

const cityRaw: Array<[string, number]> = [
  ["RIO DAS OSTRAS", 2627],
  ["CASIMIRO DE ABREU", 184],
  ["RIO DE JANEIRO", 273],
  ["CABO FRIO", 164],
  ["MACAE", 141],
  ["DUQUE DE CAXIAS", 74],
  ["SAO GONCALO", 62],
  ["CAMPOS DOS GOYTACAZES", 56],
  ["SAO JOAO DE MERITI", 56],
  ["NOVA IGUACU", 49],
  ["BELFORD ROXO", 37],
  ["NITEROI", 32],
  ["MAGE", 23],
  ["NOVA FRIBURGO", 22],
  ["ARMACAO DOS BUZIOS", 20],
  ["SAO PEDRO DA ALDEIA", 18],
  ["ITABORAI", 17],
  ["PETROPOLIS", 14],
  ["ITAPERUNA", 14],
  ["TERESOPOLIS", 12],
  ["MESQUITA", 12],
];

const totalCityCustomers = 4391;

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
