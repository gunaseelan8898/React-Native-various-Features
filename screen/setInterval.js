import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const setInter = () => {
 const[seconds,setSeconds] = useState(0);

 useEffect(()=>{
     const interval = setInterval(()=>{
         setSeconds(seconds => seconds+1);
     },1000)
     return()=>clearInterval(interval);
 },[])

    return (
        <View style={{flex:1,alignItems:'center',
        justifyContent:'center'}}>
            <View style={{height:50,width:60,borderColor:'orange',borderWidth:5,borderRadius:15,padding:5,alignItems:'center',justifyContent:'center'}} >
            <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{seconds}</Text>
            </View>
            <Text style={{color:'black',fontSize:18}}> seconds have elapsed since mounting</Text>
        </View>
    )
}

export default setInter

const styles = StyleSheet.create({})
