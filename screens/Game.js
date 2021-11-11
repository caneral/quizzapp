import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from "../components/BackIcon";
import Card from "../components/Game/Card";
import Header from "../components/Game/Header";
import Continue from "../components/Game/Continue";
import CardProgress from "../components/Game/CardProgress";
const Game = ({ navigation, route }) => {
  const allQuestions = route.params.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionsSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [continueActive, setContinueActive] = useState(true);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [progress, setProgress] = useState([]);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]?.correct_option;
    setCurrentOptionsSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      setScore(score + 10);
      setProgress((oldArray) => [...oldArray, true]);
    } else {
      setProgress((oldArray) => [...oldArray, false]);
    }
    setContinueActive(false);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionsSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setContinueActive(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 12, marginTop: 12, flex: 1 }}>
        <Header navigation={navigation} score={score} />
        <View
          style={{
            flex: 5,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              opacity: 0,
            }}
          >
            <CardProgress />
          </View>
          <Card
            allQuestions={allQuestions}
            currentQuestionIndex={currentQuestionIndex}
            isOptionsDisabled={isOptionsDisabled}
            correctOption={correctOption}
            currentOptionSelected={currentOptionSelected}
            validateAnswer={validateAnswer}
          />
          <CardProgress
            totalQuestionLength={allQuestions.length}
            currentQuestionIndex={currentQuestionIndex + 1}
            progress={progress}
          />
        </View>

        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback
            onPress={() => handleNext()}
            disabled={continueActive}
          >
            <View>
              <Continue continueActive={continueActive} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#7c2fcf",
                borderWidth: 4,
                borderColor: "#fedf9a",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "50%",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  fontWeight: "700",
                }}
              >
                OYUN SKORU
              </Text>
              <View
                style={{
                  width: 130,
                  height: 50,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  marginTop: 7,
                  marginBottom: 25,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 40,
                    fontWeight: "800",
                  }}
                >
                  {score}
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <BackIcon />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7c2fcf",
  },
});
