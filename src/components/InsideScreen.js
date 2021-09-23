import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ImageBackground,
} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import RenderItem from './RenderItem';
import {FetchData} from '../api/FetchData';

const InsideScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const handlePress = () => {
    console.log('Pressed');
    FetchData(setUsers);

    // api.get('/').then(response => {
    //   setUsers(usersSpread => [...usersSpread, response.data.results[0]]);
    // });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        }}
        style={styles.imagebg}
        blurRadius={50}>
        <Text style={styles.textStyle}>Inside Screen 2</Text>

        <Button title=" Go Back " onPress={() => navigation.goBack()} />

        <Button title=" Load Data " onPress={handlePress} />
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={RenderItem}
            keyExtractor={({item}) => uuidv4()}
            refreshing={true}
          />
        </View>
        {/* <Text>
            {JSON.stringify(users)}
            </Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 40,
    color: '#83C5BE',
    fontWeight: '700',
    textAlign: 'center',
  },
  render: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    // borderWidth:5,
    // borderColor:'red',
    // borderRadius:50
    alignItems: 'center',
    backgroundColor: '#83C5BE',
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 20,
    padding: 3,
  },
  imagebg: {
    flex: 1,
  },
});

export default InsideScreen;
