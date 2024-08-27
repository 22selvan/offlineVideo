import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Decription } from '../Data/decription';
import { Diets } from '../Data/diets';
import { Medication } from '../Data/medications';
import { Symtoms } from '../Data/symtoms';
import { Workouts } from '../Data/workout';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';




const DiagnosisResult = ({route }) => {
   
   const navigation = useNavigation()

  const { id } = route.params
  const [decription,setDecription] = useState([]);
  const [diet,setDiets] = useState([]);
  const [medications,setMedications] = useState([]);
  const [symptoms,setSymtoms] = useState([]);
  const [precaution,setPrecaution] = useState([]);

  
  console.log(decription);

  useEffect(()=>{

 const decriptionFilter = Decription.find((item)=> item.Disease === id)

 setDecription(decriptionFilter.Description);

 const diets = Diets.find((item)=> item.Disease === id)

 setDiets(diets.Diet);
 
 const Medicat = Medication.find((item)=> item.Disease === id)

 setMedications(Medicat.Medication);
console.log(Symtoms,"Symtoms");
 const Symtom = Symtoms.find((item)=> item.Disease === id)

 setSymtoms(Symtom);
 

  },[])

  console.log(id);
  return (
    <View>
      <Text style={{fontWeight:"bold",fontSize:15,marginVertical:8,margin:5}}>Decription</Text>
      <Text style={{margin:5}}>{decription}</Text>
      <Text style={{fontWeight:"bold",fontSize:15,marginVertical:8,margin:5}}>Precaution</Text>
      <Text style={{margin:5}}>{symptoms.Precaution_1}</Text>
      <Text style={{margin:5}}>{symptoms.Precaution_2}</Text>
      <Text style={{margin:5}}>{symptoms.Precaution_3}</Text>
      <Text style={{margin:5}} >{symptoms.Precaution_4}</Text>
      <Text style={{fontWeight:"bold",fontSize:15,marginVertical:8,margin:5}}>Diet</Text>
      <Text style={{margin:5}}>{diet}</Text>
      <Text style={{fontWeight:"bold",fontSize:15,marginVertical:8,margin:5}}>Medications</Text>
      <Text style={{margin:5}}>{medications}</Text>

      <Button onPress={()=>navigation.navigate("HomeScreen")} style={{margin:5}} title="Check Another Symptom"/>
     
    </View>
  )
}

export default DiagnosisResult

const styles = StyleSheet.create({})