import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import React from "react";

const ProductCard = ({ id, name, image_link, category }: Product) => {
  return (
    <Pressable style={styles.wrapper}>
      {({ pressed }) => (
        <>
          <View style={styles.mainContainer}>
            <Image source={{ uri: image_link }} style={styles.image} />
            {pressed && (
              <View
                style={[
                  StyleSheet.absoluteFill,
                  { backgroundColor: "rgba(0,0,0,0.2)" },
                ]}
              />
            )}
          </View>
          <Text style={styles.text}>{name}</Text>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    margin: 20,
  },
  mainContainer: {
    width: 120,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  text: { marginTop: 5, textAlign: "center", fontWeight: "bold" },
});

export default ProductCard;
