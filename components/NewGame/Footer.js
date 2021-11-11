import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'


const { height, width } = Dimensions.get("window");

const Footer = ({navigation, newGame}) => {
    const [disableButton, setDisableButton] = useState(true);


    useEffect(() => {
      if(newGame.level !== null){
        setDisableButton(false)
      }
    }, [newGame])
    return (
        <View style={styles.bottom}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Section",{newGame})} disabled={disableButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Oyuna Başla</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    bottom: {
        flex: 1.2,
        backgroundColor: "#7c2fcf",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      
      
      button: {
        backgroundColor: "#f2923b",
        borderRadius: 32,
        paddingVertical: 14,
        paddingHorizontal: width - 300,
      },
      buttonText: {
        color: "white",
        fontFamily: "Noteworthy-Bold",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 18,
      },
})
