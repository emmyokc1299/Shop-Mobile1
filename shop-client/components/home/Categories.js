import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";



export default function({navigation}) {
    return(
        <View style = {{padding: 10,}}>
            {
                categories.map(item => (
                    <CategoryItem item = {item} key = {item.id} navigation = {navigation}/>
                ))
            }
        </View>
    )
}

