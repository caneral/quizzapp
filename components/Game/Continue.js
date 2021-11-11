import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Continue = ({continueActive}) => {
  return (
      <View style={styles.container(continueActive)} >
        <Text style={styles.continueText}>DEVAM ET</Text>
      </View>
  );
};

export default Continue;

const styles = StyleSheet.create({
  container:(continueActive) => ({
    alignItems: "center",
    backgroundColor: continueActive === true ? "#ff865f": "#00C851",
    marginHorizontal: 90,
    marginVertical: 20,
    borderRadius: 50,
    paddingVertical: 10,
  }),
  continueText: {
    color: "white",
    fontWeight: "800",
  },
});
