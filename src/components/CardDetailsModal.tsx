import React from "react";
import cardImg from "../assets/card.png"; // импорт изображения
import coinIcon from "../assets/Coin.svg"; // импорт иконки
import { WrapperFixed } from "./wrapperFixed";
import { CloseIcon } from "../icons/close";
import { CoinIcon } from "../icons/coin";
import { YoutubeIcon } from "../icons/youtube";
import { cn } from "../utils/cn";

type CardDetailsModalProps = {
  card: {
    name: string;
    lvl: number;
    coinsInHour: number;
    description: string;
  };
  onClose: () => void;
  isView: boolean;
};

export const CardDetailsModal: React.FC<CardDetailsModalProps> = ({ card, onClose, isView }) => {
  return (
    <WrapperFixed
      className={cn("relative items-end min-h-0 transition-all  flex-col z-50", {
        "min-h-screen ": isView,
      })}
    >
      <div
        className={cn("h-full w-full bg-gradient-to-b from-primary/50 opacity-0 transition-all to-primary-border", {
          "opacity-1": isView,
        })}
        onClick={onClose}
      ></div>
      <div
        className={cn(
          "absolute left-0 right-0 bottom-0 w-full bg-primary-card pt-6 pb-10 px-10 rounded-t-3xl z-10 translate-y-10 opacity-0 pointer-events-none transition-all",
          { "translate-y-0 opacity-1 pointer-events-auto": isView }
        )}
      >
        <button className="absolute right-3 top-3" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="flex gap-3 items-center mb-4">
          <CoinIcon /> <span>{card.coinsInHour}</span>
        </div>
        <hr className="border-t-[1px] border-gray-700 mb-4" />
        <div className="flex items-center">
          <img src={cardImg} alt="card" className="size-[150px] object-cover rounded-xl" />
          <div className="ml-6">
            <h4 className="text-2xl font-semibold capitalize mb-2">{card.name}</h4>
            <div className="flex items-center gap-2 mb-1">
              <YoutubeIcon />
              <span className="text-gray-500 underline text-sm font-light">@BlackCabinet</span>
            </div>

            <div>
              <span className="text-white/60 text-xs inline-block">Прибыль в час</span>
              <div className="flex gap-1 items-center">
                <span className=" font-bold capitalize text-sm">+{card.coinsInHour}</span>
                <img src={coinIcon} alt="coin" className="object-center w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-white/60 text-sm text-center">{card.description}</p>
        </div>
        <button className="mt-8 w-full bg-primary-border text-lg text-white h-14 rounded-xl">Подписаться</button>
      </div>
    </WrapperFixed>
  );
};
