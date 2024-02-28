import type { StoryObj } from "@storybook/react";
import { Checkbox } from ".";

export default {
  title: "Poppins Design System/Components/Form Elements/Checkbox",
  parameters: {
    component: Checkbox,
  },
};
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: () => <Checkbox />,
};
