// 
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image,ActivityIndicator } from 'react-native';

import React, { useEffect, useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProgressBar from "react-native-animated-progress";

import { useNavigation } from '@react-navigation/native';

// import LocationTracker from './LocationTracker';

import * as Location from 'expo-location';

const image1 = require('../assets/images/vi.png');

const image2 = require('../assets/images/m3.png');

const image3 = require('../assets/images/pp.png');



 

 

 

const data = [


  { id: 2, title: 'Video Screen', icon: image1, description: "Click go to Video Screen",navi:"videoscreen" },

  { id: 3, title: 'Mp 3 Screen', icon: image2, description: "Clicked go to Mp3 Screen",navi:"mp3screen" },

  { id: 4, title: 'Power Point Screen', icon: image3, description: "Click go to Powerpoint Screen",navi:"powerpointscreen" },




];

 

 

 

const CardComponent = () => {

  const navigation = useNavigation()


  const renderItem = ({ item }) => (

    <View style={styles.cardView}>

  <View style={{ flexDirection: "row" }}>

      <View style={{ flexDirection: "row", width:50, height: 50, backgroundColor: "#b8e8fc", borderRadius:50, justifyContent: "center", alignItems: "center", margin: 20 }}>

          {/* <Ionicons style={{ justifyContent: "center", alignItems: "center" }} name={item.icon} size={25} color='black' /> */}

          <Image source={item.icon} style={{ width: 35, height: 35}} />

        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>

          <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 5, color: "#0f0f0f" }}>{item.title} </Text>

        </View>

      </View>

      <View style={{ justifyContent: "center", alignItems: "center",}}>
<TouchableOpacity onPress={()=>navigation.navigate(item.navi)}>
        <Text style={{ marginTop: 10 }}>{item.description}</Text>

</TouchableOpacity>

      </View>

    </View>

  );
 

  const keyExtractor = (item) => item.id.toString();


  return (

    <FlatList

      data={data}

      renderItem={renderItem}

      keyExtractor={keyExtractor}

    />

  );

}

 

export default CardComponent;

 

const styles = StyleSheet.create({

  cardView: {

    flex: 1,

    width: "90%",

    minHeight:300,

    maxHeight:500,

 

    backgroundColor: "white",

    margin: 20,

    padding: 10,

    borderRadius: 10,

  },

  viewMoreButton: {

    // marginTop: -5,

    padding: 10,

    backgroundColor: '#b8e8fc',

    borderRadius: 18,

    alignSelf: 'center',

    marginBottom:30,

  },

  viewMoreText: {

    color: 'black',

    fontWeight: 'bold',

  },

  TimerCard:{

    fontSize: 24,

    marginRight: 5,

    backgroundColor:"#fff3eb",

    width:50,

    height:50,

    textAlign:"center",

    alignItems:"center",

    // marginBottom:20,

    borderRadius:5

 

 

  }

});