export type CardType = {
  name: string;
  author?: string;
  lvl: number;
  coins: number;
  coinsInHour: number;
  description: string; // добавляем описание
  variant: "default" | "new" | "approved";
};
