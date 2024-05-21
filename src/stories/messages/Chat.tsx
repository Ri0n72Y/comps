import styled from "styled-components";
import { MessageProps, Wechat } from "./Message";

interface Props {
  isGroup?: boolean;
  messages: MessageProps[];
}
export function Chat({ messages, isGroup }: Props) {
  console.log(messages);
  return (
    <Container>
      {messages.map((message, index) => (
        <Wechat
          key={index}
          section={message.section}
          hideLabel={!isGroup}
          align={message.label === "self" ? "right" : message.align}
          label={message.label}
          message={message.message}
          avatar={message.avatar}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
