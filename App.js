import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import OnboardScreen from './src/screens/OnboardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Loading =()=>{
  <View>
    <ActivityIndicator size="large"/>
  </View>
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnBoading, setViewOnBoading] = useState(false);

  const checkOnBoarding = async () =>{
 try{
   const value=  await AsyncStorage.getItem('@viewOnBoarding');
   if(value !== null){
    setViewOnBoading(true)
   }
 }catch (err){
  console.log('Error @checkOnBoarding:', err)
  
 }finally{
  setLoading(false)
 }
  }
  useEffect(()=>{
    checkOnBoarding()
  }, [])
  return (
    <View>  
      {
        loading ? <Loading/>: viewOnBoading ? <HomeScreen/> : <OnboardScreen/>
      }
    </View>
  );
}

