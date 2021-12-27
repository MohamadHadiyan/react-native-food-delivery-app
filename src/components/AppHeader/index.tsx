import React, {useMemo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Badge, Button, Header, Text} from 'react-native-elements';
import createStyles from './styles';
import {colors} from '../../constants/colors';

type LeftIconType = 'menu' | 'west';
interface IProps {
  leftIcon?: LeftIconType;
  leftFunc: () => void;
  rightFunc: () => void;
  title?: string;
  badge?: string;
  style?: StyleProp<ViewStyle>;
}
export default function AppHeader({
  leftIcon = 'menu',
  leftFunc,
  rightFunc,
  badge,
  title,
  style,
}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <Header
      containerStyle={[styles.headerContainer, style]}
      backgroundColor={colors.DARK}
      leftComponent={<LeftComponent icon={leftIcon} onPress={leftFunc} />}
      centerComponent={
        <View style={styles.centerBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
      }
      rightComponent={<RightComponent onPress={rightFunc} badge={badge} />}
    />
  );
}

interface LeftProps {
  icon: LeftIconType;
  onPress: () => void;
}

const LeftComponent = ({icon, onPress}: LeftProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View>
      <Button
        onPress={onPress}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        icon={{
          name: icon,
          type: 'material-icons',
          color: colors.WHITE,
          size: 28,
        }}
      />
    </View>
  );
};

interface RightProps {
  onPress: () => void;
  badge?: string;
}
const RightComponent = ({onPress, badge}: RightProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View>
      <Button
        onPress={onPress}
        containerStyle={styles.iconButtonBox}
        buttonStyle={styles.iconButton}
        icon={<Icon name="shopping-outline" size={30} color={colors.WHITE} />}
      />
      {badge && <Badge value={badge} badgeStyle={styles.badge} />}
    </View>
  );
};
