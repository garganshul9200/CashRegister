import React, { useRef } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';
import { width } from '../styles/responsiveSize';

const MainStack = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: (e, gesture) => {
        // Check if the gesture is to the right and exceeds a certain threshold
        if (gesture.moveX > width-20) { // Threshold changed to 300 for the right end
          // Perform payment action
          console.log('Payment triggered!');
          // You can trigger payment here
        } else {
          // Reset position
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      }
    })
  ).current;

  // Define color gradient
  const color1 = '#FF5733';
  const color2 = '#33FFA8';

  // Interpolate colors based on position
  const bgColor = pan.x.interpolate({
    inputRange: [0, width], // Change 300 to the width of your container
    outputRange: [color1, color2],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View
      style={{
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: bgColor
      }}
    >
      <View style={{ width: 130, height: 50 }}>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }],
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          {...panResponder.panHandlers}
        >
          <Text style={{ color: 'white' }}>Slide to Pay ➔</Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default MainStack;
