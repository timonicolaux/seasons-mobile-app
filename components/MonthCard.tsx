import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const MonthCard = ({ id, name }: Month) => {
  return (
    <Link href={`/months/${id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#D96B68",
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  text: { fontFamily: "Boldonse-Regular", fontSize: 20 },
});

export default MonthCard;
