import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Home Screen</Text>

      <Button
        title=" Press ME "
        onPress={() => navigation.navigate('Inside')}
      />
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
