
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';

const RegistrationApp = () => {
const [name, setName]=useState('');
const[person, setPerson]=useState('');
const[college, setCollege]=useState('');
const[uni, setUni]=useState('');
const[year, setYear]=useState('');
const[age, setAge]=useState('');
const [display, setDisplay]=useState(false);
const clearing=()=>{
setName("");
setAge("");
setCollege("");
setUni("");
setYear("");
setDisplay(false);

}

  return (
    <View style={styles.boldText}>
    <Text style={styles.red}>REGISTRATION FORM</Text>
      <Text style={styles.blue}>Enter name:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setName(text)}}
value={name}
/>
      <Text style={styles.blue}>Enter Age:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setAge(text)}}value={age}/>
      <Text style={styles.blue}>Enter university:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setUni(text)}} value={uni}/>
      <Text style={styles.blue}>Enter college:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setCollege(text)}} value={college}/>
      <Text style={styles.blue}>Enter level:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setYear(text)}}
      value={year}/>
      <View  style={styles.btn}>
      <Button title='Submit' onPress={()=>setDisplay(true)}/></View>
      <View  style={styles.btn}>
      <Button title='clear' onPress={clearing}/>
      </View>
      <View>
      {
        display ?
<View>
     <Text style={styles.blue}>Name: {name} </Text>
<Text style={styles.blue}>Age: {age} </Text>
        <Text style={styles.blue}>University: {uni}  </Text>
 <Text style={styles.blue}>College: {college} </Text>
 <Text style={styles.blue}>Level:: {year} </Text>
      </View>
      :null
      }
         </View>
         </View>
         );
}

   
const styles = StyleSheet.create({
boldText:{
flex: 1,
padding: 10,
backgroundColor: '#20232A',

alignItems: 'center',
justifyContent: 'center',
},
red:{
color:'white',
marginTop:10,
fontSize:25,
fontFamily:'Optimistic Display", system-ui, -apple-system, sans-serif',
},
blue:{
color:'white',
marginTop:10,
fontSize:17,
fontFamily:'Optimistic Display", system-ui, -apple-system, sans-serif',
},
btn:{
marginTop:15,
width:200
},
input:{
backgroundColor:'white',
borderRadius:2,
padding:4,
width:200
},
});
export default RegistrationApp;
