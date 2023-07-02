import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewOnBoarding");
    } catch (err) {
      console.log("Error @clearOnBoarding:", err);
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={clearOnBoarding}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
