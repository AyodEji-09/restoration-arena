import type { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
export type TabType = {
  id: number;
  title: string;
  component: JSX.Element;
};
const AppTab = ({ tabs }: { tabs: TabType[] }) => {
  return (
    <Tabs defaultValue={tabs[0].title} className="w-full rounded-none">
      <TabsList className="bg-transparent pb-0 border-b rounded-none w-full block">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.title} className="!w-fit border-b-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-tertiary">
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent value={tab.title}>{tab.component}</TabsContent>
      ))}
    </Tabs>
  );
};

export default AppTab;
