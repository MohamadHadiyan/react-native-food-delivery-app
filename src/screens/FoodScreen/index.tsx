import React, {useEffect, useMemo, useState} from 'react';
import {Dimensions, FlatList, ScrollView, StatusBar, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Image, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Food, HomeStackParamList} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {restaraunts} from '../../constants/data';
import FoodCard from '../../components/FoodCard';
import {colors} from '../../constants/colors';
import {Shadow} from 'react-native-shadow-2';
import Counter from '../../components/Counter';

type Props = NativeStackScreenProps<HomeStackParamList, 'FoodScreen'>;
const foods: Food[] = restaraunts
  .map(item => item.menu)
  .reduce((acc, food) => [...acc, ...food], []);

const {width} = Dimensions.get('window');

export default function FoodScreen({navigation, route}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const food = route.params.food;

  const headerStyle = {
    top: 100,
    width,
    backgroundColor: 'transparent',
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(colors.NONE);
      StatusBar.setBarStyle('light-content');
    });
  }, [navigation]);

  return (
    <View style={styles.body}>
      <Shadow
        startColor={colors.DARKEN_SHADOW}
        distance={35}
        containerViewStyle={styles.circleContainerShadow}>
        <LinearGradient
          colors={[colors.GREY_2, colors.DARK]}
          style={styles.circle}>
          <AppHeader
            style={headerStyle}
            leftIcon="west"
            leftFunc={() => navigation.goBack()}
            rightFunc={() => navigation.navigate('CheckoutOrderScreen')}
          />
          <View style={styles.titleBox}>
            <Text style={styles.text}>{food.name}</Text>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.text}>{'$ ' + food.price}</Text>
          </View>
          <View>
            <View style={styles.prevImageWraper}>
              <Image style={styles.nextImage} source={foods[0].images[0]} />
            </View>
            <Shadow
              distance={15}
              startColor={colors.DARK_SHADOW}
              offset={[0, 10]}
              containerViewStyle={styles.imageWraper}>
              <Image style={styles.image} source={food.images[0]} />
            </Shadow>
            <View style={styles.nextImageWraper}>
              <Image style={styles.nextImage} source={foods[1].images[0]} />
            </View>
          </View>
        </LinearGradient>
      </Shadow>
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <Counter />
          <Detials food={food} />
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={() => navigation.navigate('CheckoutOrderScreen')}
            title="Checkout order"
            titleStyle={styles.textButton}
            containerStyle={styles.containerButton}
            buttonStyle={styles.button}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [colors.ORANGE, colors.LIGHT_ORANGE],
            }}
          />
          <Button
            onPress={() => console.log('go')}
            title="Add to cart"
            titleStyle={styles.textButton}
            containerStyle={styles.containerButton}
            buttonStyle={styles.button}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [colors.ORANGE, colors.LIGHT_ORANGE],
            }}
          />
        </View>
        <View>
          <Text style={[styles.text, styles.orderText]}>With this order</Text>

          <FlatList
            data={foods.slice(0, 5)}
            keyExtractor={(_, i) => i.toString()}
            horizontal
            renderItem={({item, index}) => (
              <FoodCard
                onPress={() => navigation.navigate('FoodScreen', {food: item})}
                item={item}
                index={index}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Detials = ({food}: {food: Food}) => {
  const styles = useMemo(() => createStyles(), []);
  const [showMore, setShowMore] = useState(false);

  return (
    <View>
      <View style={styles.detailBox}>
        <View style={styles.detail}>
          <Icon name="clock-outline" color={colors.WHITE} size={22} />
          <Text style={[styles.text, styles.smallText]}> 10 min</Text>
        </View>
        <View style={styles.detail}>
          <Icon name="fire" color={colors.WHITE} size={28} />
          <Text style={[styles.text, styles.smallText]}>
            {' '}
            {food.calories} cal
          </Text>
        </View>
        <View style={styles.detail}>
          <Icon name="star" color={colors.WHITE} size={28} />
          <Text style={[styles.text, styles.smallText]}>
            {' '}
            {food.rating} vote
          </Text>
        </View>
        <View style={styles.detail}>
          <Icon name="weight-gram" color={colors.WHITE} size={28} />
          <Text style={[styles.text, styles.smallText]}> {food.weight} g</Text>
        </View>
      </View>
      <Text style={styles.descText} numberOfLines={showMore ? 20 : 2}>
        {food.desc}
      </Text>
      <View style={styles.showMoreButtonBox}>
        <Button
          onPress={() => setShowMore(!showMore)}
          containerStyle={styles.iconButtonBox}
          buttonStyle={styles.iconButton}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [colors.GREY_2, colors.DARK],
          }}
          icon={{
            name: showMore ? 'expand-less' : 'expand-more',
            color: colors.WHITE,
            size: 28,
          }}
        />
      </View>
    </View>
  );
};
