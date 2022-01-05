import React, {useEffect, useMemo, useState} from 'react';
import {Dimensions, StatusBar, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {HomeStackParamList, Restaraunt} from '../../constants/TypeScript';
import {Avatar, Button, Image, Text} from 'react-native-elements';
import {colors} from '../../constants/colors';
import {categories} from '../../constants/data';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import FullFoodCard from '../../components/FullFoodCard';
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import BottomSheet from '../../components/BottomSheet';

type Props = NativeStackScreenProps<HomeStackParamList, 'RestarauntScreen'>;

const {height} = Dimensions.get('window');

export default function RestarauntScreen({navigation, route}: Props) {
  const styles = useMemo(() => createStyles(), []);
  const restaraunt = route.params.restaraunt;

  useEffect(() => {
    return navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor(colors.NONE);
      StatusBar.setBarStyle('light-content');
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView style={styles.body}>
      <Slider restaraunt={restaraunt} />
      <AppHeader
        title="Restaraunt"
        leftIcon="west"
        leftFunc={() => navigation.goBack()}
        rightFunc={() => navigation.navigate('CheckoutOrderScreen')}
        style={styles.header}
      />

      <Content restaraunt={restaraunt} />
      <Menu restaraunt={restaraunt} navigation={navigation} route={route} />
    </GestureHandlerRootView>
  );
}

interface IRestarauntProps {
  restaraunt: Restaraunt;
}

const Slider = ({restaraunt}: IRestarauntProps) => {
  const styles = useMemo(() => createStyles(), []);
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.hight_300}>
      <Swiper
        autoplay
        autoplayTimeout={5}
        dotColor={colors.WHITE}
        dotStyle={styles.dot}
        activeDotStyle={styles.dot}
        activeDotColor={colors.ORANGE}>
        {restaraunt.images.map((item, index) => (
          <Image
            key={index.toString()}
            source={{uri: item}}
            style={styles.hight_300}
          />
        ))}
      </Swiper>
      <Icon
        name={liked ? 'heart' : 'heart-outline'}
        color={liked ? colors.RED : colors.WHITE}
        size={30}
        onPress={() => setLiked(!liked)}
        style={styles.heartIcon}
      />
    </View>
  );
};

const Content = ({restaraunt}: IRestarauntProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <BottomSheet
      bottomValue={height / 2 - 100}
      topValue={0}
      containerStyle={styles.content}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleBox}>
          <Avatar source={{uri: restaraunt.logo}} size={60} rounded />
          <Text style={styles.title}>{restaraunt.name}</Text>
          {restaraunt.verified && (
            <View style={styles.verifiedBox}>
              <Icon
                name="checkmark-circle"
                color={colors.LIGHT_BLUE}
                size={26}
                style={styles.verifiedIcon}
              />
            </View>
          )}
          <View style={styles.status}>
            <Text style={styles.text}>
              {restaraunt.isOpen ? 'Open' : 'Close'}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.darkText}>{restaraunt.slogan}</Text>
          <Text style={styles.darkText}>{restaraunt.address}</Text>
          <Text style={styles.darkText}>{restaraunt.tel}</Text>
          <View style={styles.tagsBox}>
            {restaraunt.tags.map((tag, id) => (
              <Text key={id} style={[styles.darkText, styles.tag]}>
                {tag}
              </Text>
            ))}
          </View>
          {!!restaraunt.reviews.length && (
            <View style={[styles.titleBox, styles.ratingBox]}>
              <View style={styles.flexRow}>
                <Icon name="star" color={colors.DARK} size={18} />
                <Text style={[styles.darkText, styles.rating]}>
                  {restaraunt.rating}
                </Text>
                <Text style={styles.darkText}>
                  {restaraunt.reviews.length} Reviews
                </Text>
              </View>
              <Text style={styles.darkText}>
                Visit This Month: {restaraunt.visitThisMonth}
              </Text>
            </View>
          )}

          <View style={styles.flexRow}>
            <Text style={styles.darkText}>With The Manager </Text>
            <Text style={styles.text}>{restaraunt.managerName}</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.darkText}>Chef </Text>
            <Text style={styles.text}>{restaraunt.chef}</Text>
          </View>

          <Text style={styles.darkText}>{restaraunt.story}</Text>
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

const Menu = ({restaraunt, navigation}: IRestarauntProps & Props) => {
  const styles = useMemo(() => createStyles(), []);
  const [current, setCurrent] = useState('20');

  return (
    <BottomSheet canOverDown>
      <View style={styles.menuList}>
        <Text style={styles.menuTitle}>Menu</Text>
        <FlatList
          data={[{_id: '20', name: 'all'}, ...categories]}
          keyExtractor={item => item._id}
          horizontal
          renderItem={({item}) => {
            const active = current === item._id;
            const bg = {
              backgroundColor: active ? colors.GREY_4 : colors.GREY,
            };
            const color = {
              color: active ? colors.BLACK : colors.WHITE,
              textShadowColor: active ? colors.BLACK : colors.WHITE,
            };

            return (
              <Button
                key={item._id}
                onPress={() => setCurrent(item._id)}
                title={item.name}
                containerStyle={[styles.menuItem, bg]}
                buttonStyle={styles.menuButton}
                titleStyle={[styles.text, color]}
              />
            );
          }}
        />
      </View>
      <FlatList
        data={restaraunt.menu}
        keyExtractor={item => item._id}
        style={styles.flatlistMenu}
        contentContainerStyle={styles.flatlistMenuBox}
        renderItem={({item, index}) => (
          <FullFoodCard
            index={index}
            item={item}
            onPress={() => navigation.navigate('FoodScreen', {food: item})}
          />
        )}
      />
    </BottomSheet>
  );
};
