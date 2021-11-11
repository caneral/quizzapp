import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Question from "./Question";
import Option from "./Option";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const Card = ({
  allQuestions,
  currentQuestionIndex,
  isOptionsDisabled,
  correctOption,
  currentOptionSelected,
  validateAnswer,
}) => {
  return (
    <View style={styles.card}>
      <Question question={allQuestions[currentQuestionIndex]?.question} />
      <View style={styles.buttons}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => {
         return <TouchableWithoutFeedback
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={index}
          >
            <View>
              <Option
                option={option}
                correctOption={correctOption}
                currentOptionSelected={currentOptionSelected}
              />
            </View>
          </TouchableWithoutFeedback>;
        })}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginTop: 40,
    borderRadius: 24,
    flex: 10,
  },
  buttons: {
    marginHorizontal: 20,
    marginBottom: 40,
    justifyContent: "flex-end",
    flex: 1,
  },
});
