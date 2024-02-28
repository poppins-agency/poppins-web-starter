import type { StoryObj } from "@storybook/react";
import { Input } from "@/components/forms/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from ".";

export default {
  title: "Poppins Design System/Components/Form Elements/Select",
  parameters: {
    component: Select,
  },
};

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};
