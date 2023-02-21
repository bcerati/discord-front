import MessageType from "../../types/Message";

interface IMessageProps {
  message: MessageType;
}

export default function Message({ message }: IMessageProps) {
  return (
    <div>
      <div className="flex py-0.5 pr-16 pl-4 mt-[17px] leading-[22px] hover:bg-gray-950/[.07]">
        <div className="overflow-hidden relative mt-0.5 mr-4 w-10 min-w-fit h-10 rounded-full">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "40px",
              height: "40px",
              background: "none",
              opacity: "1",
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "relative",
            }}
          >
            <img
              alt="Raegan.Sauer68"
              src="/assets/avatars/7.jpg"
              decoding="async"
              data-nimg="fixed"
              className="mt-0.5 mr-4 w-10 h-10 rounded-full"
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
            <noscript></noscript>
          </span>
        </div>

        <div>
          <p className="flex items-baseline">
            <span className="mr-2 font-medium text-green-400">
              Boris Cerati
            </span>

            <span className="text-xs font-medium text-gray-400">
              09/20/2022
            </span>
          </p>
          <p className="text-gray-100">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
