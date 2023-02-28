import ServerCategories from "../components/channels/ServerCategories";
import { useParams } from "react-router-dom";

import Channel from "../components/channels/Channel";
import Friends from "../components/friends/Friends";
import ServerList from "../components/servers/ServerList";

export default function Ui() {
  const { serverId, channelId } = useParams();

  // show the friend of the guy
  if (serverId === undefined) {
    return (
      <>
        <ServerList />

        <Friends />
        <Channel />
      </>
    );
  }

  return (
    <>
      <ServerList />

      <ServerCategories serverId={serverId} />
      <Channel serverId={serverId} channelId={channelId} />
    </>
  );
}
