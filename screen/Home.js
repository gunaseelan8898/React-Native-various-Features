import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Home = props => {
    return (
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:'center'}}>
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate('filter')
            }} style={{height:50,width:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Filtering</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate('slide')
            }} style={{height:50,width:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Image Slider</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate('out')
            }} style={{height:50,width:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>F/L animate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate('interval')
            }} style={{height:50,width:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>setInterval</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{
                props.navigation.navigate('count')
            }} style={{height:50,width:150,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>Counter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
