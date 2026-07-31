import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import DashboardHeader from "./components/DashboardHeader";
import DashboardIndicators from "./components/DashboardIndicators";
import DashboardAlerts from "./components/DashboardAlerts";
import DashboardRecent from "./components/DashboardRecent";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <DashboardHeader />
      <DashboardIndicators />
      <DashboardAlerts />
      <DashboardRecent />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
});
