import type { StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Tabs",
  parameters: {
    component: Tabs,
  },
};

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="first" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="first">First</TabsTrigger>
        <TabsTrigger value="second">Second</TabsTrigger>
      </TabsList>
      <TabsContent value="first">Make changes to your first here.</TabsContent>
      <TabsContent value="second">Change your second here.</TabsContent>
    </Tabs>
  ),
};
