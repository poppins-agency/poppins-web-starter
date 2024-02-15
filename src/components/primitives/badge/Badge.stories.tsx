import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  render: () => <Badge variant="outline">Badge</Badge>,
};
