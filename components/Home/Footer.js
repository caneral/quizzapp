import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.fillView}>
          <View style={styles.fill}></View>
        </View>
        <TouchableOpacity
          style={styles.iconn}
          onPress={() => navigation.navigate("NewGame")}
        >
          <Ionicons name="play-circle-sharp" style={styles.bigIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Ionicons name="trending-up" style={styles.icon} />
            <Text style={styles.h3}>Sıralama</Text>
          </View>

          <View style={styles.col}>
            <Ionicons name="cog" style={styles.icon} />
            <Text style={styles.h3}>Ayarlar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fillView: {
    position: "absolute",
    top: -35,
    left: -4,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    backgroundColor: "white",
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  bigIcon: {
    fontSize: 70,
    color: "#f2923b",
  },
  iconn: {
    position: "absolute",
    top: -40,
  },
  bottom: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 64,
    paddingVertical: 5,
  },
  col: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: 32,
    color: "#0db8e0",
  },
  h3: {
    fontWeight: "500",
  },
});
