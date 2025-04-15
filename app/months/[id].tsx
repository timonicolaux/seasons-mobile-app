import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MonthDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MonthDetails;
