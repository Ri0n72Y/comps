import type { Meta, StoryObj } from "@storybook/react";

import { Chat } from "./messages";
import styled from "styled-components";

const meta: Meta<typeof Chat> = {
  title: "Stories/Message/Wechat/Chats",
  component: Chat,
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-width: 20rem;
  max-width: 60rem;
  min-height: 16rem;
  padding: 1rem;
  background-color: #f1f1f1;
  box-sizing: border-box;
`;

export default meta;
type Story = StoryObj<typeof Chat>;

export const Chats: Story = {
  args: {
    isGroup: true,
    messages: [
      {
        label: "Wechat",
        message: "Hello, world!",
      },
      {
        label: "Wechat2",
        message: "Hello, world!",
      },
      {
        label: "Wechat - very looooooooooooooong name",
        message: "Hello, world!",
      },
      {
        label: "self",
        message:
          "Hello, world! this sentence is very loooooooooooooooooooooooooooooooooooooooooooooong.",
      },
      {
        label: "self",
        message: "again",
      },
      {
        label: "Other",
        message:
          "Hello, world! this sentence is very loooooooooooooooooooooooooooooooooooooooooooooong.",
      },
    ],
  },
};
