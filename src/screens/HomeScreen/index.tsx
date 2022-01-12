import React, {useMemo, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {Food, HomeScreenNavigationProp} from '../../constants/TypeScript';
import createStyles from './styles';
import AppHeader from '../../components/AppHeader';
import {colors} from '../../constants/colors';
import {restaraunts} from '../../constants/data';
import FoodCard from '../../components/FoodCard';
import RestarauntCard from '../../components/RestarauntCard';

const foods: Food[] = restaraunts
  .map(item => item.menu)
  .reduce((acc, food) => [...acc, ...food], []);

export default function HomeScreen({navigation}: HomeScreenNavigationProp) {
  const styles = useMemo(() => createStyles(), []);
  const [search, setSearch] = useState('');

  return (
    <View style={styles.body}>
      <AppHeader
        title="No queues"
        leftFunc={() => navigation.openDrawer()}
        rightFunc={() => navigation.navigate('CheckoutOrderScreen')}
      />
      <ScrollView>
        <View style={styles.searchBox}>
          <Input
            value={search}
            onChangeText={setSearch}
            placeholderTextColor={colors.GREY}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            containerStyle={styles.searchContainer}
            placeholder="Search food, drink, restaraunt"
            keyboardAppearance="dark"
            autoCompleteType
          />
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.iconButton}
            icon={{
              name: 'tune',
              color: colors.ORANGE,
              size: 40,
            }}
          />
        </View>
        <View>
          <FlatList
            data={restaraunts}
            keyExtractor={item => item._id}
            horizontal
            renderItem={({item, index}) => (
              <RestarauntCard
                restaraunt={item}
                index={index}
                showTags
                showRating
                onPress={() =>
                  navigation.navigate('RestarauntScreen', {
                    restaraunt: item,
                  })
                }
              />
            )}
          />
        </View>
        <View>
          <Text style={styles.title}>Order again</Text>
          <FlatList
            data={foods.slice(0, 5)}
            keyExtractor={(_, i) => i.toString()}
            horizontal
            renderItem={({item, index}) => (
              <FoodCard
                item={item}
                onPress={() => navigation.navigate('FoodScreen', {food: item})}
                index={index}
              />
            )}
          />
          <Text style={styles.title}>Popular dishes</Text>
          <FlatList
            data={foods.slice(5)}
            keyExtractor={(_, i) => i.toString()}
            horizontal
            renderItem={({item, index}) => {
              return (
                <FoodCard
                  item={item}
                  onPress={() =>
                    navigation.navigate('FoodScreen', {food: item})
                  }
                  index={index}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
