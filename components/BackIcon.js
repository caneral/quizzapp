import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackIcon = () => {
  return (
    <View style={styles.circle}>
      <Ionicons name="caret-back-outline" style={styles.icon} />
    </View>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#f2923b",
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    fontSize: 28,
    marginRight: 3,
    marginTop: 2,
  },
});
