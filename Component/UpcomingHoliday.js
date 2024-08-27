// import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';
// import React, { useState } from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const  UpcomingHoliday = () => {
//   const CasualLeave = require('../assets/images/calendar.png');
// const Copensatory = require('../assets/images/calendar.png');
// const EarendLeave = require('../assets/images/coin.png');
// const LeaveWithoutPay = require('../assets/images/calendar.png');
// const PaternityLeave = require('../assets/images/foot.png');
// const SickLeave = require('../assets/images/plus.png'); 
// const SubbaticalLeave = require('../assets/images/rotate.png'); 

//     const   nestedDataholiday = [
//         { id: 1, title: 'Independendce Day', date: 'Thu 15 Aug, 2024',icon:"ID",color:"#5fa6cf"  },
//         { id: 2, title: 'Vinayakar Chathurthi', date: 'Sat 07 Sep, 2024',icon:"VC",color:"#6ad472"},
//         { id: 3, title: 'Gandhi Jayanthi', date: 'wed 02 Oct, 2024',icon:"GJ",color:"#6ad472" },
//         { id: 4, title: 'Ayudha Pooja', date: 'Fri 11 Oct, 2024',icon:"AP",color:"#6ad472" },
//         { id: 5, title: 'Vijayadasami', date: 'Sat 12 Oct, 2024',icon:"Vi",color:"#6ad472" },
//         { id: 6, title: 'Diwali', date: 'Thu 31 Oct, 2024',icon:"Di",color:"#6ad472" },
//       ]

//     const renderItem=({item})=>{
//         return(
//           <View style={{ flexDirection: "row",marginLeft:10}}>
//           <View style={{ flexDirection: "row", width: 50, height:50, backgroundColor: item.color, borderRadius: 50, justifyContent: "center", alignItems: "center", margin: 15,}}>
//             {/* <Ionicons style={{ justifyContent: "center", alignItems: "center" }} name={item.icon} size={25} color='black' /> */}
//             <Text style={{color:"black"}}>{item.icon}</Text>
//           </View>
//           <View style={{ justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ fontSize: 15, fontWeight: '600', margin: 20, color: "#0f0f0f" }}>{item.title} </Text>
//           </View>
//         </View>
//         )
//     }
//     const keyExtractor = (item) => item.id.toString();

//     return (
//       <FlatList
//     style={{backgroundColor:"white",height:"100%"}}
//         data={nestedDataholiday}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//       />
    
//   )
// }

// export default UpcomingHoliday 

// const styles = StyleSheet.create({
//     cardView: {
//         flex: 1,
//         width: "90%",
//         height: 300,
//         backgroundColor: "white",
//         margin: 20,
//         padding: 10,
//         borderRadius: 10,
//       },
//       viewMoreButton: {
//         marginTop: 10,
//         padding: 10,
//         backgroundColor: '#e0e0e0',
//         borderRadius: 5,
//         alignSelf: 'center',
//       },
//       viewMoreText: {
//         color: '#333',
//         fontWeight: 'bold',
//       },
// })

import { StyleSheet, Text, View, FlatList, TouchableOpacity,Image } from 'react-native';

import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

 

const  UpcomingHoliday = () => {

  const CasualLeave = require('../assets/images/calendar.png');

const Copensatory = require('../assets/images/calendar.png');

const EarendLeave = require('../assets/images/coin.png');

const LeaveWithoutPay = require('../assets/images/calendar.png');

const PaternityLeave = require('../assets/images/foot.png');

const SickLeave = require('../assets/images/plus.png');

const SubbaticalLeave = require('../assets/images/rotate.png');

 

    const   nestedDataholiday = [

      { id: 1, title: 'Independendce Day', date: 'Thu 15 Aug, 2024',icon:"ID",color:"#5fa6cf"  },

      { id: 2, title: 'Vinayakar Chathurthi', date: 'Sat 07 Sep, 2024',icon:"VC",color:"#6ad472"},

      { id: 3, title: 'Gandhi Jayanthi', date: 'wed 02 Oct, 2024',icon:"GJ",color:"#e88438" },

      { id: 4, title: 'Ayudha Pooja', date: 'Fri 11 Oct, 2024',icon:"AP",color:"#6ad472" },

      { id: 5, title: 'Vijayadasami', date: 'Sat 12 Oct, 2024',icon:"Vi",color:"#f7d139" },

      { id: 6, title: 'Diwali', date: 'Thu 31 Oct, 2024',icon:"Di",color:"#cf3c91" },

      ]

 

    const renderItem=({item})=>{

        return(

          <View style={{ flexDirection: "row",marginLeft:10}}>

          <View style={{ flexDirection: "row", width: 50, height:50, backgroundColor: item.color, borderRadius: 50, justifyContent: "center", alignItems: "center", margin: 15,}}>

            {/* <Ionicons style={{ justifyContent: "center", alignItems: "center" }} name={item.icon} size={25} color='black' /> */}

            <Text style={{color:"black"}}>{item.icon}</Text>

          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>

            <Text style={{ fontSize: 15, fontWeight: '600', margin: 20, color: "#0f0f0f" }}>{item.title} </Text>

          </View>

        </View>

        )

    }

    const keyExtractor = (item) => item.id.toString();

 

    return (

      <FlatList

    style={{backgroundColor:"white",height:"100%"}}

        data={nestedDataholiday}

        renderItem={renderItem}

        keyExtractor={keyExtractor}

      />

   

  )

}

 

export default UpcomingHoliday

 

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