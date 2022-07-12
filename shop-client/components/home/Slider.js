import React, {useState} from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { sliderItems } from "../../data";



export default function Slider () {


    const handleScroll = () => {
        console.log("It works")
    }
 
    

    return (
        <ScrollView showsHorizontalScrollIndicator = {false} onScroll = {() => handleScroll}>
            
                <View style = {{
                    backgroundColor: "#f5fafd",
                    height: "270px",
                    width: "100vw",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingLeft: "10px"
                }}>
                    <View style = {styles.textMain}>
                        <Text style = {styles.text1}>SUMMER SALE</Text>
                        <Text style = {styles.text2}>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Text>
                    </View>
                    
                </View>

        </ScrollView>
    )

} 



const styles = StyleSheet.create({
    textMain: {
        width: "70%",
        fontWeight: "400",
    },
    text1: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 600,
    },
    text2: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 400,
    }
})

/**style = {{display: "flex", flexDirection: "row", width: "300vw"}} */