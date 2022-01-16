import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const delay=15

const SetOut = () => {
const[show,setShow] = useState(false);

useEffect(()=>{
    let timer1 = setTimeout(()=>
        setShow(true),delay*1000)
        return()=>{
            clearTimeout(timer1);
        };
},[])

    return show ? (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}}>your Data is Loaded</Text>
        </View>
    ):(
        <View>
        <Text style={{color:'black'}}>wait {delay} seconds to load </Text>
        </View>
    )
}

export default SetOut

