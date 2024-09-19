import React from "react";
import coinIcon from "../assets/Coin.svg";

export const Coins = () => {
  return (
    <div className="w-full flex justify-between items-center pb-4 border-b-[1px] border-primary-button/60">
      <div className="flex gap-2 items-center">
        <img src={coinIcon} alt="coin" className="object-center w-7 h-7" />
        <span className="font-secondary font-extrabold text-2xl">19, 238</span>
      </div>
      <div className="">
        <span className="text-white/60 text-[9px] inline-block tracking-wide">Прибыль в час</span>
        <div className="flex gap-1 items-center">
          <span className=" font-bold text-sm">+321</span>
          <img src={coinIcon} alt="coin" className="object-center w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
