import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { getMonthList } from "@/services/api";
import useFetch from "@/services/useFetch";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ProductCard from "@/components/ProductCard";

const MonthDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: monthList,
    loading: monthListLoading,
    error: monthListError,
  } = useFetch(() => getMonthList());
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.monthHeaderContainer}>
        <LinearGradient
          colors={["#8a8a8a", "#f7f7f7"]}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <Text style={styles.mainTitle}>{id}</Text>
      </View>
      <View style={styles.monthInfoContainer}>
        <View style={styles.categoryTitleContainer}>
          <Text style={styles.categoryTitle}>Légumes</Text>
        </View>
        <View style={styles.categoryListContainer}>
          {monthListLoading ? (
            <ActivityIndicator size="large" color="" />
          ) : monthListError ? (
            <Text>Error: {monthListError?.message}</Text>
          ) : (
            <FlatList
              data={monthList}
              renderItem={({ item }) => <ProductCard />}
              keyExtractor={(item: any) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: 16,
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  monthHeaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4287f5",
  },
  monthInfoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D96B68",
  },
  mainTitle: { fontFamily: "Boldonse-Regular", fontSize: 50 },
  categoryTitleContainer: {},
  categoryTitle: { textAlign: "center" },
  categoryListContainer: {},
});

export default MonthDetails;
