import { Link } from "react-router-dom";
import Server from "../../types/Server";

interface IServerIconProps {
  server: Server;
}

export default function ServerIcon({ server }: IServerIconProps) {
  return (
    <Link
      className="group block relative mb-2"
      to={`/server/${server.id}`}
      title={server.name}
    >
      <div className="flex absolute -left-3 items-center h-full">
        <div className="h-10 w-1 transition-all duration-200 origin-left bg-white rounded-r"></div>
      </div>

      <div className="group-active:translate-y-px">
        <div className="rounded-2xl hover:bg-gray-500 text-white flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden">
          <span className="icon-bg">
            <span>
              <img
                alt={`${server.name}-bg`}
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e"
              />
            </span>

            <img
              alt={server.name}
              src={`data:image/${server.image.extension};base64,${server.image.base64}`}
              className="icon"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
