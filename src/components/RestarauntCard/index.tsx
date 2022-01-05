import React, {useMemo} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';
import {Restaraunt} from '../../constants/TypeScript';
import createStyles from './styles';

interface IProps {
  item: Restaraunt;
  index?: number;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  showTags?: boolean;
  showRating?: boolean;
}

export default function RestarauntCard({
  item,
  index,
  onPress,
  containerStyle,
  showTags,
  showRating,
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
        <Card.Image source={{uri: item.images[0] || ''}} style={styles.image} />
        {item.verified && (
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
            <Avatar source={{uri: item.logo}} size={35} rounded />
            <Card.Title style={styles.title}>{item.name}</Card.Title>
          </TouchableOpacity>
          {showTags && (
            <View style={styles.flexRow}>
              {item.tags.map((tag, id) => (
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
                {item.rating}/5
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
    </Card>
  );
}
