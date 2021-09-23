import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Pressable, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>

      <Button
        title=" Press ME "
        onPress={() => navigation.navigate('Inside')}
      />
      <Button title=" Logout " onPress={signOut} />

      <Pressable
        onPress={() => Alert.alert('Pressable', ' YPAB')}
        onPressIn={() => {
          console.log('pressed in');
        }}
        onLongPress={() => navigation.navigate('TabHome')}>
        <Text style={styles.pressBtn}>I'm pressable!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  pressBtn: {},
});

export default HomeScreen;
