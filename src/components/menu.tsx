import React from "react";
import { WrapperFixed } from "./wrapperFixed";

export const Menu = () => {
  return (
    <WrapperFixed className="h-[93px] bg-gradient-primary border-t-[1px] border-primary">
      <ul className="flex px-10 py-3 justify-between ">
        <li className="w-[72px] h-[60px] bg-[linear-gradient(180deg, #1B403C 0%, rgba(8, 25, 23, 0.20) 100%)] border-[1px] border-[#3B683F] rounded-2xl"></li>
        <li className="w-[72px] h-[60px] bg-[linear-gradient(180deg, #1B403C 0%, rgba(8, 25, 23, 0.20) 100%)] border-[1px] border-[#3B683F] rounded-2xl"></li>
        <li className="w-[72px] h-[60px] bg-[linear-gradient(180deg, #1B403C 0%, rgba(8, 25, 23, 0.20) 100%)] border-[1px] border-[#3B683F] rounded-2xl"></li>
        <li className="w-[72px] h-[60px] bg-[linear-gradient(180deg, #1B403C 0%, rgba(8, 25, 23, 0.20) 100%)] border-[1px] border-[#3B683F] rounded-2xl"></li>
      </ul>
    </WrapperFixed>
  );
};
