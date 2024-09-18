import React from "react";
import cardImg from "../assets/card.png"; // импорт изображения
import coinIcon from "../assets/Coin.svg"; // импорт иконки

type CardDetailsModalProps = {
  card: {
    name: string;
    lvl: number;
    coinsInHour: number;
    description: string;
  };
  onClose: () => void;
};

export const CardDetailsModal: React.FC<CardDetailsModalProps> = ({ card, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/60 flex items-end justify-center z-50">
      <div className="w-full bg-primary-card p-4 rounded-t-xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white font-bold text-lg">Монет: {card.coinsInHour}</span>
          <button className="text-white text-xl" onClick={onClose}>X</button>
        </div>
        <hr className="border-t-[1px] border-primary-border mb-4" />
        <div className="flex items-center">
          <img src={cardImg} alt="card" className="w-[80px] h-[80px] object-cover rounded-xl" />
          <div className="ml-4">
            <h4 className="text-[16px] font-medium capitalize">{card.name}</h4>
            <span className="text-[#FFE881] text-xs capitalize">lvl {card.lvl}</span>
            <div className="mt-2 flex items-center">
              <span className="font-secondary uppercase font-bold text-sm">{card.coinsInHour}</span>
              <img src={coinIcon} alt="coin" className="object-center w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white/60 text-sm">{card.description}</p>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl">Подписаться</button>
      </div>
    </div>
  );
};
