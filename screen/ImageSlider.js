import React,{useState} from 'react'
import { Dimensions, StyleSheet, Text, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { onChange } from 'react-native-reanimated'

const images = [
    require('../assets/priya.jpeg'),
    require('../assets/mirnal.jpeg'),
    require('../assets/menon.jpeg'),
]

const WIDTH = Dimensions.get('window').width
const HEIGHT =Dimensions.get('window').height

const ImageSlider = () => {
    const [imgActive, setimgActive] = useState(0)

   const  onChange = (nativeEvent) => {
      if(nativeEvent) {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if(slide != imgActive){
              setimgActive(slide);
          }
      }
     }

    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
            <ScrollView 
            onScroll={({nativeEvent}) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
            >
                {
                    images.map((e,index) =>
                    <Image
                    key={e}
                    resizeMode='stretch'
                    style={styles.wrap}
                    source={e}
                    />
                    )
                }
            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    images.map((e,index) =>
                    <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>
                        ●
                    </Text>
                    )
                }
            </View>
            </View>
        </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({
    styles:{
        flex:1,
    },
    wrap:{
        width:WIDTH,
        height:HEIGHT*0.25
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dotActive:{
        margin:3,
        color:'black'
    },
    dot:{
        margin:3,
        color:'white'
    }
})
