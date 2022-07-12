import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import Header from "../components/home/Header";
import { Divider } from "react-native-elements";
import Slider from "../components/home/Slider";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

import { popularProducts } from "../data";
import Side from "../components/home/Side";
import { useSelector } from "react-redux";



export default function Home ({navigation}) {
    const open = useSelector((state) => state.side.open)
    //console.log(open)
    return(
        <SafeAreaView style={styles.main}>
            <Header />
            <Divider width={1} />
            <ScrollView showsVerticalScrollIndicator = {false} scrollEnabled = {!open}>
                <Slider />
                <Categories navigation = {navigation} />
                <Products navigation = {navigation} page = 'home' />
                {open ? <Side navigation = {navigation}/> : null}
                {/* {open ? <Side /> : null} */}
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "start",
        position: "relative"
    },
    container: {
        height: "5%",
        backgroundColor: "blue"
    }
})




{/* <View style = {styles.container}>
                
            </View> */}