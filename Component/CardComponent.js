// 
import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image,ActivityIndicator } from 'react-native';

import React, { useEffect, useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProgressBar from "react-native-animated-progress";

import { useNavigation } from '@react-navigation/native';

// import LocationTracker from './LocationTracker';

import * as Location from 'expo-location';

//(-26.529565, -55.413073)

//latitude: 13.018939, longitude: 80.206985

const Guindy = {latitude: 13.018939, longitude: 80.207169}

const OtherArea =  { latitude: -26.529565, longitude: -55.413073 }

const VALID_CHECKIN_LOCATION = Guindy;

 

const image1 = require('../assets/images/vi.png');

const image2 = require('../assets/images/m3.png');

const image3 = require('../assets/images/pp.png');



 

 

 

const data = [


  { id: 2, title: 'Video Screen', icon: image1, description: "Click go to Video Screen" },

  { id: 3, title: 'Mp 3 Screen', icon: image2, description: "Clicked go to Mp3 Screen" },

  { id: 4, title: 'Power Point Screen', icon: image3, description: "Click go to Powerpoint Screen" },




];

 

 

 

const CardComponent = () => {

  const navigation = useNavigation()

  const [showAllLeaveRequests, setShowAllLeaveRequests] = useState(false);

  const [progress, setProgress] = useState(0);

  const [timerRunning, setTimerRunning] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [seconds, setSeconds] = useState(0);

//Locatio Checkin

  const [location, setLocation] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const [address, setAddress] = useState(null);

  const [loading, setLoading] = useState(false);

 

 

  useEffect(() => {

    let interval;

    if (isActive) {

      interval = setInterval(() => {

        setSeconds((prevSeconds) => prevSeconds + 1);

      }, 1000);

    } else {

      clearInterval(interval);

    }

    return () => clearInterval(interval);

  }, [isActive]);

 

  useEffect(() => {

    (async () => {

      let foregroundPermission = await Location.requestForegroundPermissionsAsync();

      if (foregroundPermission.status !== 'granted') {

        setErrorMsg('Foreground permission to access location was denied');

        return;

      }

 

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);

 

      // Get address based on current location

      const { latitude, longitude } = location.coords;

      reverseGeocode(latitude, longitude);

    })();

  }, []);

 

  const chooseMostRelevantAddress = (addressList) => {

    return addressList[0];

  };

 

  const reverseGeocode = async (lat, lon) => {

    try {

      let addressResponse = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lon });

      // Choose the most relevant address based on your criteria

      const mostRelevantAddress = chooseMostRelevantAddress(addressResponse);

      setAddress(mostRelevantAddress);

    } catch (error) {

      console.error('Error fetching address:', error);

      setAddress('Address not available');

    }

  };

 

  const calculateDistance = () => {

    if (!location) return null;

 

    const { latitude, longitude } = location.coords;

    const { latitude: validLatitude, longitude: validLongitude } = VALID_CHECKIN_LOCATION;

 

    const distance = calculateDistanceBetweenPoints(latitude, longitude, validLatitude, validLongitude);

 

    return distance;

  };

 

  const calculateDistanceBetweenPoints = (lat1, lon1, lat2, lon2) => {

    const earthRadius = 6371; // in kilometers

    const dLat = (lat2 - lat1) * (Math.PI / 180);

    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =

      Math.sin(dLat / 2) * Math.sin(dLat / 2) +

      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

 

    return distance; // in kilometers

  };

 

  const formatHours = (timeInSeconds) => {

    const hours = Math.floor(timeInSeconds / 3600);

    return hours.toString().padStart(2, '0');

  };

 

  const formatMinutes = (timeInSeconds) => {

    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    return minutes.toString().padStart(2, '0');

  };

 

  const formatSeconds = (timeInSeconds) => {

    const seconds = Math.floor(timeInSeconds % 60);

    return seconds.toString().padStart(2, '0');

  };

 

 

    const handleCheckIn = () => {

    setLoading(true);

    const distance = calculateDistance();

    if (distance !== null && distance <= 0.1) {

      // Within 100 meters

      const { latitude, longitude } = location.coords;

      const { latitude: validLatitude, longitude: validLongitude } = VALID_CHECKIN_LOCATION;

      const distanceFromValidLocation = calculateDistanceBetweenPoints(latitude, longitude, validLatitude, validLongitude);

      if (distanceFromValidLocation <= 0.1) {

        setIsActive(true);

        console.log('Check-in successful!');

        alert(`Check-in successful! Your Corrent Location:${address.formattedAddress}`)

        setErrorMsg('Check-in successful!');

      } else {

        setIsActive(false);

        console.log('You are too far from the check-in location.');

        alert("You are too far from the check-in location.")

        setErrorMsg('You are too far from the check-in location.');

      }

    } else {

      setIsActive(false);

      console.log('You are too far from the check-in location.');

      alert("You are too far from the check-in location.")

      setErrorMsg('You are too far from the check-in location.');

    }

    setLoading(false);

  };

 

 

  const handleCheckOut=()=>{

    const { latitude, longitude } = location.coords;

    const { latitude: validLatitude, longitude: validLongitude } = VALID_CHECKIN_LOCATION;

    calculateDistanceBetweenPoints(latitude, longitude, validLatitude, validLongitude);

    console.log('Check-Out successful!');

    alert(`Check-Out successful! Your Corrent Location:${address.formattedAddress}`)

    setErrorMsg('Check-Out successful!');

    setIsActive(false);

  }

 

 

 

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

        <Text style={{ marginTop: 10 }}>{item.description}</Text>

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