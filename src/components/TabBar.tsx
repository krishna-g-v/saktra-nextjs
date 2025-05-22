"use client";

import { useState } from "react";

type Tab = {
  tabText: string;
  tabContent: React.ReactNode;
};

type Tabs = Tab[];

const ServicesTabs: Tabs = [
  {
    tabText: "Talent Solution",
    tabContent: (
      <div className="tabContent text-center flex flex-col items-center justify-center">
        <h3 className="text-[30px] font-extrabold">This is the Tab Content</h3>
        <p className="text-[16px] max-w-[70%] text-center">
          Connect your business with the right tech talent to meet your project
          needs and organizational goals. Our staffing services are designed to
          provide skilled professionals across various technology domains.
        </p>
      </div>
    ),
  },
  {
    tabText: "Technology & Strategy",
    tabContent: <h3>This is the Tab Content 2</h3>,
  },
  { tabText: "AI", tabContent: <h3>This is the Tab Content 3</h3> },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container flex flex-col items-center">
      <div className="tabs-container flex gap-[6px] bg-[#f1f5f9] p-[4px] rounded-[10px]">
        {ServicesTabs.map((tab, index) => {
          return (
            <div
              onClick={() => setActiveTab(index)}
              key={index}
              className={`tab cursor-pointer min-w-[290px] text-center transition-all rounded-[4px] hover:scale-[1.03] py-2 ${
                index === activeTab
                  ? "bg-[#ffffff] text-[#020817]"
                  : "text-[#64758b]"
              }`}
            >
              <div className="text-[16px]">{tab.tabText}</div>
            </div>
          );
        })}
      </div>
      <div className="active-content mt-10">
        {ServicesTabs[activeTab].tabContent}
      </div>
    </div>
  );
};
