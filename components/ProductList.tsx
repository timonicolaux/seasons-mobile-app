import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductList = ({
  title,
  data,
  backgroundImage,
  monthDetailLoading,
  monthDetailError,
}: ProductList) => {
  return (
    <>
      <View style={styles.categoryTitleContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="contain"
          style={styles.backgroundImage}
        >
          <Text style={styles.categoryTitle}>{title}</Text>
        </ImageBackground>
      </View>
      <View style={styles.categoryListContainer}>
        {monthDetailLoading ? (
          <ActivityIndicator size="large" color="" />
        ) : monthDetailError ? (
          <Text>Error: {monthDetailError?.message}</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <ProductCard {...item} />}
            keyExtractor={(item: any) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 16,
            }}
            scrollEnabled={false}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  categoryTitleContainer: { width: "100%" },
  categoryTitle: {
    textAlign: "center",
    fontFamily: "Roboto_SemiCondensed-ExtraBoldItalic",
    color: "white",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 3,
  },
  categoryListContainer: {},
  backgroundImage: { width: "100%", height: 100, justifyContent: "center" },
});

export default ProductList;
