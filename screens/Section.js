import React,{useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Box from "../components/Box";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackIcon from "../components/BackIcon";
import  Header from '../components/Section/Header'
import SubHeader from "../components/Section/SubHeader";
import Contain from "../components/Section/Contain";
import data from "../data/QuizData";

const Section = ({ navigation, route }) => {
  const {level, time, optionCount} = route.params.newGame
  const allQuestions = data;
 
    const questionCount = allQuestions.filter(item => {
        return(
          item.level === level
        )
    }).length

    const questions = allQuestions.filter(item => {
      return(
        item.level === level
      )
    })

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <SubHeader level={level} questionCount={questionCount} />
      <Contain navigation={navigation} questionCount={questionCount} questions={questions} />
    </SafeAreaView>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7c2fcf",
  },

});
