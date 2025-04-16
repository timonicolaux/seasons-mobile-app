import MonthCard from "@/components/MonthCard";
import { getMonthList } from "@/services/api";
import useFetch from "@/services/useFetch";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const backgroundImage = require("../../assets/images/background.jpg");
const logo = require("../../assets/images/logo-transparent.png");

export default function Index() {
  const {
    data: monthList,
    loading: monthListLoading,
    error: monthListError,
  } = useFetch(() => getMonthList());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.fadeTop}
        pointerEvents="none"
      />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={styles.monthListContainer}>
          {monthListLoading ? (
            <ActivityIndicator size="large" color="" />
          ) : monthListError ? (
            <Text>Error: {monthListError?.message}</Text>
          ) : (
            <FlatList
              data={monthList}
              renderItem={({ item }) => <MonthCard {...item} />}
              keyExtractor={(item: any) => item.id.toString()}
              contentContainerStyle={{
                paddingVertical: 16,
              }}
            />
          )}
        </View>
      </ImageBackground>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        style={styles.fadeBottom}
        pointerEvents="none"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  monthListContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: { flex: 1, justifyContent: "center" },
  logoContainer: { alignItems: "center" },
  logo: { width: 200, height: 200, resizeMode: "contain" },
  fadeTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
  },
  fadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 1,
  },
});
