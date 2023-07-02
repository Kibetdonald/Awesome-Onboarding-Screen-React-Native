import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import React from 'react'

export default function PaginationComponent({data, scrollX}) {
    const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 64, marginTop: 25}}>
      {
        data.map((_, i) =>{
            const inputRange = [(i-1) * width, i * width, (i+1) * width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp'
            })
            const dotOpacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
            })
            return <Animated.View style={[styles.dot, {width: dotWidth, opacity: dotOpacity}]} key={i.toString()}/>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    dot:{
        height: 8,
        borderRadius: 50,
        backgroundColor: '#FF725E',
        marginHorizontal: 8,

    }

})