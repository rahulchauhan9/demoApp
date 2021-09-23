import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabOne from './TabOne';
import TabThree from './TabThree';
import TabTwo from './TabTwo';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="TabOne" component={TabOne} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
      <Tab.Screen name="TabThree" component={TabThree} />
    </Tab.Navigator>
  );
};

export default TabHome;

const styles = StyleSheet.create({});
