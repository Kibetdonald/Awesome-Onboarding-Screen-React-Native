import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function OnboardingItems({ item }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.imageStyle, width]} />
      <View style={{marginTop: height/6}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    alignItems: "center",
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#FF725E",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
