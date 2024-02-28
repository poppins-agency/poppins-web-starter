import type { StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Card",
  parameters: {
    component: Card,
  },
};

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <hr />
        Card Content
        <hr />
      </CardContent>
      <CardFooter className="flex justify-between">Card Footer</CardFooter>
    </Card>
  ),
};
