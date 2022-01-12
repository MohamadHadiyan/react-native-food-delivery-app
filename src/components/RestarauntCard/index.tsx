import React, {useMemo} from 'react';
import {
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';
import {Food, Restaraunt} from '../../constants/TypeScript';
import Typography from '../Typography';
import createStyles from './styles';

interface IProps {
  restaraunt: Restaraunt;
  index?: number;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  showTags?: boolean;
  showRating?: boolean;
  menu?: Food[];
  foodPress?: (food: Food) => void;
}

export default function RestarauntCard({
  restaraunt,
  index,
  onPress,
  containerStyle,
  showTags,
  showRating,
  menu,
  foodPress,
}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  const marginLeft = {
    marginLeft: index === 0 ? 10 : 0,
  };

  return (
    <Card
      containerStyle={[styles.cardContainer, containerStyle, marginLeft]}
      wrapperStyle={styles.cardWraper}>
      <TouchableOpacity onPress={onPress}>
        <Card.Image
          source={{uri: restaraunt.images[0] || ''}}
          style={styles.image}
        />
        {restaraunt.verified && (
          <View style={styles.verifiedBox}>
            <Icon
              name="checkmark-circle"
              color={colors.LIGHT_BLUE}
              size={36}
              style={styles.verifiedIcon}
            />
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.cardBody}>
        <View>
          <TouchableOpacity onPress={onPress} style={styles.logoBox}>
            <Avatar source={{uri: restaraunt.logo}} size={35} rounded />
            <Card.Title style={styles.title}>{restaraunt.name}</Card.Title>
          </TouchableOpacity>
          {showTags && (
            <View style={styles.flexRow}>
              {restaraunt.tags.map((tag, id) => (
                <TouchableOpacity key={id.toString()}>
                  <Text style={styles.text}>{` #${tag} `}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View style={styles.rightContent}>
          {showRating && (
            <View style={styles.flexRow}>
              <Text style={[styles.text, {color: colors.WHITE}]}>
                {restaraunt.rating}/5
              </Text>
              <Icon name="star" color={colors.LIGHT_ORANGE} size={17} />
            </View>
          )}
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.iconButton}
            icon={{
              name: 'favorite-border',
              color: colors.WHITE,
              size: 28,
            }}
          />
        </View>
      </View>
      {menu && foodPress && <MenuBox data={menu} onPress={foodPress} />}
    </Card>
  );
}

interface IMenu {
  data: Food[];
  onPress: (food: Food) => void;
}

const MenuBox = ({data, onPress}: IMenu) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.menuBox}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={[styles.foodBox, index === 0 ? styles.marginLeft_0 : {}]}>
            <Avatar
              size={60}
              source={item.images[0]}
              avatarStyle={styles.foodImage}
            />
            <View style={styles.foodTitle}>
              <Typography width={150} size={14} text={item.name.slice(0, 30)} />
              <Typography
                color={colors.ORANGE}
                size={14}
                text={'$' + item.price}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
