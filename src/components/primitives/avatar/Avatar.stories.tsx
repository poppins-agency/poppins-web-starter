import type { StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Avatar",
  parameters: {
    component: Avatar,
  },
};

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
