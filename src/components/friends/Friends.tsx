import { useLocation, useParams } from "react-router-dom";

export default function Friends() {
  const { serverId } = useParams();

  return (
    <div className="hidden flex-col w-60 bg-gray-800 md:flex text-center">
      Todo
    </div>
  );
}
