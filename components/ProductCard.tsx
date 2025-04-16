import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProductCard = () => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.image}></View>
      <Text style={styles.text}>ProductCard</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    alignSelf: "center",
    height: 150,
    width: 120,
    margin: 20,
  },
  image: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#4287f5",
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  text: { textAlign: "center", fontWeight: "bold" },
});

export default ProductCard;
