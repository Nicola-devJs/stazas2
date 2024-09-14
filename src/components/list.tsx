import React from "react";
import cardImg from "../assets/card.png";
import coinIcon from "../assets/Coin.svg";
import { cn } from "../utils/cn";

type CardType = {
  name: string;
  lvl: number;
  coins: number;
  coinsInHour: number;
  variant: "default" | "new" | "approved";
};

const cards: CardType[] = [
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "default" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "approved" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "default" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
];

export const List = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-2">
      {cards.map((card) => (
        <div
          className={cn("rounded-xl bg-primary-card border-[1px] border-primary-border p-3 flex skew-x-2 relative", {
            "card-approved": card.variant === "approved",
            "card-new": card.variant === "new",
          })}
        >
          <img src={cardImg} alt="card" className="w-[108px] h-[118px] object-cover rounded-xl" />
          <div className="ml-[18px]  w-full flex flex-col">
            <div className="grow">
              <h4 className="text-[16px] font-medium capitalize break-words mb-2">{card.name}</h4>
              <span className="text-[#FFE881] text-xs capitalize mb-2">lvl {card.lvl}</span>
            </div>
            <div className="mt-2 border-t-[1px]  border-primary flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <span className="font-secondary uppercase font-bold text-sm">{card.coins}</span>
                <img src={coinIcon} alt="coin" className="object-center w-4 h-4" />
              </div>
              <div>
                <span className="text-white/60 text-[9px] inline-block">Прибыль в час</span>
                <div className="flex gap-1 items-center">
                  <span className=" font-bold  capitalize text-sm">+{card.coinsInHour}</span>
                  <img src={coinIcon} alt="coin" className="object-center w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
