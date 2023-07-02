import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import eLearningData from "../Data/eLearningData";
import OnboardingItems from "../components/OnboardingItems";
import PaginationComponent from "../components/PaginationComponent";
import Button from "../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null)
  const viewCurrentItem = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < eLearningData.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      try {
        await AsyncStorage.setItem('@viewOnBoarding', 'true');
      } catch (err) {
        console.log('Error @setItem:', err);
      }
    }
  };
  
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={eLearningData}
        renderItem={({ item }) => <OnboardingItems item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewCurrentItem}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <PaginationComponent data={eLearningData} scrollX={scrollX}/>
      <Button scrollTo={scrollTo} percentage={(currentIndex + 1) * (100/eLearningData.length)}/>
    </View>
  );
}
