import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import ButtonST from "./ButtonWithTwoSubButton";
import ButtonSTH from "./ButtonWithThreeSubButton";
const Contain = ({setNewGame, newGame}) => {
  return (
    <View style={styles.head3}>
      <Button icon={"speedometer"} buttonSize={"50"} setNewGame={setNewGame} />
      <ButtonST icon={"stopwatch"} buttonSize={"50"} setNewGame={setNewGame} />
      <ButtonSTH icon={"checkmark-circle"} buttonSize={"50"} setNewGame={setNewGame} />
    </View>
  );
};

export default Contain;

const styles = StyleSheet.create({
    head3: {
        flex: 5,
        backgroundColor: "white",
        marginTop: 50,
        alignItems: "center",
      },
});
