import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";
import Image from "next/image";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Basic: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://source.unsplash.com/random"
          alt="Image"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
