import { useQuery } from "react-query";

import { findAllMessages } from "../../services/channels";
import ChannelHeader from "./ChannelHeader";
import Message from "./Message";

import type MessageType from "../../types/Message";

interface IChannelProps {
  serverId?: string;
  channelId?: string;
}

export default function Channel({ serverId, channelId }: IChannelProps) {
  if (channelId === undefined || serverId === undefined) {
    return <div className="flex flex-col flex-1 shrink min-w-0 bg-gray-700" />;
  }

  const { data: messages } = useQuery<MessageType[], Error>({
    queryKey: ["channel_messages", channelId],
    queryFn: async () => findAllMessages(serverId, channelId),
  });

  return (
    <div className="flex flex-col flex-1 shrink min-w-0 bg-gray-700">
      <ChannelHeader />

      <div className="overflow-y-scroll flex-1">
        {messages?.map(function (message) {
          return <Message key={message.id} message={message} />;
        })}
      </div>
    </div>
  );
}
