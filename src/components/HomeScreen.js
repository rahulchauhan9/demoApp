import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Home Screen</Text>

      <Button
        title=" Press ME "
        onPress={() => navigation.navigate('Inside')}
      />
      <Button title=" Logout " onPress={signOut} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: 'orange',
    fontWeight: '700',
  },
});

export default HomeScreen;
