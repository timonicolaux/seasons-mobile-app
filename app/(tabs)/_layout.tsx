import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default Layout;
