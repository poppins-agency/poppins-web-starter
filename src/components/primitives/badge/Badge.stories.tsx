import type { StoryObj } from "@storybook/react";
import { Badge } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Badge",
  parameters: {
    component: Badge,
  },
};

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => <Badge variant="outline">Badge</Badge>,
};
