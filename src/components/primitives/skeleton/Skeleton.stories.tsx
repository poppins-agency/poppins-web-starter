import type { StoryObj } from "@storybook/react";
import { Skeleton } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Skeleton",
  parameters: {
    component: Skeleton,
  },
};

type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  render: () => <Skeleton className="w-[100px] h-[20px] rounded-full" />,
};

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
