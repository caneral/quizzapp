import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Option = ({ option, correctOption, currentOptionSelected }) => {
  return (
    <View style={styles.button(option, correctOption, currentOptionSelected)}>
      <Text style={styles.option(option, correctOption, currentOptionSelected)}>
        {option}
      </Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  button: (option, correctOption, currentOptionSelected) => (
    {
      width: "100%",
      height: 40,
      backgroundColor:
        option == correctOption
          ? "#00C851"
          : option == currentOptionSelected
          ? "#ff4444"
          : "#eaeaea",
      borderRadius: 8,
      shadowColor: "black",
      shadowOpacity: 0.1,
      shadowRadius: 1,
      marginVertical: 8,
      justifyContent: "center",
      alignItems: "center",
    }
  ),
  option: (option, correctOption, currentOptionSelected) => ({
    fontWeight: "700",
    color:
      option == correctOption
        ? "white"
        : option == currentOptionSelected
        ? "white"
        : "black",
  }),
});
