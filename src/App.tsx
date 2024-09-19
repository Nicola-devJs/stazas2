import { useState } from "react"
import { Menu, Coins } from "./components"
import { List } from "./components/list"
import { cn } from "./utils/cn"
import { CardDetailsModal } from "./components/CardDetailsModal"
import { CardType } from "./types/card"

const tabs: { value: string; label: string }[] = [
  // { value: "all", label: "Все" },
  { value: "news", label: "Новые" },
  { value: "addedition", label: "Добавленные" },
  // { value: "popular", label: "Популярные" },
]

const defaultCard: CardType = {
  name: "Random card",
  author: "Unknown author",
  lvl: 1,
  coins: 1,
  coinsInHour: 10,
  description: "Купи меня",
  variant: "default",
}

const cards: CardType[] = [
  {
    name: "Tea break master",
    author: "ХаудиХо",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 1",
    variant: "default",
  },
  {
    name: "Tea break master",
    author: "Marmok",
    lvl: 5,
    coins: 19,
    coinsInHour: 311,
    description: "Описание карточки 2",
    variant: "new",
  },
  {
    name: "Bloger break master",
    author: "EeOneGuy",
    lvl: 1,
    coins: 39,
    coinsInHour: 441,
    description: "Описание карточки 3",
    variant: "approved",
  },
  {
    ...defaultCard,
    name: "Tea break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 4",
    variant: "default",
  },
  {
    ...defaultCard,
    name: "Tea break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 5",
    variant: "new",
  },
  {
    ...defaultCard,
    name: "Tea break master",
    lvl: 3,
    coins: 19,
    coinsInHour: 199,
    description: "Описание карточки 6",
    variant: "new",
  },
  {
    ...defaultCard,
    name: "Tea break master",
  },
]

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [showShare, setShowShare] = useState(false)

  const [selectedCard, setSelectedCard] = useState<CardType>(cards[0])

  const handleShareCard = (card: CardType) => {
    setSelectedCard(card)
    setShowShare(true)
  }

  const handleClearAndCloseModal = () => {
    setShowShare(false)
  }

  return (
    <div className="max-w-phone mx-auto bg-gradient-primary rounded-3xl h-full p-[30px] mb-[92px]">
      <Coins />
      <div className="inline-flex h-[37px] mt-2 bg-primary rounded-lg p-1 gap-2">
        {tabs.map((tab) => (
          <span
            className={cn(
              "py-2 px-5 text-sm font-medium capitalize rounded-md leading-3 cursor-pointer",
              {
                "bg-[#008F6E]": tab.value === activeTab.value,
              }
            )}
            onClick={() => setActiveTab(tab)}
            key={tab.value}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <List onSelectCard={handleShareCard} cards={cards} />
      <Menu />
      <CardDetailsModal
        card={selectedCard}
        onClose={handleClearAndCloseModal}
        isView={showShare}
      />
    </div>
  )
}

export default App
