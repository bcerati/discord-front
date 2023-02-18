import { useQueries } from "react-query";
import {
  find as findServer,
  findCategories as findServerCategories,
} from "../../services/servers";
import ChannelCategory from "./category/ChannelCategory";

interface IChannelsProps {
  serverId: string;
}

export default function Channels({ serverId }: IChannelsProps) {
  const [{ data: dataServer }, { data: dataCategories }] = useQueries([
    {
      queryKey: "server",
      queryFn: () => findServer(serverId),
    },
    {
      queryKey: "serverCategories",
      queryFn: () => findServerCategories(serverId),
    },
  ]);

  return (
    <div className="hidden flex-col w-60 bg-gray-800 md:flex">
      <button className="flex items-center px-4 h-12 font-title text-[15px] font-semibold text-white hover:bg-gray-550/[0.16] shadow-sm transition">
        <div className="relative mr-1 w-4 h-4">
          <svg viewBox="0 0 16 15.2" className="absolute w-4 h-4 text-gray-550">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
            ></path>
          </svg>
          <svg viewBox="0 0 16 15.2" className="absolute w-4 h-4">
            <path
              d="M7.4 11.17L4 8.62l1-1.36 2 1.53L10.64 4 12 5z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {dataServer?.name}
        <svg
          viewBox="0 0 18 18"
          fill="none"
          className="ml-auto w-[18px] h-[18px] opacity-80"
        >
          <path
            d="M5.20711 5.54289C4.81658 5.15237 4.18342 5.15237 3.79289 5.54289C3.40237 5.93342 3.40237 6.56658 3.79289 6.95711L5.20711 5.54289ZM9 10.75L8.29289 11.4571C8.68342 11.8476 9.31658 11.8476 9.70711 11.4571L9 10.75ZM14.2071 6.95711C14.5976 6.56658 14.5976 5.93342 14.2071 5.54289C13.8166 5.15237 13.1834 5.15237 12.7929 5.54289L14.2071 6.95711ZM3.79289 6.95711L8.29289 11.4571L9.70711 10.0429L5.20711 5.54289L3.79289 6.95711ZM9.70711 11.4571L14.2071 6.95711L12.7929 5.54289L8.29289 10.0429L9.70711 11.4571Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <div className="overflow-y-scroll flex-1 pt-3 space-y-[21px] font-medium text-gray-300 scrollbar-hide">
        <div>
          <div className="mt-[5px] space-y-0.5">{/** PINNED */}</div>
        </div>

        {dataCategories?.map(function (category) {
          return <ChannelCategory key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}
