import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProductCard = ({ id, name, image_link, category }: Product) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image source={{ uri: image_link }} style={styles.image}></Image>
      <Text style={styles.text}>{name}</Text>
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
