import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Chip, Button } from "react-native-paper";
import bg from "../../assets/bgs5.png";

const UserInterests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleNext = () => {
    // Handle navigation to the next screen or any other action
    console.log("Selected Interests:", selectedInterests);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headtxt}> Select Your Interests </Text> */}
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.snum}>05</Text>

        <View style={styles.chipsContainer}>
          {[
            "Dancing",
            "Music",
            "Cooking",
            "Singing",
            "Teaching",
            "Coding",
            "Reading",
            "Gaming",
            "Sports",
            "Art",
            "Pets Lover",
            "Movies",
            "Web Series",
            "Cricket",
            "Tennis",
            "Football",
            "Horror",
            "Comedy",
            "Action",
            "Romance",
          ].map((interest, index) => (
            <Chip
              key={index}
              style={
                selectedInterests.includes(interest)
                  ? styles.selectedChip
                  : styles.chip
              }
              onPress={() => toggleInterest(interest)}
            >
              {interest}
            </Chip>
          ))}
        </View>
        {/* <Button mode="contained" onPress={handleNext} style={styles.nextButton}>
        Next
      </Button> */}
        <TouchableOpacity onPress={handleNext}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Go to Next</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#1E1E1E", // Dark background color
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  headtxt: {
    fontSize: 25,
    color: "white",
    marginTop: 30,
  },
  snum: {
    color: "white",
    fontSize: 130,
    fontWeight: "bold",
    opacity: 0.2,
    marginTop: -20,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
    gap: 10,
  },
  chip: {
    margin: 7,
    backgroundColor: "#424242", // Dark chip background color
  },
  selectedChip: {
    margin: 5,
    backgroundColor: "#2196F3", // Selected chip background color
  },
  buttonContainer: {
    backgroundColor: "gray",
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserInterests;
