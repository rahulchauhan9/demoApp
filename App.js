import React, {useState, useEffect} from 'react';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import InsideScreen from './src/components/InsideScreen';
import LoginScreen from './src/components/LoginScreen';
import auth from '@react-native-firebase/auth';
import {AuthContextProvider} from './src/contexts/AuthContextProvider';
import HeaderButton from './src/components/HeaderButton';
import TabHome from './src/components/TabHome';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // change handler
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // component unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              //    headerRightTitle: props => <HeaderButton />,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Inside')}
                  title="Go Ahead"
                  color="black"
                />
              ),
            })}
          />
          <Stack.Screen name="Inside" component={InsideScreen} />
          <Stack.Screen name="TabHome" component={TabHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
