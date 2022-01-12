import React, {useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Image, Input, Text} from 'react-native-elements';
import {
  Food,
  FoodCategory,
  Restaraunt,
  SearchScreenNavigationProp,
} from '../../constants/TypeScript';
import createStyles from './styles';
import {colors} from '../../constants/colors';
import {categories, restaraunts} from '../../constants/data';

const foods: Food[] = restaraunts
  .map(item => item.menu)
  .reduce((acc, food) => [...acc, ...food], [])
  .slice(0, 6);

const {width} = Dimensions.get('window');
export default function SearchScreen({navigation}: SearchScreenNavigationProp) {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <SearchBox
        navigate={category =>
          navigation.navigate('SearchResultScreen', {category})
        }
      />

      <ScrollView contentContainerStyle={styles.categoryBox}>
        <TopFoodsAndRests
          title="Foods"
          data={foods}
          navigate={item => navigation.navigate('FoodScreen', {food: item})}
        />
        <TopFoodsAndRests
          title="Restaraunts"
          data={restaraunts}
          navigate={item =>
            navigation.navigate('RestarauntScreen', {restaraunt: item})
          }
        />
      </ScrollView>
    </View>
  );
}

interface ITop {
  title: string;
  navigate: (item: any) => void;
  data: Food[] | Restaraunt[];
}
const TopFoodsAndRests = ({title, data, navigate}: ITop) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <>
      <Text style={styles.title}>Top {title}</Text>
      <View style={styles.foodBox}>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigate(item)}
            key={index.toString()}
            style={[styles.food, {width: width / 2 - 20}]}>
            <View
              style={
                title === 'Foods'
                  ? styles.foodImageBox
                  : styles.restarauntImageBox
              }>
              <Image
                style={
                  title === 'Foods' ? styles.foodImage : styles.restarauntImage
                }
                source={
                  typeof item.images[0] !== 'string'
                    ? item.images[0]
                    : {uri: item.images[0] || ''}
                }
              />
            </View>
            <Text style={styles.text} numberOfLines={1}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const SearchBox = ({navigate}: Pick<ISearchModal, 'navigate'>) => {
  const styles = useMemo(() => createStyles(), []);
  const [vizible, setVizible] = useState(false);

  return (
    <>
      <View style={styles.searchWrapper}>
        <TouchableWithoutFeedback onPress={() => setVizible(true)}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              color={colors.GREY}
              size={28}
              style={styles.westButton}
            />
            <Text style={[styles.searchInput, styles.searchOverlay]}>
              Search food, drink, restaraunt
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <SearchModal
        vizible={vizible}
        navigate={navigate}
        setVizible={setVizible}
      />
    </>
  );
};

interface ISearchModal {
  vizible: boolean;
  navigate: (name: FoodCategory) => void;
  setVizible: (vizible: boolean) => void;
}

const SearchModal = ({vizible, navigate, setVizible}: ISearchModal) => {
  const styles = useMemo(() => createStyles(), []);
  const [search, setSearch] = useState('');
  const [cats, setCats] = useState(categories);
  const inputRef = useRef<TextInput>(null);

  const onChangeHandler = (text: string) => {
    setSearch(text);

    if (text !== '') {
      const newCats = cats.filter(cat => cat.name.includes(text));
      setCats(newCats);
    } else {
      setCats(categories);
    }
  };

  const searchHandler = (category: FoodCategory) => {
    setVizible(false);
    setSearch('');
    navigate(category);
  };

  const onShowModal = async () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearHandler = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      setSearch('');
    }
  };

  return (
    <Modal animationType="fade" visible={vizible} onShow={onShowModal}>
      <View style={styles.modalBox}>
        <View style={styles.searchBox}>
          <Input
            ref={inputRef}
            value={search}
            onChangeText={onChangeHandler}
            placeholderTextColor={colors.GREY}
            errorStyle={styles.inputError}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.searchInput}
            containerStyle={styles.searchContainer}
            placeholder="Search food, drink, restaraunt"
            keyboardAppearance="dark"
            autoCompleteType
          />
          <Button
            onPress={() => setVizible(false)}
            containerStyle={styles.westButton}
            buttonStyle={styles.iconButton}
            icon={{
              name: 'arrow-back',
              type: 'ionicons',
              color: colors.GREY_3,
              size: 30,
            }}
          />
          <Button
            onPress={clearHandler}
            containerStyle={[styles.westButton, styles.searchButton]}
            buttonStyle={styles.iconButton}
            icon={{
              name: 'close',
              type: 'ionicons',
              color: colors.ORANGE,
              size: 33,
            }}
          />
        </View>
        <FlatList
          data={cats}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <View key={item._id} style={styles.categoryBox}>
                <TouchableOpacity onPress={() => searchHandler(item)}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
};
