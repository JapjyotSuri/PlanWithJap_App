import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'

const Card = ({id,name,info,image,price,remove}) => {
    function removePlace(){
          remove(id);
    }
    // when we write flex: 1 in the view that contains title and price it becoms very big in height as setting flex: 1 on the View component does not directly affect the height of the View.
    // Instead, it tells the View to expand to fill all available vertical space within its parent container
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={{uri: `${image}`}}></Image>

        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginRight: 9,marginLeft: -4,marginBottom: 4,marginTop: 4}}>
         <Text style={[styles.text,{fontSize: 18,fontWeight: 'bold'}]}> {name}</Text>     
         <Text style={[styles.text,{fontSize: 18,fontWeight: 'bold'}]}>{'\u20B9'}{price}</Text>
         </View>
         <Text style={styles.text}>{info}</Text>
         {/* <Button style={styles.btnRed} title='Not Interested' onPress={removePlace}/> */}
         <View style={{justifyContent: 'center',alignItems: 'center'}}>
         <Pressable style={styles.btnRed} onPress={removePlace} > 
         <Text style={styles.btnText}>Not Interested</Text>
         </Pressable>
         </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    
    image: {
        height: 200,
        width: 350,
        borderRadius: 4
    },
    card: {
        margin: 12,
        backgroundColor: 'white',//added this because react native was giving warning that shadow is not being able to calculate properly
        padding: 6,
        borderRadius: 4,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {width: 0,height: 3},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 4,
        // borderWidth: 4,
        
        
    },
    text: {
        // color: 'white',
        fontSize: 16
    },
    
    btnRed: {
       
       marginTop: 18,
       borderColor: '#b4161b',
       borderWidth: 1,
       backgroundColor: '#b4161b21',
       borderRadius: 10,
       width: '80%',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 5,
       
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#b4161b'
  }

})
export default Card

// //.btn-red:hover{
//     background-color: #b4161b21;
//     color: white;
//     transition: all 0.2s;
// }
// .btn-red{
//   margin-top: 18px;
//   padding: 10px 80px;
//   border:1px solid #b4161b;
//   cursor: pointer;
//   border-radius: 10px;
//   font-size: 18px;
//   font-weight: bold;
//   background-color: #b4161b21;

// }