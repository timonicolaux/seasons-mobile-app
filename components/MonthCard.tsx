import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const MonthCard = ({ id, name }: Month) => {
  return (
    <Link href={`/months/${name}`} asChild>
      <TouchableOpacity>
        <Text>{name}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({});

export default MonthCard;
