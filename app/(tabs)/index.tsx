import MonthCard from "@/components/MonthCard";
import { getMonthList } from "@/services/api";
import useFetch from "@/services/useFetch";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function Index() {
  const {
    data: monthList,
    loading: monthListLoading,
    error: monthListError,
  } = useFetch(() => getMonthList());
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Calendrier de saison</Text>
      {monthListLoading ? (
        <ActivityIndicator size="large" color="" />
      ) : monthListError ? (
        <Text>Error: {monthListError?.message}</Text>
      ) : (
        <FlatList
          data={monthList}
          renderItem={({ item }) => <MonthCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      )}
    </View>
  );
}
