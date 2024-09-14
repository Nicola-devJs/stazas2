import { useState } from "react";
import { Menu, Coins } from "./components";
import { List } from "./components/list";
import { cn } from "./utils/cn";

const tabs: { value: string; label: string }[] = [
  // { value: "all", label: "Все" },
  { value: "news", label: "Новые" },
  { value: "addedition", label: "Добавленные" },
  // { value: "popular", label: "Популярные" },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
      <List />
      <Menu />
    </div>
  );
}

export default App;
