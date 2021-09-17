import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const RenderItem = ({item}) => {
    const {name : {title, first, last} ,email , dob: {age}} = item
   
    console.log(title,first,last)
    return (
    <View style={Styles.render}>
      <View style={Styles.insideView}>
        <Image
          source={{uri: item.picture.large}}
          style={Styles.image}
        />
      </View>
      <View>
        <Text>
          {title} {first} {last}
        </Text>
        <Text>{email} </Text>
        <Text>{age} </Text>
      </View>
    </View>
  );
};

export default RenderItem;


const Styles =StyleSheet.create({
    render: {
        display:'flex',
        flexDirection:'row',
        margin:5,
        // borderWidth:5,
        // borderColor:'red',
        // borderRadius:50
        alignItems:'center',
        backgroundColor:'#83C5BE',
        borderRadius:50,
        paddingLeft:10,
        paddingRight:20,
        padding:3
    },
    image:{
        height: 44, 
        width: 44, 
        borderRadius: 22
    },
    insideView:{
        margin: 10
    }
})