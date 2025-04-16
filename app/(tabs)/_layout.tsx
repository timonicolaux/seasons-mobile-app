import { SplashScreen, Tabs } from "expo-router";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Boldonse-Regular": require("../../assets/fonts/Boldonse-Regular.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
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
