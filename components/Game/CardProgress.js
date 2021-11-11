import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";

const CardProgress = ({totalQuestionLength, currentQuestionIndex, progress}) => {
    const [componentHeight, setComponentHeight] = useState(0);
    const setHeight = (event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        setComponentHeight(height)
    }
  return (
    <View style={styles.container} onLayout={(event) => setHeight(event)} >
      <View style={{
          position:'absolute',
          top:-35,
          bottom:0,
          right:0,
          left:-9,
          width:40,
          height:40,
          alignItems:'center',
          justifyContent:'center'
      }}>
        <Text style={{
            color:'white',
            fontWeight:'800'
        }}>{currentQuestionIndex}/{totalQuestionLength}</Text>
      </View>

        {
            progress?.slice(0).reverse().map((item, index)=>{
                return(
                    <View key={index} style={{
                        backgroundColor: item ? '#00C851' : '#ff4444',
                        width:24,
                        height:(componentHeight - 30)/totalQuestionLength,
                        margin:1,
                        borderRadius:4

                    }}/>
                )
            })
        }

     
          

   
      
    </View>
  );
};

export default CardProgress;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: "#5d21b7",
    marginTop: 40,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "#9a5cf5",
    justifyContent:'flex-end',
  },
});
