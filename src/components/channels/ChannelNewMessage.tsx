import { useRef, RefObject } from "react";
import type ChannelType from "../../types/Channel";

interface IChannelNewMessageProps {
  channel: ChannelType;
}

function ChannelNewMessage({ channel }: IChannelNewMessageProps) {
  const messageInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="pl-5 pr-3 mb-2">
      <form onSubmit={(e) => sendMessage(e, messageInputRef)}>
        <input
          ref={messageInputRef}
          className="w-full p-3 bg-gray-600 rounded-lg"
          placeholder={`Message #${channel.name}`}
        />
      </form>
    </div>
  );
}

function sendMessage(
  event: React.FormEvent<HTMLFormElement>,
  messageInputRef: RefObject<HTMLInputElement>,
) {
  event.preventDefault();

  if (!messageInputRef.current) {
    return;
  }

  const message = messageInputRef.current.value;

  console.log(`Send message ${message}`);

  messageInputRef.current.value = "";
}

export default ChannelNewMessage;
