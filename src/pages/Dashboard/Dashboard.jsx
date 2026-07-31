import Layout from "../../components/Layout";

import DashboardIndicators from "./components/DashboardIndicators";
import DashboardAlerts from "./components/DashboardAlerts";
import DashboardRecent from "./components/DashboardRecent";

export default function Dashboard() {
  return (
    <Layout>

      <DashboardIndicators />

      <DashboardAlerts />

      <DashboardRecent />

    </Layout>
  );
}
