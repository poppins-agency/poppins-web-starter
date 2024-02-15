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
    <div className="w-[450px] space-y-10">
      <div className="spacep-y-2">
        <h3 className="underline font-bold text-xl">16/9</h3>
        <AspectRatio ratio={16 / 9} className="relative">
          <Image
            src="https://source.unsplash.com/random"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="spacep-y-2">
        <h3 className="underline font-bold text-xl">1/1</h3>
        <AspectRatio ratio={1 / 1} className="relative">
          <Image
            src="https://source.unsplash.com/random"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="spacep-y-2">
        <h3 className="underline font-bold text-xl">4/3</h3>
        <AspectRatio ratio={4 / 3} className="relative">
          <Image
            src="https://source.unsplash.com/random"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  ),
};
