import { useState } from "react";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Incidentes from "../pages/Incidentes/Incidentes";

export default function AppNavigator() {

  const [screen, setScreen] = useState("login");

  switch (screen) {

    case "dashboard":
      return <Dashboard setScreen={setScreen} />;

    case "incidentes":
      return <Incidentes setScreen={setScreen} />;

    default:
      return <Login setScreen={setScreen} />;

  }

}
