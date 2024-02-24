import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Screen3 = () => {
  const [education, setEducation] = useState("");
  const [profession, setProfession] = useState("");
  const [workplace, setWorkplace] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/Screen3.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.screenNumberText}>03</Text>
        <View style={{marginTop:'60%'}} >

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Picker
            style={styles.dropdown}
            selectedValue={education}
            onValueChange={(itemValue) => setEducation(itemValue)}
          >
            <Picker.Item label="Select Education" value="" />
            <Picker.Item label="Bachelor's Degree" value="Bachelor's Degree" />
            <Picker.Item label="Master's Degree" value="Master's Degree" />
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profession</Text>
          <Picker
            style={styles.dropdown}
            selectedValue={profession}
            onValueChange={(itemValue) => setProfession(itemValue)}
          >
            <Picker.Item label="Select Profession" value="" />
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Professional" value="Professional" />
          </Picker>
        </View>

        {profession === "Professional" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Place</Text>
            <Picker
              style={styles.dropdown}
              selectedValue={workplace}
              onValueChange={(itemValue) => setWorkplace(itemValue)}
            >
              <Picker.Item label="Select Workplace" value="" />
              <Picker.Item label="Company 1" value="Company 1" />
              <Picker.Item label="Company 2" value="Company 2" />
            </Picker>
          </View>
        )}
        {profession === "Student" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education Place</Text>
            <Picker
              style={styles.dropdown}
              selectedValue={workplace}
              onValueChange={(itemValue) => setWorkplace(itemValue)}
            >
              <Picker.Item label="Select Workplace" value="" />
              <Picker.Item label="College 1" value="College 1" />
              <Picker.Item label="College 2" value="College 2" />
            </Picker>
          </View>
        )}

        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.goButtonText}>Next</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    padding: 40,
  },
  screenNumber: {
    position: "absolute",
    top: 70,
    right: 60,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 10,
    borderRadius: 5,
  },
  screenNumberText: {
    color: "white",
    fontSize: 130,
    fontWeight: "bold",
    opacity: 0.2,
    marginTop: 15,
    position:'absolute',
    right:50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    borderRadius: 50,
    marginBottom: 10,
  },
  goButton: {
    backgroundColor: "#BCB0F5",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  goButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Screen3;
