"use client";

import { useState } from "react";
import AdditionalInfoTab from "./additional-info-tab";
import DescriptionTab from "./description-tab";
import ReviewTab from "./review-tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="flex mb-8">
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="Description"
          tab="description"
        />
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="Additional Info"
          tab="additionalInfo"
        />
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          label="Review"
          tab="review"
        />
      </div>

      <div>
        {activeTab === "description" && <DescriptionTab />}
        {activeTab === "additionalInfo" && <AdditionalInfoTab />}
        {activeTab === "review" && <ReviewTab />}
      </div>
    </div>
  );
};

export default Tabs;

interface TabButtonProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  label: string;
  tab: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  activeTab,
  setActiveTab,
  label,
  tab,
}) => {
  return (
    <button
      className={`px-4 py-2 border-t-2 hover:border-primary duration-300 ${
        activeTab === tab
          ? "bg-white border-t-primary"
          : "bg-secondary border-transparent"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {label}
    </button>
  );
};
