import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import ServerList from "./components/servers/ServerList";
import Ui from "./routes/Ui";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Ui />} />
          <Route path="server/:serverId" element={<Ui />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

function Layout() {
  return (
    <div className="flex h-screen text-gray-100">
      <ServerList />

      <Outlet />
    </div>
  );
}
