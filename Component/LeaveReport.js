import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LeaveRp  = () => {
  const navigation =useNavigation()
  const CasualLeave = require('../assets/images/calendar.png');
const Copensatory = require('../assets/images/calendar.png');
const EarendLeave = require('../assets/images/coin.png');
const LeaveWithoutPay = require('../assets/images/calendar.png');
const PaternityLeave = require('../assets/images/foot.png');
const SickLeave = require('../assets/images/plus.png'); 
const SubbaticalLeave = require('../assets/images/rotate.png'); 

    const    leaveData = [
      { id: 1, title: 'Casual Leave', icon: CasualLeave,taken:"2 Day(s)" ,balance:"6 Day(s)",color:"#5fa6cf" },
      { id: 2, title: 'Copensatory off', icon: Copensatory,taken:"0 Day(s)" ,balance:"0 Day(s)",color:"#6ad472"},
      { id: 3, title: 'Earend Leave', icon:EarendLeave,taken:"0 Day(s)" ,balance:"16 Day(s)",color:"#6ad472"},
      { id: 4, title: 'Leave Without Pay', icon: LeaveWithoutPay,taken:"0 Day(s)",color:"#e88438" },
      { id: 5, title: 'Paternity Leave', icon: PaternityLeave,taken:"0 Day(s)" ,balance:"0 Day(s)",color:"#e88438"},
      { id: 6, title: 'Subbatical Leave', icon: SubbaticalLeave,taken:"0 Day(s)" ,balance:"0 Day(s)",color:"#f7d139" },
      { id: 7, title: 'Sick Leave', icon:SickLeave,taken:"1 Day(s)" ,balance:"3 Day(s)",color:"#f7d139" }
    ]

    const renderItem=({item})=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate("ApplyLeave")}>
          <View style={{ flexDirection: "row",marginLeft:10}}>
          <View style={{ flexDirection: "row", width: 50, height:50, backgroundColor: item.color, borderRadius: 50, justifyContent: "center", alignItems: "center", margin: 15,}}>
            {/* <Ionicons style={{ justifyContent: "center", alignItems: "center" }} name={item.icon} size={25} color='black' /> */}
            <Image source={item.icon} style={{ width: 35, height: 35}} />
          </View>
          <View style={{ justifyContent: "center", alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 15, fontWeight: '600', margin: 3, color: "#0f0f0f" }}>{item.title} </Text>
            <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 12, fontWeight: '400', color: "#0f0f0f" }}>Taken :{item.taken} </Text>
            <Text style={{ fontSize: 12, fontWeight: '400',  color: "#0f0f0f" }}>Balance :{item.balance} </Text>
            </View>
            
          </View>
    
        </View>
        </TouchableOpacity>
        )
    }
    const keyExtractor = (item) => item.id.toString();

    return (
      <FlatList
    style={{backgroundColor:"white",height:"100%"}}
        data={leaveData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    
  )
}

export default LeaveRp 

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: "90%",
        height: 300,
        backgroundColor: "white",
        margin: 20,
        padding: 10,
        borderRadius: 10,
      },
      viewMoreButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        alignSelf: 'center',
      },
      viewMoreText: {
        color: '#333',
        fontWeight: 'bold',
      },
})