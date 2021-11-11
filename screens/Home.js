import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Contain from '../components/Home/Contain'
import Footer from '../components/Home/Footer'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Contain />
           <Footer navigation={navigation}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
      }
})
