import type { StoryObj } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Poppins Design System/Components/Primitives/Button",
  parameters: {
    component: Button,
  },
};

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Button size="lg" variant="primary">
      Primary Button
    </Button>
  ),
};
export const Secondary: Story = {
  render: () => (
    <Button size="lg" variant="secondary">
      Secondary Button
    </Button>
  ),
};
export const Outline: Story = {
  render: () => (
    <Button size="lg" variant="outline">
      Outline Button
    </Button>
  ),
};
export const Destructive: Story = {
  render: () => (
    <Button size="lg" variant="destructive">
      Destructive Button
    </Button>
  ),
};
export const Link: Story = {
  render: () => (
    <Button size="lg" variant="link">
      Link Button
    </Button>
  ),
};
export const Ghost: Story = {
  render: () => (
    <Button size="lg" variant="ghost">
      Ghost Button
    </Button>
  ),
};
