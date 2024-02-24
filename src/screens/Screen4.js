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

const Screen4 = () => {
  const [smoking, setSmoking] = useState("");
  const [drinking, setDrinking] = useState("");
  const [eating, setEating] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/Screen4.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.screenNumberText}>04</Text>
        <View style={{marginTop:'60%'}} >

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Smoking</Text>
          <Picker
            style={styles.dropdown}
            selectedValue={smoking}
            onValueChange={(itemValue) => setSmoking(itemValue)}
          >
            <Picker.Item label="Choose one" value="" />
            <Picker.Item label="Regularly" value="Regularly" />
            <Picker.Item label="Occasionally" value="Occasionally" />
            <Picker.Item label="Non-Smoker" value="Non-Smoker" />
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Drinking</Text>
          <Picker
            style={styles.dropdown}
            selectedValue={drinking}
            onValueChange={(itemValue) => setDrinking(itemValue)}
          >
            <Picker.Item label="Choose One" value="" />
            <Picker.Item label="Regularly" value="Regularly" />
            <Picker.Item label="Occasionally" value="Occasionally" />
            <Picker.Item label="Non-Drinker" value="Non-Drinker" />
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eating</Text>
          <Picker
            style={styles.dropdown}
            selectedValue={eating}
            onValueChange={(itemValue) => setEating(itemValue)}
          >
            <Picker.Item label="Choose One" value="" />
            <Picker.Item label="Vegetarian" value="Vegetarian" />
            <Picker.Item label="Non-Vegetarian" value="Non-Vegetarian" />
            <Picker.Item label="Eggetarian" value="Eggetarian" />
          </Picker>
        </View>

        

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
    fontSize: 110,
    fontWeight: "bold",
    opacity: 0.2,
    marginTop: 20,
    position:'absolute',
    left:40
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

export default Screen4;
