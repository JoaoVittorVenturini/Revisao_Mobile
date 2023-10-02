import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from './stack.routes';
import UsersData from "../data/UsersData";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function Routes() {
  const [user, setUser] = useState(UsersData);

  return (
    <NavigationContainer>
      <UserContext.Provider value={{user, setUser}}>
        <StackRoutes />
      </UserContext.Provider>
    </NavigationContainer>
  )
}