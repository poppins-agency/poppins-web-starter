import type { StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Accordion",
  parameters: {
    component: Accordion,
  },
};

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Welllllll you&apos;re here now? So I guess it is!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
