import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import rncStyles from 'rncstyles';

const style = StyleSheet.create({
  Container: {
    color: '#000',
  },
  Box: {
    minWidth: 200,
    minHeight: 300,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: '#0000005e',
    gap: 5,
    color: '#000',
  },
  Heading: {color: '#000', marginTop: 20},
  Input: {borderWidth: 1},
});
const Login = () => {
  return (
    <View
      style={[rncStyles.h100, rncStyles.justifyContentCenter, rncStyles.m2]}>
      <View style={style.Box}>
        <Text style={[style.Heading, rncStyles.fs2, rncStyles.textCenter]}>
          Signup
        </Text>
        <View style={rncStyles.my2}>
          <TextInput
            style={[style.Input, rncStyles.input, rncStyles.my1]}
            placeholder="User Name"
          />
          <TextInput
            style={[style.Input, rncStyles.input, rncStyles.my1]}
            placeholder="Email"
          />
          <TextInput
            style={[style.Input, rncStyles.input, rncStyles.my1]}
            placeholder="Password"
          />
        </View>
        <View>
          <Button title="Signup" color={'blue'} />
        </View>
      </View>
    </View>
  );
};

export default Login;
