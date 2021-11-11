import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubHeader = ({level, questionCount}) => {
  return (
    <View style={styles.section_two}>
      <View style={styles.level}>
        <Text style={styles.levelText}>Seviye {level}</Text>
        <Text style={styles.levelText}>1/{questionCount}</Text>
      </View>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
    section_two: {
        backgroundColor: "white",
        borderRadius: 32,
        height: 40,
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: "center",
      },
      level: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
      },
      levelText: {
        fontSize: 18,
        fontWeight: "600",
      },
});
