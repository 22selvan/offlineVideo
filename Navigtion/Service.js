// import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import services from '../data'
// import CategoriesItemTil from '../Component/CategoriesItemTil'

// const LeaveTracker = require('../assets/images/exclamation-mark.png');
// const TimeTracker = require('../assets/images/clock.png');
// const Attendance = require('../assets/images/schedule.png');
// const Travel = require('../assets/images/plane.png');
// const HrLeter = require('../assets/images/stars.png');
// const LMS = require('../assets/images/graduate.png');
// const Announcement = require('../assets/images/marketing.png');
// const organization = require('../assets/images/flat.png');
// const files = require('../assets/images/folders.png');
// const Task = require('../assets/images/task.png');

// const services = [
//   {id:1,title:"Leave Tracker",color:"white",image:LeaveTracker,navi:"LeaveTracker"},
//   {id:2,title:"Time Tracker",color:"white",image:TimeTracker,navi:"TimeTracker"},
//   {id:3,title:"Attendance",color:"white",image:Attendance,navi:"Attendence"},
//   {id:4,title:"Files",color:"white",image:files,navi:"Files"},
//   {id:5,title:"Organization",color:"white",image:organization,navi:"Organization"},
//   {id:6,title:"Travel",color:"white",image:Travel,navi:"Travel"},
//   {id:7,title:"Announcement",color:"white",image:Announcement,navi:"Announcement"},
//   {id:8,title:"LMS",color:"white",image:LMS,navi:"LMS"}, 
//   {id:9,title:"Hr Leter",color:"white",image:HrLeter,navi:"HrLeter"},
//   {id:10,title:"Tasks",color:"white",image:Task,navi:"Tasks"},
// ]



// const Service = () => {
//   const navigation = useNavigation()

//   const renderGridItem=(itemData)=>{

//     return(
//       <CategoriesItemTil title={itemData.item.title} 
//       color={itemData.item.color} 
//       image={itemData.item.image} 
      
//       onSelect={()=>navigation.navigate(itemData.item.navi,{CategoresId:itemData.item.id})}
//         //   onSelect={()=>navigation.navigate("CatergoryMeal",{CategoresId:itemData.item.id})}
//       />
//     )
//   }

// //   useEffect(()=>{
// //     navigation.setOptions({
// //       headerLeft:()=>{
// //         return(
// //           <Ionicons name='menu' size={23} color='white' style={{ marginLeft: 10 }} onPress={()=>navigation.toggleDrawer()}/>
// //           // <HeaderButtons HeaderButtonComponent={headerComponent}>
// //           //   <Item title='menu' iconName='menu'/>
// //           // </HeaderButtons>
// //         )
// //       }
// //     })
// //   },[navigation])
//   return (

//     <FlatList style={{backgroundColor: "#f1fbff",flex:1}} keyExtractor={Item=>Item.id}
// data={services}
// numColumns={2}
// renderItem={renderGridItem}
// showsVerticalScrollIndicator={false}


// />
//   )
// }

// export default Service

// const styles = StyleSheet.create({})


import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons';

// import services from '../data'

import CategoriesItemTil from '../Component/CategoriesItemTil'

import AsyncStorage from '@react-native-async-storage/async-storage';

 

const LeaveTracker = require('../assets/images/exclamation-mark.png');

const TimeTracker = require('../assets/images/clock.png');

const Attendance = require('../assets/images/schedule.png');

const Travel = require('../assets/images/plane.png');

const HrLeter = require('../assets/images/stars.png');

const LMS = require('../assets/images/graduate.png');

const Announcement = require('../assets/images/marketing.png');

const organization = require('../assets/images/flat.png');

const files = require('../assets/images/folders.png');

const Task = require('../assets/images/task.png'); 
const Admin = require('../assets/images/Admin.png'); 

 

const services = [

  {id:1,title:"Admin Screen",color:"white",image:Admin,navi:"AdminHome",Rightes:[,'004']},

  {id:2,title:"Leave Tracker",color:"white",image:LeaveTracker,navi:"LeaveTracker",Rightes:['001','004','002','003']},

  {id:3,title:"Time Tracker",color:"white",image:TimeTracker,navi:"TimeTracker",Rightes:['001','004','002','003']},

  {id:4,title:"Attendance",color:"white",image:Attendance,navi:"Attendence",Rightes:['002','004','003']},

  {id:5,title:"Files",color:"white",image:files,navi:"Files",Rightes:['002','004','003']},

  {id:6,title:"Organization",color:"white",image:organization,navi:"Organization",Rightes:[,'004','003']},

  {id:7,title:"Travel",color:"white",image:Travel,navi:"Travel",Rightes:[,'004','003']},

  {id:8,title:"Announcement",color:"white",image:Announcement,navi:"Announcement",Rightes:[,'004','003']},

  {id:9,title:"LMS",color:"white",image:LMS,navi:"LMS",Rightes:[,'004']},

  {id:10,title:"Hr Leter",color:"white",image:HrLeter,navi:"HrLeter",Rightes:[,'004']},

  {id:11,title:"Tasks",color:"white",image:Task,navi:"Tasks",Rightes:[,'004']},



]

 

 

 

const Service = () => {

  const navigation = useNavigation()

  const [userId, setUserId] = useState(null);

 

  console.log(userId,"userIduserIduserIduserId");

 

  useEffect(() => {

    // Fetch CRN from AsyncStorage when the component mounts

    const fetchCRN = async () => {

      try {

        const crn = await AsyncStorage.getItem('CRN');

        if (crn !== null) {

          setUserId(crn);

          if(crn === '001'){

 

          }

        } else {

          console.log("CRN not found in AsyncStorage");

        }

      } catch (error) {

        console.error('Error fetching CRN from AsyncStorage:', error);

      }

    };

 

    fetchCRN(); // Call the function to fetch CRN

  }, []);

 

  const renderGridItem = (itemData) => {
    if (!userId) {
      // If userId is not set, return null or any placeholder
      return null;
    }

    // Check if the user has the right to access the service
    if (itemData.item.Rightes && itemData.item.Rightes.includes(userId)) {
      return (
        <CategoriesItemTil
          title={itemData.item.title}
          color={itemData.item.color}
          image={itemData.item.image}
          onSelect={() => navigation.navigate(itemData.item.navi, { CategoresId: itemData.item.id })}
        />
      );
    } else {
      // If the user doesn't have the right, return null or any placeholder
      return null;
    }
  };

//   useEffect(()=>{

//     navigation.setOptions({

//       headerLeft:()=>{

//         return(

//           <Ionicons name='menu' size={23} color='white' style={{ marginLeft: 10 }} onPress={()=>navigation.toggleDrawer()}/>

//           // <HeaderButtons HeaderButtonComponent={headerComponent}>

//           //   <Item title='menu' iconName='menu'/>

//           // </HeaderButtons>

//         )

//       }

//     })

//   },[navigation])

let slicedServices = services.slice();

if (userId === '001') {

  // Remove the item with id 3 if CRN is '002'

  slicedServices = services.slice(0,2)

}else if(userId === '002'){

  slicedServices = services.slice(0,4)

}else if(userId === '003'){

  slicedServices = services.slice(0,6)

}else{

  slicedServices = services

}

  return (

 

    <View style={styles.container}>

    {services.length > 0 && (

      <FlatList

        key={services.length} // Change the key prop to force a fresh render

        data={services}

        renderItem={renderGridItem}

        keyExtractor={(item) => item.id.toString()}

        contentContainerStyle={services.length > 3 ? styles.gridContainer : null}

        numColumns={services.length > 3 ? 2 : 1}

      />

    )}

  </View>

  )

}

 

export default Service

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#f1fbff",

  },

  gridContainer: {

    flexDirection: 'column', // Ensures items wrap into multiple rows

  },

});