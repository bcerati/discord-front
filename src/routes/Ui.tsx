import Channels from "../components/channels/Channels";
import { useParams } from "react-router-dom";

import Channel from "../components/channels/Channel";
import Friends from "../components/friends/Friends";

export default function Ui() {
  const { serverId } = useParams();

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
      <Channels serverId={serverId} />
      <Channel />
    </>
  );
}
