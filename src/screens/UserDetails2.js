import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput, ToggleButton, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import bgs2 from "../../assets/bgs2.png";

const data = [
  { label: "Delhi", value: "1" },
  { label: "Bangalore", value: "2" },
  { label: "Hydrabad", value: "3" },
  { label: "Mumbai", value: "4" },
];
// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

import React from "react";

export default function UserDetails2() {
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState();

  const [date, setDate] = useState(new Date(1598051730000));
  const [finaldate, setFinaldate] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setFinaldate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    console.log("pressed");
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [height, setHeight] = useState("");
  const handleHeightChange = (input) => {
    // You can add validation or formatting logic here if needed
    setHeight(input);
  };

  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.fullmain}>
      <ImageBackground source={bgs2} resizeMode="cover" style={styles.image}>
        <Text style={styles.snum}>02</Text>
        <View style={{ marginTop: 40 }}>
          <TextInput
            // label="Name"
            placeholder="Name"
            value={name}
            backgroundColor="#171717"
            cursorColor="white"
            textColor="white"
            underlineColor="white"
            activeUnderlineColor="white"
            labelStyle={{ color: "white" }}
            onChangeText={(text) => setName(text)}
          />

          <ToggleButton.Row
            style={styles.iconContain}
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton
              style={[
                styles.icon,
                value == "male" && { backgroundColor: "white" },
              ]}
              icon="gender-male"
              size={40}
              value="male"
            />
            <ToggleButton
              style={[
                styles.icon,
                value == "female" && { backgroundColor: "white" },
              ]}
              icon="gender-female"
              size={40}
              value="female"
            />
          </ToggleButton.Row>
          <Button
            style={{ marginTop: 32 }}
            mode="outlined"
            labelStyle={{ color: "white" }}
            onPress={() => showDatepicker()}
          >
            {finaldate ? finaldate.toLocaleString() : "Select D.O.B"}
          </Button>
          {/* <Text style={{ color: "white" }}>{date && date.toLocaleString()}</Text> */}
          {show && (
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>

        {/* <Text style={styles.label}>Enter Height (in inches):</Text> */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Height in inches"
          backgroundColor="#171717"
          cursorColor="white"
          textColor="white"
          underlineColor="white"
          activeUnderlineColor="white"
          labelStyle={{ color: "white" }}
          value={height}
          onChangeText={handleHeightChange}
        />

        {/* <Text style={styles.label}>Choose or Enter Location:</Text> */}
        <View>
          {/* {renderLabel()} */}
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select Location" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Entypo name="location-pin" size={20} color="gray" />
            )}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Go to Next</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  fullmain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  snum: {
    color: "white",
    fontSize: 130,
    fontWeight: "bold",
    opacity: 0.2,
    marginTop: -20,
  },
  icon: {
    width: 160,
    height: 60,
    borderColor: "white",
  },
  iconContain: {
    marginTop: 32,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color: "white",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    // borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 32,
  },

  dropdown: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 32,
    // backgroundColor: "white", // Default background color
  },
  placeholderStyle: {
    color: "gray", // Placeholder text color
  },
  selectedTextStyle: {
    color: "gray", // Selected text color
  },
  inputSearchStyle: {
    // Style for search input if search is enabled
    color: "black", // Search input text color
  },
  iconStyle: {
    color: "black", // Icon color
  },

  buttonContainer: {
    backgroundColor: "gray",
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 32,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
