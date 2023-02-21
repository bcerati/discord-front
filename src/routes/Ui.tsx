import ServerCategories from "../components/channels/ServerCategories";
import { useParams } from "react-router-dom";

import Channel from "../components/channels/Channel";
import Friends from "../components/friends/Friends";

export default function Ui() {
  const { serverId, channelId } = useParams();

  // show the friend of the guy
  if (serverId === undefined) {
    return (
      <>
        <Friends />
        <Channel />
      </>
    );
  }

  return (
    <>
      <ServerCategories serverId={serverId} />
      <Channel serverId={serverId} channelId={channelId} />
    </>
  );
}
