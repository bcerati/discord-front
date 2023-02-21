import Hashtag from "../../assets/icons/Hashtag";
import InviteUser from "../../assets/icons/InviteUser";
import ServerCategoryType from "../../../types/ServerCategory";
import CategoryOpen from "../../assets/icons/CategoryOpen";
import { Link } from "react-router-dom";

interface IServerCategoryProps {
  category: ServerCategoryType;
  serverId: string;
}

export default function ServerCategory({
  category,
  serverId,
}: IServerCategoryProps) {
  return (
    <div>
      <button className="flex items-center px-0.5 w-full font-title text-xs tracking-wide hover:text-gray-100 uppercase">
        <CategoryOpen />
        {category.name}
      </button>

      <div className="mt-[5px] space-y-0.5">
        {category.channels.map(function (channel) {
          return (
            <Link
              className="text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24] flex items-center px-2 mx-2 py-1 rounded group relative"
              to={`/server/${serverId}/${channel.id}`}
              key={channel.id}
            >
              <Hashtag />
              {channel.name}
              <InviteUser />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
