type Tab = {
  tabText: string;
  tabContent: React.ReactNode;
};

type Tabs = Tab[];

const ServicesTabs: Tabs = [
  { tabText: "Talent Solution", tabContent: <h3>This is the Tab Content</h3> },
  {
    tabText: "Technology & Strategy",
    tabContent: <h3>This is the Tab Content</h3>,
  },
  { tabText: "AI", tabContent: <h3>This is the Tab Content</h3> },
];

export const TabBar = () => {
  return (
    <div className="tabs-container">
      <div className="tab px-10 py-2 border-2 border-gray-400">
        <div className="text-2xl">Talent Solution</div>
      </div>
    </div>
  );
};
