import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Rnc from 'rncstyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import rncStyles from 'rncstyles';

const style = StyleSheet.create({
  BtnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

function Home({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[Rnc.fs5, {color: '#000'}]}>Home Screen</Text>
      <View style={[style.BtnContainer, Rnc.my5]}>
        <TouchableOpacity style={rncStyles.flexRow}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={[rncStyles.textPrimary,rncStyles.fs4]} >Login</Text><Icon name="chevron-right" size={25}/>
        </TouchableOpacity>

        <TouchableOpacity style={rncStyles.flexRow}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={[rncStyles.textPrimary,rncStyles.fs4]} >|      Sigup</Text><Icon name="chevron-right" size={25}/>
        </TouchableOpacity>

        <TouchableOpacity style={rncStyles.flexRow}
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text style={[rncStyles.textPrimary,rncStyles.fs4]} >|       Products</Text><Icon name="chevron-right" size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;
