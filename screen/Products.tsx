import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card} from '../compunets';
import {Get} from '../config/API/apihandeling';

const style = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginTop: 10,
    textAlign: 'center',
    color: '#000',
  },
});

const Products = () => {
  const [Data, setData] = React.useState<any | null>();

  React.useEffect(() => {
    Get('products')
      .then(res => setData(res.data))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Text style={[style.heading]}>Products</Text>
      <ScrollView style={{alignSelf: 'center'}}>
        {Data ? (
          Data.map((x: any, i: number) => <Card key={i} {...x} />)
        ) : (
          <Text style={[style.heading, {fontSize: 15}]}>Loading ... </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Products;
