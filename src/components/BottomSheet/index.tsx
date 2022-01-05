import React, {useMemo} from 'react';
import {Dimensions, StyleProp, ViewStyle} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import createStyles from './styles';

interface IMenuProps {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  bottomValue?: number;
  topValue?: number;
  canOverDown?: boolean;
  overDown?: number;
}

const {height} = Dimensions.get('window');

const BottomSheet = ({
  children,
  containerStyle,
  bottomValue = height - 200,
  topValue = height / 2 - 100,
  overDown = 30,
  canOverDown,
}: IMenuProps) => {
  const styles = useMemo(() => createStyles(), []);

  const top = useSharedValue(bottomValue);

  const rStyle = useAnimatedStyle(() => ({
    top: top.value,
  }));

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startTop: number}
  >({
    onStart: (_, context) => {
      context.startTop = top.value;
    },
    onActive: (event, context) => {
      const y = event.translationY;
      const overBottom = y + context.startTop > bottomValue + overDown;
      const overUp = y + context.startTop > topValue;

      if (canOverDown && overUp) {
        top.value = y + context.startTop;
      }

      if (overUp && !overBottom) {
        top.value = y + context.startTop;
      }
    },
    onEnd: event => {
      const y = event.translationY;

      const pullDown = y + topValue > topValue + 100;
      const pullUp = y > -100 && y < 0 && y + top.value > topValue;

      const overBottom =
        y < 100 && y > 0 && y + top.value > bottomValue + overDown;

      const over = top.value > bottomValue;

      const springOptions = {
        damping: 40,
        stiffness: 400,
        overshootClamping: true,
        restSpeedThreshold: 0.1,
        restDisplacementThreshold: 0.1,
      };

      if (pullDown || over || pullUp || overBottom) {
        top.value = withSpring(bottomValue, springOptions);
      } else {
        top.value = withSpring(topValue, springOptions);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.bottomSheet, containerStyle, rStyle]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default BottomSheet;
