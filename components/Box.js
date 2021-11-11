import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("window");

const Box = ({ number, navigation, questions }) => {
  return (
     
    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Game',{questions})}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffff", "#7c2fcf"]}
        start={[1, 0.1]}
        end={[0, 0.5]}
        style={styles.background}
      >
          <Text style={styles.boxText}>{number}</Text>
      </LinearGradient>
    </TouchableOpacity>
    
  );
};

export default Box;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 1,
    margin: 6,
    height: 100,
    borderWidth: 2,
    borderColor: "#fedf9a",
    borderRadius: 14,
    shadowColor: "yellow",
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  boxText: {
    color: "white",
    fontFamily: "Verdana-BoldItalic",
    fontSize: 40,
  },
});
