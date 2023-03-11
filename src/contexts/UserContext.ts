import { createContext } from "react";
import type UserType from "../types/User";

const userContext = createContext<UserType | null>(null);

export default userContext;
