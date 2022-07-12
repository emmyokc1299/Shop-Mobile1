import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"


export default function Product ({item, navigation}) {
    //console.log(item)
    return (
        <View style = {{position: "relative", marginBottom: 20}}>
            <Image
            source = {{uri: item.img}} 
            style = {styles.image}/>
            <TouchableOpacity style = {styles.image_view} onPress = {() => navigation.navigate("Product", {Item: item})}>
            <EvilIcons name = "search" size={34} color = "#2F4F4F"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image_view: {
        width: 50, 
        height: 50, 
        backgroundColor: "white", borderRadius: "50%", 
        paddingTop: 7, 
        paddingLeft: 7,
        position: "absolute",
        top: "40%",
        left: "41%"
    },
    image: {
        width: 250,
        height: 250, 
        marginLeft: 10, 
        borderRadius: 10
    }
})




/**
 * export default function Product ({item}) {
    

    return (
        <View style = {{position: "relative"}}>
            <Image
            source = {{uri: item.img}} 
            style = {{width: 200, height: 250, marginLeft: 10, borderRadius: 10}}/>
            <View style = {styles.image_view}>
            <EvilIcons name = "search" size={34} color = "#2F4F4F"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image_view: {
        width: 50, 
        height: 50, 
        backgroundColor: "white", borderRadius: "50%", 
        paddingTop: 7, 
        paddingLeft: 7,
        position: "absolute",
        top: "40%",
        left: "41%"

    }
})
 */