import type { Meta, StoryObj } from "@storybook/react";

import { Wechat as WechatMessage } from "./messages";
import styled from "styled-components";

const meta: Meta<typeof WechatMessage> = {
  title: "Stories/Message/Wechat",
  tags: ["autodocs"],
  component: WechatMessage,
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
type Story = StoryObj<typeof WechatMessage>;

export const Wechat: Story = {
  args: {
    label: "Wechat",
    message: "Hello, world!",
    time: "10:00",
  },
};
