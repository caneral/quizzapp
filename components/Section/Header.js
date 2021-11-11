import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BackIcon from "../BackIcon";

const Header = ({navigation}) => {
  return (
    <View style={styles.section_one}>
      <View style={styles.iconPosition}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={styles.h3}>Oyuna Başla</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    section_one: {
        borderBottomRightRadius: 40,
        zIndex: 1,
        alignItems: "center",
        flexDirection:'row',
        paddingVertical:20
      },
      iconPosition: {
        left: 10,
        position: "absolute",
        zIndex: 10,
      },
      h3: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Noteworthy-Bold",
        color: "white",
      },
      text: {
        flex: 1,
        alignItems: "center",
      },
});
