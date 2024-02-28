import type { StoryObj } from "@storybook/react";
import { Switch } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Switch",
  parameters: {
    component: Switch,
  },
};

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => <Switch />,
};
