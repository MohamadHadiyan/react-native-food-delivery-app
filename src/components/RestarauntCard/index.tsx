import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Card, Text} from 'react-native-elements';
import {colors} from '../../constants/colors';
import {Restaraunt} from '../../constants/TypeScript';
import createStyles from './styles';

interface IProps {
  item: Restaraunt;
  index: number;
  onPress: () => void;
}

export default function RestarauntCard({item, index, onPress}: IProps) {
  const styles = useMemo(() => createStyles(), []);

  const marginLeft = {
    marginLeft: index === 0 ? 10 : 0,
  };

  return (
    <Card
      containerStyle={[styles.cardContainer, marginLeft]}
      wrapperStyle={styles.cardWraper}>
      <TouchableOpacity onPress={onPress}>
        <Card.Image source={{uri: item.images[0] || ''}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.cardBody}>
        <View>
          <TouchableOpacity onPress={onPress}>
            <Card.Title style={styles.title}>{item.name}</Card.Title>
          </TouchableOpacity>
          <View style={styles.flexRow}>
            {item.tags.map((tag, id) => (
              <TouchableOpacity key={id.toString()}>
                <Text style={styles.text}>{` #${tag} `}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
    </Card>
  );
}
