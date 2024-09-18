// import React from "react";
// import cardImg from "../assets/card.png";
// import coinIcon from "../assets/Coin.svg";
// import { cn } from "../utils/cn";

// type CardType = {
//   name: string;
//   lvl: number;
//   coins: number;
//   coinsInHour: number;
//   variant: "default" | "new" | "approved";
// };

// const cards: CardType[] = [
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "default" },
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "approved" },
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "default" },
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
//   { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, variant: "new" },
// ];

// export const List = () => {
//   return (
//     <div className="mt-5 grid grid-cols-1 gap-2 perspective">
//       {cards.map((card) => (
//         <div
//           className={cn("rounded-xl bg-primary-card border-[1px] border-primary-border p-3 flex skew-y-4-perspective relative", {
//             "card-approved": card.variant === "approved",
//             "card-new": card.variant === "new",
//           })}
//         >
//           <img src={cardImg} alt="card" className="w-[108px] h-[118px] object-cover rounded-xl" />
//           <div className="ml-[18px] w-full flex flex-col">
//             <div className="grow">
//               <h4 className="text-[16px] font-medium capitalize break-words mb-2 max-w-[140px]">{card.name}</h4>
//               <span className="text-[#FFE881] text-xs capitalize mb-2">lvl {card.lvl}</span>
//             </div>
//             <div className="mt-2 border-t-[1px]  border-primary flex justify-between items-center">
//               <div className="flex gap-1 items-center">
//                 <span className="font-secondary uppercase font-bold text-sm">{card.coins}</span>
//                 <img src={coinIcon} alt="coin" className="object-center w-4 h-4" />
//               </div>
//               <div>
//                 <span className="text-white/60 text-[9px] inline-block">Прибыль в час</span>
//                 <div className="flex gap-1 items-center">
//                   <span className=" font-bold capitalize text-sm">+{card.coinsInHour}</span>
//                   <img src={coinIcon} alt="coin" className="object-center w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


import React, { useState } from "react";
import cardImg from "../assets/card.png";
import coinIcon from "../assets/Coin.svg";
import { cn } from "../utils/cn";
import { CardDetailsModal } from "./CardDetailsModal"; // Новый компонент

type CardType = {
  name: string;
  lvl: number;
  coins: number;
  coinsInHour: number;
  description: string; // добавляем описание
  variant: "default" | "new" | "approved";
};

const cards: CardType[] = [
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 1", variant: "default" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 2", variant: "new" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 3", variant: "approved" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 4", variant: "default" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 5", variant: "new" },
  { name: "Сoffee break master", lvl: 3, coins: 19, coinsInHour: 199, description: "Описание карточки 6", variant: "new" },
];

export const List = () => {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="mt-5 grid grid-cols-1 gap-2 perspective relative">
      {cards.map((card) => (
        <div
          key={card.name}
          className={cn(
            "rounded-xl bg-primary-card border-[1px] border-primary-border p-3 flex skew-y-4-perspective relative cursor-pointer",
            {
              "card-approved": card.variant === "approved",
              "card-new": card.variant === "new",
            }
          )}
          onClick={() => handleCardClick(card)}
        >
          <img src={cardImg} alt="card" className="w-[108px] h-[118px] object-cover rounded-xl" />
          <div className="ml-[18px] w-full flex flex-col">
            <div className="grow">
              <h4 className="text-[16px] font-medium capitalize break-words mb-2 max-w-[140px]">{card.name}</h4>
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
                  <span className=" font-bold capitalize text-sm">+{card.coinsInHour}</span>
                  <img src={coinIcon} alt="coin" className="object-center w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedCard && <CardDetailsModal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};


//!
// import React, { useState } from "react"
// import cardImg from "../assets/card.png"
// import coinIcon from "../assets/Coin.svg"
// import { cn } from "../utils/cn"
// import Modal from "./CardDetailsModal"

// type CardType = {
//   name: string
//   lvl: number
//   coins: number
//   coinsInHour: number
//   variant: "default" | "new" | "approved"
// }

// const cards: CardType[] = [
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "default",
//   },
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "new",
//   },
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "approved",
//   },
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "default",
//   },
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "new",
//   },
//   {
//     name: "Сoffee break master",
//     lvl: 3,
//     coins: 19,
//     coinsInHour: 199,
//     variant: "new",
//   },
// ]

// export const List = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   return (
//     <div className="mt-5 grid grid-cols-1 gap-2 perspective">
//       {cards.map((card, index) => (
//         <div key={index} className="relative">
//           <div
//             className={cn(
//               "rounded-xl bg-primary-card border-[1px] border-primary-border p-3 flex skew-y-4-perspective relative",
//               {
//                 "card-approved": card.variant === "approved",
//                 "card-new": card.variant === "new",
//               }
//             )}
//             onClick={() => setIsModalOpen(true)}
//           >
//             <img
//               src={cardImg}
//               alt="card"
//               className="w-[108px] h-[118px] object-cover rounded-xl"
//             />
//             <div className="ml-[18px] w-full flex flex-col">
//               <div className="grow">
//                 <h4 className="text-[16px] font-medium capitalize break-words mb-2 max-w-[140px]">
//                   {card.name}
//                 </h4>
//                 <span className="text-[#FFE881] text-xs capitalize mb-2">
//                   lvl {card.lvl}
//                 </span>
//               </div>
//               <div className="mt-2 border-t-[1px] border-primary flex justify-between items-center">
//                 <div className="flex gap-1 items-center">
//                   <span className="font-secondary uppercase font-bold text-sm">
//                     {card.coins}
//                   </span>
//                   <img
//                     src={coinIcon}
//                     alt="coin"
//                     className="object-center w-4 h-4"
//                   />
//                 </div>
//                 <div>
//                   <span className="text-white/60 text-[9px] inline-block">
//                     Прибыль в час
//                   </span>
//                   <div className="flex gap-1 items-center">
//                     <span className=" font-bold capitalize text-sm">
//                       +{card.coinsInHour}
//                     </span>
//                     <img
//                       src={coinIcon}
//                       alt="coin"
//                       className="object-center w-5 h-5"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {isModalOpen && (
//             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//               <div className="p-4 flex flex-col items-center bg-[linear-gradient(180deg, #1B403C 0%, rgba(8, 25, 23, 0.20) 100%)] border-[1px] border-[#3B683F] rounded-2xl">
//                 <div className="flex ">
//                   <div><img
//                     src={cardImg}
//                     alt="card"
//                     className="w-24 h-24 mb-4 rounded-xl"
//                   /></div>
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">Coffee Break Master</h2>
//                     <p className="text-gray-500 mb-4">@BlackCabinet</p>
//                     <div>
//                       <span className="text-white/60 text-[9px] inline-block">
//                         Прибыль в час
//                       </span>
//                       <div className="flex gap-1 items-center">
//                         <span className=" font-bold capitalize text-sm">
//                           +{card.coinsInHour}
//                         </span>
//                         <img
//                           src={coinIcon}
//                           alt="coin"
//                           className="object-center w-5 h-5"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-center mb-6">
//                   Делайте перерыв на любимый кофе и получайте прибыль
//                 </p>
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Подписаться
//                 </button>
//               </div>
//             </Modal>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }
