import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useAuthContext} from '../contexts/AuthContextProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  // console.log(token);

  // const newfun = () => {
  //   setToken('new');
  // };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User account created & signed in!');
        // console.log(response);
        // const {
        //   user: {uid},
        // } = response;
        // console.log(uid);
        // setToken({uid: uid});
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert(
            'That email address is already in use!',
            'Please check the email you have typed',
            [
              {
                text: 'Cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          );
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert(
            'That email address is invalid!',
            'Please check the email you have typed',
            [
              {
                text: 'Cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          );
        }

        if (error.code === 'auth/user-not-found') {
          console.log(error.code);
          Alert.alert(
            'No user found with fiven credentials',
            'Please check the email and password you have typed',
            [
              {
                text: 'Cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          );
        }

        console.error(error);
      });
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert(
            'That email address is already in use!',
            'Sign In instead',
            [
              {
                text: 'Cancel',
              },
              {text: 'OK', onPress: () => signIn()},
            ],
          );
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Login Screen</Text>
      <View style={styles.texts}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      {/* <Text>Token- {JSON.stringify(token)}</Text> */}
      <Button title="Sign In" onPress={signIn} />
      <Button title="Create New Account" onPress={createUser} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  textStyle: {
    fontSize: 40,
    color: '#83C5BE',
    fontWeight: '700',
    textAlign: 'center',
  },
  texts: {
    margin: 50,
  },
  inputs: {
    marginTop: 20,
    fontSize: 20,
  },
});
