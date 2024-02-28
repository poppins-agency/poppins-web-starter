import type { StoryObj } from "@storybook/react";
import { Label } from "@/components/forms/label";
import { RadioGroup, RadioGroupItem } from ".";

export default {
  title: "Poppins Design System/Components/Form Elements/RadioGroup",
  parameters: {
    component: RadioGroup,
  },
};

type Story = StoryObj<typeof RadioGroup>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};
