import React,{useState} from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity,Dimensions,FlatList } from 'react-native'


const listTab=[
    {
        status:'All'
    },
    {
        status:'Purple'
    },
    {
        status:'Green'
    }
]

const data =[
    {
        name:'virat',
        status:'Green'
    },
    {
        name:'dhoni',
        status:'Purple'
    },
    {
        name:'dinesh',
        status:'Green'
    },
    {
        name:'sachin',
        status:'Purple'
    },
    {
        name:'ashwin',
        status:'Green'
    }
]

const Filter = () => {
    const[status,setStatus] = useState('All')
    const[dataList,setDataList] = useState(data)

    const setStatusFilter = status => {
        if(status !== 'All'){
            setDataList([...data.filter(en => en.status === status)])
        }else{
            setDataList(data)
        }
        setStatus(status)
    }

    const list = ({item,index}) =>{
        return(
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemLogo}>
                    <Image 
                    style={styles.itemImage}
                    source={require('../assets/male.png')}
                    />
                </View>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                <View style={[styles.itemStatus,{backgroundColor: item.status ==='Purple' ? '#e5848e' :'#69c080'}]}>
                    <Text>{item.status}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container} >
           <View style={styles.Tab} >
               {
                   listTab.map(en => (
                       <TouchableOpacity key={en}  style={[styles.btnTab,status === en.status && styles.btnActiveL ]} onPress={() => setStatusFilter(en.status)} >
                   <Text style={[{color:'black',fontSize:18},status === en.status && styles.textTabActive]}>{en.status}</Text>
               </TouchableOpacity>
                   ))
               }
           </View>
           <FlatList
           data={dataList}
           keyExtractor={(enn,i) => i.toString()}
           renderItem={list}
           />
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingHorizontal:15,
      justifyContent:'center'
  },
  Tab:{
      alignSelf:'center',
      marginBottom:20,
      flexDirection:'row',

  },
  btnTab:{
      width:Dimensions.get('window').width/3.5,
      flexDirection:'row',
      borderWidth:0.5,
      borderColor:'#EBEBEB',
      padding:10,
      justifyContent:'center'
  },
  btnActiveL:{
    backgroundColor:'#E6838D'
  },
  textTabActive:{
      color:'white',
      fontWeight:'bold'
  },
  itemContainer:{
      flexDirection:'row',
      padding:15
  },
  itemLogo:{
    padding:15
  },
  itemImage:{
      width:50,
      height:50
  },
  itemBody:{
    flex:1,
    paddingHorizontal:10,
    justifyContent:'center'
  },
  itemName:{
    fontWeight:'bold',
    fontSize:16
  },
  itemStatus:{
      backgroundColor:'green',
      paddingHorizontal:10,
      justifyContent:'center'
  }
})
