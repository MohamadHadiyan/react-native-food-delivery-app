import React, {useMemo} from 'react';
import {View} from 'react-native';
import {colors} from '../../constants/colors';
import createStyles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, Text} from 'react-native-elements';

export default function AppDrawer({
  state,
  navigation,
}: DrawerContentComponentProps) {
  const styles = useMemo(() => createStyles(), []);
  const gradientColors = ['#41414e', '#0c0c0f'];
  return (
    <LinearGradient style={styles.container} colors={gradientColors}>
      <View style={styles.profileBox}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.usernameText}>Arash</Text>
        <Text style={{color: colors.WHITE}}>example@gmail.com</Text>
      </View>
      <DrawerContentScrollView>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const name = route.name;
          const color = {
            color: focused ? colors.ORANGE : colors.GREY_4,
            textShadowColor: focused ? colors.ORANGE : colors.WHITE,
          };
          let icon = 'home-outline';

          if (name === 'Business') {
            icon = 'business-outline';
          } else if (name === 'Driver') {
            icon = 'bicycle-outline';
          } else if (name === 'Payment') {
            icon = 'card-outline';
          } else if (name === 'Promotions') {
            icon = 'radio-outline';
          } else if (name === 'Settings') {
            icon = 'settings-outline';
          }

          return (
            <View key={index.toString()}>
              <DrawerItem
                label={() => (
                  <Text style={[styles.label, color]}>{route.name}</Text>
                )}
                icon={() => (
                  <Icon
                    name={icon}
                    size={25}
                    color={focused ? colors.ORANGE : colors.GREY_4}
                  />
                )}
                onPress={() => navigation.navigate(route.name)}
              />
            </View>
          );
        })}
      </DrawerContentScrollView>
      <DrawerItem
        style={styles.logoutItem}
        label={() => <Text style={styles.label}>Log out</Text>}
        icon={() => (
          <Icon name={'log-out-outline'} size={25} color={colors.GREY_4} />
        )}
        onPress={() => console.log('go')}
      />
    </LinearGradient>
  );
}
