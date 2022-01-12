import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import MaskedView from '@react-native-community/masked-view';
import {colors} from '../../constants/colors';
import createStyles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AppBottomTabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  const styles = useMemo(() => createStyles(), []);
  const gradientColors = [colors.DARK_2, '#08080a'];
  return (
    <LinearGradient style={styles.size} colors={gradientColors}>
      <View style={styles.tabsWarper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const focused_BG = [colors.LIGHT_ORANGE, colors.ORANGE];
          const unFocused_BG = ['#707081', '#31333b'];
          const name = route.name;
          let icon = 'home';

          if (name === 'FavouriteScreen') {
            icon = 'heart';
          } else if (name === 'SearchScreen') {
            icon = 'search';
          } else if (name === 'MapScreen') {
            icon = 'location';
          } else if (name === 'ProfileScreen') {
            icon = 'person';
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}>
              <MaskedView
                maskElement={
                  <Icon name={icon} color={colors.BLACK} size={40} />
                }>
                <LinearGradient
                  colors={isFocused ? focused_BG : unFocused_BG}
                  style={styles.gradient}
                  start={{x: 0.0, y: 0.5}}
                  end={{x: 0.5, y: 1.0}}
                  locations={[0.1, 1.0]}
                />
              </MaskedView>
            </TouchableOpacity>
          );
        })}
      </View>
    </LinearGradient>
  );
}
