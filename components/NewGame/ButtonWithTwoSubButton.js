import React,{useState} from "react";
import { StyleSheet, Text, View, Dimensions,TouchableWithoutFeedback } from "react-native";

const { height, width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

const ButtonST = ({icon, setNewGame}) => {
  const [active, setActive] = useState(false);

  const handleState = (bool) => {
    setNewGame((prevState) => ({
      ...prevState,
      time: bool,
    }));
    setActive(bool);
  };
  return (
    <View style={styles.row}>
      <View style={styles.buttonIcon}>
          <View><Ionicons name={icon} style={styles.icon} /></View>
      </View>
      <View style={styles.subButtonView}>
        <TouchableWithoutFeedback onPress={() => handleState(true)}>
          <View style={styles.subButton(active)} >
              <Text style={styles.subButtonText}>Süreli(Aktif Değil)</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleState(false)}>
          <View style={styles.subButtonRight(active)}>
              <Text style={styles.subButtonText}>Süresiz</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default ButtonST;

const styles = StyleSheet.create({
  subButtonView:{
    flexDirection:'row',
    flex:1
  },
  subButton:(active) => ({
    backgroundColor:active === true ? "#4bf68b" : "#d4d4d4",
    flex:1,
    margin:2,
    height:75,
    alignItems:'center',
    justifyContent:'center'
  }),
  subButtonRight:(active) => ({
    backgroundColor: active === false ? "#4bf68b" : "#d4d4d4",
    flex:1,
    margin:2,
    height:75,
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:32,
    borderTopRightRadius:32,
    
  }),
  subButtonText:{
    color:'white'
  },
  row: {
    flexDirection:'row',
    borderRadius: 32,
    borderColor: "gray",
    borderWidth: 1,
    alignItems:'center',
    height:80,
    marginHorizontal:25,
    marginBottom:30
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
 
 },
  buttonText: {
    flex:1,
    color: "black",
    fontFamily: "Noteworthy",
    fontStyle: "italic",
    fontSize: 18,
  },
  buttonIcon: {
    backgroundColor: "#7c2fcf",
    height:80,
    width:80,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent:'center',
    alignItems:'center',
    marginRight:2,
    paddingStart:5

  },
  icon:{
      color:'white',
      fontSize:30,
  }
});
