import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import {colors} from '../../constants/colors';
import {Food} from '../../constants/TypeScript';
import createStyles from './styles';

interface IProps {
  item: Food;
  index: number;
  onPress: () => void;
  horizontal?: boolean;
}
export default function FoodCard({item, index, onPress, horizontal}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  const marginLeft = {
    marginLeft: index === 0 ? 10 : 0,
  };

  return (
    <Card
      containerStyle={[styles.cardContainer, horizontal && marginLeft]}
      wrapperStyle={styles.cardWraper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWraper}>
            <Card.Image style={styles.image} source={item.images[0]} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.cardbody}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.detailBox}>
          <Text style={styles.priceText}>
            {'$ '}
            {item.price}
          </Text>
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.iconButton}
            icon={{
              name: 'favorite-border',
              color: colors.WHITE,
              size: 26,
            }}
          />
        </View>
      </View>
    </Card>
  );
}
