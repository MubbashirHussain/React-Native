// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screen/home';
import Products from '../../screen/Products';
import SingleProduct from '../../screen/SingleProduct';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen
          name="singleProduct"
          component={SingleProduct}
          options={{title: 'Product'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
