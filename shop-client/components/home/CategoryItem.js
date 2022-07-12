import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from "react-native";



export default function ({navigation, ...props}) {

    //navigation => handlePress(navigation)
    const handlePress = () => (
        //console.log("press handler")
        navigation.navigate("ProductList", {
            item: item
        })
    )

    const {item} = props

    return (
        <View style = {{position: "relative", marginBottom: 10}}>
            <Image
            source = {{uri: item.img}} 
            style = {{width: "100%", height: 300}}/>
            <View style = {styles.absolute}>
                <Text style = {styles.title}>{item.title}</Text>
                <TouchableOpacity style = {styles.button} onPress={handlePress}>
                    <Text style = {{fontSize: 16, margin: "auto"}}>SHOP NOW</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: "40%",
        width: "100%",
        alignItems: "center",

        // border: "2px solid black"

    },
    title: {
        color: "white",
        width: "100%",
        fontSize: 22,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 8,
    },
    button: {
        height: 40,
        width: 120,
        backgroundColor: "#5F9EA0",

        // border: "2px solid black"
    }
})