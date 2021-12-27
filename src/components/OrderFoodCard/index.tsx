import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants/colors';
import {Food} from '../../constants/TypeScript';
import Counter from '../Counter';
import createStyles from './styles';

interface IProps {
  food: Food;
  index: number;
  onPress: () => void;
}
export default function OrderFoodCard({food, onPress}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <Card
      containerStyle={styles.cardContainer}
      wrapperStyle={styles.cardWraper}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWraper}>
            <Card.Image style={styles.image} source={food.images[0]} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.cardbody}>
        <View style={styles.titleBox}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{food.name}</Text>
          </TouchableOpacity>
          <Button
            onPress={() => console.log('do')}
            containerStyle={[styles.iconButtonBox, styles.marginTop_5]}
            buttonStyle={styles.iconButton}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [colors.GREY_2, colors.DARK],
            }}
            icon={{
              name: 'close',
              color: colors.WHITE,
              size: 20,
            }}
          />
        </View>
        <View style={styles.priceBox}>
          <Counter />

          <Text style={[styles.text, {color: colors.ORANGE}]}>
            {'$ '}
            {food.price}
          </Text>
        </View>
      </View>
    </Card>
  );
}
