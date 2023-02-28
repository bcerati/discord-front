import { useQueries, useQuery } from "react-query";

import { find, findAllMessages } from "../../services/channels";
import ChannelHeader from "./ChannelHeader";
import Message from "./Message";

import ChannelNewMessage from "./ChannelNewMessage";

import type MessageType from "../../types/Message";
import type ChannelType from "../../types/Channel";

interface IChannelProps {
  serverId?: string;
  channelId?: string;
}

export default function Channel({ serverId, channelId }: IChannelProps) {
  if (!serverId || !channelId) {
    return <div className="flex flex-col flex-1 shrink min-w-0 bg-gray-700" />;
  }

  const [{ data: messages }, { data: channel }] = useQueries([
    {
      queryKey: ["channel_messages", channelId],
      queryFn: async () => findAllMessages(serverId, channelId),
    },

    {
      queryKey: ["channel", channelId],
      queryFn: async () => find(serverId, channelId),
    },
  ]);

  return (
    <div className="flex flex-col flex-1 shrink min-w-0 bg-gray-700">
      <ChannelHeader />

      <div className="overflow-y-auto flex-1">
        {messages?.map(function (message: MessageType) {
          return <Message key={message.id} message={message} />;
        })}
      </div>

      {channel && <ChannelNewMessage channel={channel} />}
    </div>
  );
}
