
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';

const RegistrationApp = () => {
const [name, setName]=useState('');
const[snumber, setSnumber]=useState('');
const [display, setDisplay]=useState(false);
const clearing=()=>{
setName("");
setSnumber("");

setDisplay(false);

}

  return (
    <View style={styles.boldText}>
    <Text style={styles.red}>STUDENT FORM</Text>
      <Text style={styles.blue}>Enter name:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setName(text)}}
value={name}
/>
      <Text style={styles.blue}>Enter student number:</Text>
      <TextInput style={styles.input} onChangeText={(text)=>{setAge(text)}}value={age}/>
      
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
<Text style={styles.blue}>Student number: {age} </Text>
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
