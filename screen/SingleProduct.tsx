import React from 'react';
import { View} from 'react-native';
import {Card} from '../compunets';
import rncStyles from 'rncstyles';

const SingleProduct = ({route}: any) => {
  console.log(route.params);
  let x = route.params;
  return (
    <View style={[rncStyles.h100 ,{justifyContent : "center" ,alignItems:"center"}]}>
      <Card {...x} />
    </View>
  );
};

export default SingleProduct;
