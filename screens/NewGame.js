import React,{useState} from "react";
import {
  StyleSheet,
  View,
} from "react-native";


import BackIcon from "../components/BackIcon";
import Header from "../components/NewGame/Header";
import Contain from "../components/NewGame/Contain";
import Footer from "../components/NewGame/Footer";

const NewGame = ({ navigation }) => {
  const [newGame, setNewGame] = useState({
    level:null,
    time:false,
    optionCount:4
  });
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Contain setNewGame={setNewGame}/>
      <Footer navigation={navigation} newGame={newGame}/>
    </View>
  );
};

export default NewGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  
  
 
  
 
  
  
});
