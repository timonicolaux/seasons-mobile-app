import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { getMonthDetail } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import ProductList from "@/components/ProductList";

const backgroundImageFruit = require("../../assets/images/gribouilli1.png");
const backgroundImageVegetable = require("../../assets/images/gribouilli2.png");

const HEADER_HEIGHT = 120;

const MonthDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: monthDetail,
    loading: monthDetailLoading,
    error: monthDetailError,
  } = useFetch(() => getMonthDetail(parseInt(id as string)));
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.monthHeaderContainer, { height: HEADER_HEIGHT }]}>
        <LinearGradient
          colors={["#8a8a8a", "#f7f7f7"]}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <Text style={styles.mainTitle}>{monthDetail?.name}</Text>
      </View>
      {/* <View style={styles.monthInfoContainer}> */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        showsVerticalScrollIndicator={false}
      >
        <ProductList
          title="Fruits"
          data={monthDetail?.products?.categories.fruit ?? []}
          backgroundImage={backgroundImageFruit}
          monthDetailLoading={monthDetailLoading}
          monthDetailError={monthDetailError}
        />
        <ProductList
          title="Légumes"
          data={monthDetail?.products?.categories.légume ?? []}
          backgroundImage={backgroundImageVegetable}
          monthDetailLoading={monthDetailLoading}
          monthDetailError={monthDetailError}
        />
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  monthHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4287f5",
    overflow: "hidden",
  },
  //   monthInfoContainer: {
  //     flex: 2,
  //     alignItems: "center",
  //     backgroundColor: "#D96B68",
  //   },
  scrollContainer: { flex: 1, zIndex: 1 },
  mainTitle: { fontFamily: "Boldonse-Regular", fontSize: 50 },
});

export default MonthDetails;
