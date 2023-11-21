import {View, Text, TouchableOpacity} from 'react-native';
import Rnc from 'rncstyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[Rnc.fs5, {color: '#000'}]}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('products');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[Rnc.fs5, Rnc.textPrimary]}>Go to Product</Text>
          <Icon name="chevron-right" size={50} color="blue" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Home;
