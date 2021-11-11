import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from "react-native";
import Box from "../Box";
const numColumns = 3;

import { sections } from "../../data/sections";
import BackIcon from "../BackIcon";

const Contain = ({ navigation,questionCount, questions }) => {
  const [showModal, setShowModal] = useState(false);

  const filterData = (item) => {
   return questions.slice((item-1)*12,item*12)
  }

  useEffect(() => {
    if(questionCount === 0 || questionCount < 0 ){
      setShowModal(true)
    }
  }, [])

  const dataSection = () => {
    if(questionCount <= 12 && questionCount !== 0){
        return formatData(sections.slice(0,1),numColumns);
    }else if(questionCount > 12){
        const mod = (questionCount %= 12);
        return formatData(sections.slice(0,mod+1), numColumns);
    }
  }

  const formatData = (dataList, numColumns) => {
      const totalRows = Math.floor(dataList.length / numColumns)
      let totalLastRow = dataList.length - (totalRows * numColumns) 

      while(totalLastRow !== 0 && totalLastRow !== numColumns){
        dataList.push({key: 'blank', empty: true})
        totalLastRow++
      }
      return dataList
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSection()}
        numColumns={numColumns}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item, index }) => {
          if(item.empty){
            return <View style={[styles.itemStyle, styles.itemInvisible]}/>
          }
          return (
            
              <Box number={item.key} navigation={navigation} questions={filterData(item.key)} />
          );
        }}
      />
      {/* Soru Yok  */}
      <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
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
                backgroundColor: "white",
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "50%",
                marginTop:20
                
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 30,
                  fontWeight: "700",
                }}
              >
                Soru Bulunamadı :(
              </Text>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <BackIcon />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
};

export default Contain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7c2fcf",
    marginHorizontal:15
  },
  itemInvisible: {
    backgroundColor:'transparent'
  },
  itemStyle: {
    flex: 1,
    margin: 6,
    height: 100,
  },
});
