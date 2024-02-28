import type { StoryObj } from "@storybook/react";
import { Textarea } from ".";

export default {
  title: "Poppins Design System/Components/Form Elements/Textarea",
  parameters: {
    component: Textarea,
  },
};

type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: () => <Textarea />,
};
