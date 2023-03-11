import { Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Ui from "./routes/Ui";
import Login from "./routes/Login";
import UserContext from "./contexts/UserContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider
        value={{
          email: "contact@boris-cerati.fr",
          firstName: "Boris",
          lastName: "Cerati",
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Ui />} />
            <Route path="server/:serverId" element={<Ui />} />
            <Route path="server/:serverId/:channelId" element={<Ui />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

function Layout() {
  return (
    <div className="flex h-screen text-gray-100">
      <Outlet />
    </div>
  );
}
