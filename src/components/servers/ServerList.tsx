import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { findAll as findAllServers } from "../../services/servers";
import Server from "../../types/Server";
import ServerIcon from "./ServerIcon";

export default function ServerList() {
  const routeParams = useParams();

  const { data } = useQuery<Server[], Error>({
    queryKey: "servers",
    queryFn: findAllServers,
    initialData: [],
  });

  return (
    <div className="hidden overflow-y-scroll p-3 space-y-2 bg-gray-900 md:block scrollbar-hide">
      <a className="group block relative" href="/">
        <div className="flex absolute -left-3 items-center h-full">
          <div className="h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 w-1 transition-all duration-200 origin-left bg-white rounded-r"></div>
        </div>
        <div className="group-active:translate-y-px">
          <div className="text-gray-100 group-hover:rounded-2xl group-hover:bg-brand group-hover:text-white bg-gray-700 rounded-3xl flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden">
            <svg
              aria-hidden="false"
              aria-label="Discord"
              viewBox="0 0 28 20"
              className="w-7 h-5"
            >
              <path
                fill="currentColor"
                d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
              ></path>
            </svg>
          </div>
        </div>
      </a>
      <hr className="mx-2 rounded border-t-2 border-t-white/[.06]" />

      <div className="servers">
        {data &&
          data.map(function (server) {
            return <ServerIcon key={server.id} server={server} />;
          })}
      </div>
    </div>
  );
}
