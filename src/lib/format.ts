export const formatBRL = (value: number, opts?: { compact?: boolean }) => {
  if (opts?.compact) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPct = (value: number, digits = 1) =>
  `${value.toFixed(digits).replace(".", ",")}%`;

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("pt-BR").format(value);
