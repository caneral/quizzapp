import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Question = ({question}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{question}</Text>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginHorizontal:10,
    },
    questionText:{
        fontWeight:'800'
    }
})
