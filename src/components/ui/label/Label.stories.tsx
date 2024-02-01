import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => <Label htmlFor="name">Name</Label>,
};
