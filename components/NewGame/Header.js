import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackIcon from '../BackIcon'
const Header = ({navigation}) => {
    return (
        <View style={styles.head}>
        <View style={styles.head1}>
          <View style={styles.iconPosition}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <BackIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
            <Text style={styles.h3}>Yeni Oyun</Text>
          </View>
        </View>
        <View style={styles.head2}>
          <View style={styles.username}>
            <Text style={styles.usernameText}>@caneral</Text>
          </View>
        </View>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
    head: {
        flex: 1.5,
      },
      head1: {
        flex: 0.7,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: "#7c2fcf",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        zIndex: 1,
        paddingVertical:20
        
      },
      iconPosition: {
        left: 10,
        position: "absolute",
        zIndex: 10,
      },
      text: {
        flex: 1,
        alignItems: "center",
      },
      h3: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "Noteworthy-Bold",
        color: "white",
      },
      head2: {
        flex: 1,
        backgroundColor: "#53ff8f",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center",
        alignItems: "center",
      },
      username: {
        position: "absolute",
        bottom: 5,
      },
      usernameText: {
        color: "black",
        fontSize: 16,
      },

})
