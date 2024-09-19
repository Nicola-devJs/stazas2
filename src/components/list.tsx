import React from "react";
import cardImg from "../assets/card.png";
import coinIcon from "../assets/Coin.svg";
import { cn } from "../utils/cn";
import { CardType } from "../types/card";

interface IProps {
  onSelectCard: (card: CardType) => void;
  cards: CardType[];
}

export const List = ({ onSelectCard, cards }: IProps) => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-2">
      {cards.map((card) => (
        <div
          key={card.name}
          className={cn(
            "rounded-xl bg-primary-card card-border p-3 flex skew-y-4-perspective relative cursor-pointer",
            {
              "card-approved": card.variant === "approved",
              "card-new": card.variant === "new",
            }
          )}
          onClick={() => onSelectCard(card)}
        >
          <img src={cardImg} alt="card" className="w-[108px] h-[118px] object-cover rounded-xl" />
          <div className="ml-[18px] w-full flex flex-col">
            <div className="grow">
              <h4 className="text-[16px] font-medium capitalize break-words mb-1 max-w-[140px]">{card.name}</h4>
              <span className="text-[#FFE881] text-xs capitalize mb-2">lvl {card.lvl}</span>
            </div>
            <div className="mt-1 border-t-[1px]  border-primary-button/50 flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <span className="font-secondary uppercase font-bold text-[16px]">{card.coins}</span>
                <img src={coinIcon} alt="coin" className="object-center w-4 h-4" />
              </div>
              <div>
                <span className="text-white/60 text-[9px] inline-block tracking-wide -mb-5">Прибыль в час</span>
                <div className="flex gap-1 items-center">
                  <span className=" font-bold capitalize text-[12px]">+{card.coinsInHour}</span>
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
