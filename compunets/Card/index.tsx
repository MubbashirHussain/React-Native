import {View, Text, StyleSheet, Image, Button, Alert} from 'react-native';
import rncStyles from 'rncstyles';
const style = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    borderBlockEndColor: '#005',
    width: 250,
    margin: 10,
    padding: 10,
    borderColor: '#4b4b4b5b',
  },
  Image: {
    height: 150,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  description: {
    color: '#0000006c',
    fontSize: 16,
  },
  price: {
    color: '#000',
  },
});

type Props = {
  id: number | string;
  image: string;
  title: string;
  description: string;
  rating: {rate: number; count: number};
  price: string | number;
  category: string;
};
const Card = (props: Props) => {
  const {title, image, description, rating, price, category} = props;
  return (
    <View style={style.card}>
      <View style={{marginBottom: 10}}>
        <Image
          style={[style.Image]}
          source={{
            uri: image,
          }}
        />
      </View>
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>
        {
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla!'
        }
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={style.description}>{category}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={[style.title, {fontSize: 16}]}>
          Rating : {rating?.rate ?? '0'}
        </Text>
        <Text style={[style.title, {fontSize: 16}]}>${price}</Text>
      </View>
      <View style={[rncStyles.mb1, rncStyles.mt2]}>
        <Button
          title="buy now"
          onPress={() => {
            Alert.alert(`id:${props.id}
title : ${props.title}`);
            console.log(props.id);
          }}
        />
      </View>
    </View>
  );
};

export default Card;
