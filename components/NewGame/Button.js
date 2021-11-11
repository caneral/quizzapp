import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

import RNPickerSelect from "react-native-picker-select";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ icon, setNewGame }) => {

  const [selectedValue, setSelectedValue] = useState(1);

  useEffect(() => {
    savedData()
  }, [])

  const savedData = (value) => {
    setNewGame((prevState) => ({
      ...prevState,
      level: value || selectedValue,
    }));
  }

  const handleState = (value) => {
    setSelectedValue(value)
    savedData(value)
  };

  return (
    <View style={styles.row}>
      <View style={styles.buttonIcon}>
        <View>
          <Ionicons name={icon} style={styles.icon} />
        </View>
      </View>
      {/* <Text style={styles.buttonText}>Seviye 1</Text> */}
      <View style={styles.buttonText}>
          <RNPickerSelect
            onValueChange={(value) => handleState(value)}
            value={selectedValue}
            items={[
                { label: '1.Sınıf', value: 1 },
                { label: '2.Sınıf', value: 2 },
                { label: '3.Sınıf', value: 3 },
                { label: '4.Sınıf', value: 4 },
                { label: '5.Sınıf', value: 5 },
                { label: '6.Sınıf', value: 6 },
                { label: '7.Sınıf', value: 7 },
                { label: '8.Sınıf', value: 8 },
            ]}
        />
        
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderRadius: 32,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    height: 80,
    marginHorizontal: 25,
    marginBottom: 30,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonText: {
    flex: 1,
  },
  buttonIcon: {
    backgroundColor: "#7c2fcf",
    height: 80,
    width: 80,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    paddingStart: 5,
  },
  icon: {
    color: "white",
    fontSize: 30,
  },
});
