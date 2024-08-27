import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const CategoriesItemTil = ({title,color,image,onSelect}) => {
  
  return (
    <View style={styles.GridItem}>
        {/* <TouchableOpacity style={{flex:1}} onPress={onSelect}> */}
        <TouchableOpacity onPress={onSelect} style={{flex:1}}>

        <View style={{...styles.Continer,backgroundColor:color}}>
          <View style={{backgroundColor:"",flex:1,justifyContent:'center',alignItems:"center"}}>

            <Image source={image} style={{ width: 50, height: 50,}} />
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
          </View>
           {/* <Text style={styles.title} numberOfLines={2}>{title}</Text> */}
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default CategoriesItemTil

const styles = StyleSheet.create({
    GridItem:{
        flex:1,
        margin:25,
        height:150,
        overflow:'hidden',
        // elevation:7,
        borderRadius:10,
        justifyContent:"center",alignContent:"center",
        
    },
    Continer:{
        flex:1,
        padding:10,
        justifyContent:"center",
        alignItems:"Center", 
    borderRadius:10
  },
  title:{
    fontSize:13,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:10
    // fontFamily:"Poppins-Bold"
  }
})