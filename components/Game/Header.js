import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../BackIcon";

const Header = ({ navigation, score }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <BackIcon />
      </TouchableOpacity>
      <View style={styles.score}>
          <Text style={styles.scoreText}>PUAN</Text>
          <Text style={styles.scoreNumber}>{score}</Text>
      </View>
      <View style={{opacity:0}}>
      <BackIcon/>

      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
  },
  score: {
      alignItems:'center'
  },
  scoreText: {
    color:'white',
    fontWeight:'900',
    opacity:0.5
  },
  scoreNumber:{
      marginTop:6,
      color:'white',
      fontSize:24,
      fontWeight:'900'
  }
});
