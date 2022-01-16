import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time/60);
    const secs = time - mins * 60;
    return{mins:formatNumber(mins),secs:formatNumber(secs)} 
}

const Counter = () => {
    const[remainingSecs,setRemainingSecs] = useState(0);
    const[isActive,setIsActive] = useState(false);
    const{mins,secs} = getRemaining(remainingSecs)

  const  toggle = () =>{
        setIsActive(!isActive);
    }

    const reset = () =>{
        setRemainingSecs(0);
        setIsActive(false)
    }

    useEffect(() =>{
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs+1);
            },1000);
        }else if(!isActive && remainingSecs !== 0){
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    },[isActive,remainingSecs])
    
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
            <Text style={{fontSize:90,fontWeight:'bold',color:'white',marginBottom:50}}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={toggle} style={{height:100,width:100,borderRadius:50,borderColor:'orange',borderWidth:5,alignItems:'center',justifyContent:'center'}} >
                <Text style={{fontSize:22,fontWeight:'bold',color:'blue'}}>{isActive ? 'Pause': 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} style={{height:100,width:100,borderRadius:50,margin:20,borderColor:'red',borderWidth:5,alignItems:'center',justifyContent:'center'}} >
                <Text style={{fontSize:22,fontWeight:'bold',color:'blue'}}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({})
