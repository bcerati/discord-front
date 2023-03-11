import { parseDate } from "../../services/time";

import MessageType from "../../types/Message";

interface IMessageProps {
  message: MessageType;
}

export default function Message({ message }: IMessageProps) {
  return (
    <div>
      <div className="flex py-0.5 pr-16 pl-4 mt-[17px] leading-[22px] hover:bg-gray-950/[.07]">
        <div className="overflow-hidden relative mt-0.5 mr-4 w-10 min-w-fit h-10 rounded-full">
          <span className="message-profile-pic">
            <img
              alt="Raegan.Sauer68"
              src="/assets/avatars/7.jpg"
              decoding="async"
              data-nimg="fixed"
              className="mt-0.5 mr-4 w-10 h-10 rounded-full"
            />
          </span>
        </div>

        <div>
          <p className="flex items-baseline">
            <span className="mr-2 font-medium text-green-400">
              {`${message.user.firstName} ${message.user.lastName}`}
            </span>

            <span className="text-xs font-medium text-gray-400">
              {parseDate(message.createdAt)}
            </span>
          </p>
          <p className="text-gray-100">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
