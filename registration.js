
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';

const RegistrationApp = () => {
const [name, setName]=useState('shan');
const[person, setPerson]=useState('Latifah');
const[college, setCollege]=useState('CST');
const[uni, setUni]=useState("University of Rwanda");
const[year, setYear]=useState(3);
const[age, setAge]=useState(3);
const Submitting=()=>{
setName(val);
setCollege(val);
setYear(val);
setUni(val);
setAge(val);
}

  return (
    <View style={styles.boldText}>
    <Text style={styles.red}>REGISTRATION FORM</Text>
      <Text style={styles.blue}>Enter name:</Text>
      <TextInput style={styles.input} onChangeText={(val)=>setName(val)}/>
      <Text style={styles.blue}>Enter Age:</Text>
      <TextInput style={styles.input} onChangeText={(val)=>setAge(val)}/>
      <Text style={styles.blue}>Enter university:</Text>
      <TextInput style={styles.input} onChangeText={(val)=>setUni(val)}/>
      <Text style={styles.blue}>Enter college:</Text>
      <TextInput style={styles.input} onChangeText={(val)=>setCollege(val)}/>
      <Text style={styles.blue}>Enter level:</Text>
      <TextInput style={styles.input} onChangeText={(val)=>setYear(val)}/>
      <View  style={styles.btn}>
      <Button title='Submit' onPress={Submitting}/>
      </View>
     <Text style={styles.blue}>Hello, {name}! you are {age} years old </Text>
      <Text style={styles.blue}>Hello, {name}! you are a student in {uni} </Text>
        <Text style={styles.blue}>Hello, {name}  
       
       you study in {college}! you are in year {year}</Text>
      <Text style={styles.blue}>I AM LEARNING REACT NATIVE</Text>
         </View>
         );
}

   
const styles = StyleSheet.create({
boldText:{
flex: 1,
padding: 10,
backgroundColor: '#20232A',
marginTop:20,
alignItems: 'center',
justifyContent: 'center',
},
red:{
color:'white',
marginTop:20,
fontSize:25,
fontFamily:'Optimistic Display", system-ui, -apple-system, sans-serif',
},
blue:{
color:'#52B0CB',
marginTop:20,
fontSize:17,
fontFamily:'Optimistic Display", system-ui, -apple-system, sans-serif',
},
btn:{
marginTop:20
},
input:{
backgroundColor:'white',
borderRadius:2,
padding:4,
},
});
export default RegistrationApp ;
