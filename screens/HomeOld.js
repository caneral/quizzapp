import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//icons
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            start={[1, 0.2]}
            end={[0.4, 1]}
            style={styles.background}
          />
        <Image
          style={styles.logo}
          source={require("../assets/quiz.png")}
        ></Image>

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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subContainer: {
    zIndex: 1,
    flex: 7,
    backgroundColor: "#a650ff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
    justifyContent: "center",
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
  icon: {
    fontSize: 32,
    color: "#0db8e0",
  },
  iconn: {
    position: "absolute",
    bottom: -40,
  },
  fillView: {
    position: "absolute",
    bottom: -35,
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

  col: {
    flexDirection: "column",
    alignItems: "center",
  },
  h3: {
    fontWeight: "500",
  },
  logo: {
    width: "100%",
    height: 300,
  },
  
});
