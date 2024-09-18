import { useState } from "react";
import { Menu, Coins } from "./components";
import { List } from "./components/list";
import { cn } from "./utils/cn";
import { CardDetailsModal } from "./components/CardDetailsModal";
import { CardType } from "./types/card";

const tabs: { value: string; label: string }[] = [
  // { value: "all", label: "Все" },
  { value: "news", label: "Новые" },
  { value: "addedition", label: "Добавленные" },
  // { value: "popular", label: "Популярные" },
];

const cards: CardType[] = [
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 1",
    variant: "default",
  },
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 2",
    variant: "new",
  },
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 3",
    variant: "approved",
  },
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 4",
    variant: "default",
  },
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 5",
    variant: "new",
  },
  {
    name: "Сoffee break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 6",
    variant: "new",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showShare, setShowShare] = useState(false);

  const [selectedCard, setSelectedCard] = useState<CardType>(cards[0]);

  const handleShareCard = (card: CardType) => {
    setSelectedCard(card);
    setShowShare(true);
  };

  const handleClearAndCloseModal = () => {
    setShowShare(false);
  };

  return (
    <div className="max-w-phone mx-auto bg-gradient-primary h-full p-[30px] mb-[92px]">
      <Coins />
      <div className="inline-flex h-[37px] mt-2 bg-primary rounded-lg p-1 gap-2">
        {tabs.map((tab) => (
          <span
            className={cn("py-2 px-5 text-sm font-medium capitalize rounded-md leading-3 cursor-pointer", {
              "bg-[#008F6E]": tab.value === activeTab.value,
            })}
            onClick={() => setActiveTab(tab)}
            key={tab.value}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <List onSelectCard={handleShareCard} cards={cards} />
      <Menu />
      <CardDetailsModal card={selectedCard} onClose={handleClearAndCloseModal} isView={showShare} />
    </div>
  );
}

export default App;
