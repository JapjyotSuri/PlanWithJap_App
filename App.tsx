import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import Card from './Components/Card';

const App = () => {
  const initialData=
    [
    {
    id: 1,
    name: "Agra",
    info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
    image: "https://cdn.thecodehelp.in/Agra.jpeg",
    price: "35,758",
  },
  {
    id: 2,
    name: "Jaipur",
    info: "Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the Pink City due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.",
    image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
    price: "82,560",
  },
  {
    id: 3,
    name: "Goa",
    info: "Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
    image: "https://cdn.thecodehelp.in/Goa.jpeg",
    price: "29,695",
  },
  {
    id: 4,
    name: "Varanasi",
    info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
    image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
    price: "31,095",
  },
  {
    id: 5,
    name: "Darjeeling",
    info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
    image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
    price: "78,595",
  },
  {
    id: 6,
    name: "Jaisalmer",
    info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
    image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
    price: "68,595",
  },
  {
    id: 7,
    name: "Kochi",
    info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
    image: "https://cdn.thecodehelp.in/Kochi.jpeg",
    price: "68,595",
  },
]
  const [data,setData]=useState(initialData);
  function remove(removeId: Number){
      const newData=data.filter((place)=> {
      return   place.id!==removeId;
  })
  setData(newData);
  }
  function refreshHandler(){
      setData(initialData);
  }
  if(data.length===0){
     return(
      <SafeAreaView>
       
        <View style={styles.container}>
        <Text style={styles.headingText}>Plan with JAP</Text>
      </View>
      <View style={{height: '70%',justifyContent: 'center',alignItems: 'center'}}>
      <Text style={{fontSize: 24,fontWeight: 'bold',margin: 20}}>No more places left</Text>
      <Pressable onPress={refreshHandler} style={{backgroundColor: 'blue',height: 50,borderRadius: 10,justifyContent: 'center',alignItems: 'center', width: "50%"}}><Text style={{fontSize: 20 , color: 'white',fontWeight: 'bold'}}>Refresh</Text></Pressable>
      </View>
      </SafeAreaView>
     )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.headingText}>Plan with JAP</Text>
      </View>
      <View style={styles.cards}>
           {
            data.map((place) => (
              <Card key={place.id} {...place} remove={remove}/>
            ))
           }
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1
    
  },
  headingText: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      color: '#FFFFFF'
  },
 
  container: {
      
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      height: 100,
      
      
  },
  cards: {
    margin: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})
export default App