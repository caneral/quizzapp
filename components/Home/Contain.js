import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Contain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        start={[1, 0.2]}
        end={[0.4, 1]}
        style={styles.background}
      />
      <Image style={styles.logo} source={require("../../assets/quiz.png")} />
   
      
    </View>
  );
};

export default Contain;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#a650ff",
  },
  logo: {
    width: "100%",
    height: 300,
  },
  
});
