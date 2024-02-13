import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/primitives/input";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => <Input id="name" placeholder="Basic Input Field" />,
};
export const InputField: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Basic Input Field" />
    </div>
  ),
};
