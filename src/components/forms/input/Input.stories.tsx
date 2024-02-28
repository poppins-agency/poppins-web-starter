import type { StoryObj } from "@storybook/react";
import { Input } from "@/components/forms/input";
import { Label } from "../label";

export default {
  title: "Poppins Design System/Components/Form Elements/Input",
  parameters: {
    component: Input,
  },
};

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
