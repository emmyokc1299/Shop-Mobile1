
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button, TouchableOpacity, FlatList } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Products from "../components/home/Products";

export default function ProductList ({navigation, route}) {
    
    const colors = [
        { label: 'white', value: 'white' },
        { label: 'black', value: 'black' },
        { label: 'red', value: 'red' },
        { label: 'blue', value: 'blue' },
        { label: 'yellow', value: 'yellow' },
        { label: 'green', value: 'green' },
    ]

    const sizes = [
        { label: 'XS', value: 'XS' },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'XL', value: 'XL' },
        { label: 'X', value: 'X' },
    ]

    const [color, setColor] = useState("white");
    const [size, setSize] = useState("XS");
    const [filters, setFilters] = useState({})
    const [isFocus, setIsFocus] = useState(false)

    //console.log(color)

    useEffect(() => {
        setFilters({
            ...filters,
            color: color,
            size: size
        })
    },[color, size])

    //console.log(filters)

    return(
        <ScrollView vertical showsVerticalScrollIndicator = {true} style = {{backgroundColor: "white"}}>
            <Text style={{fontSize: 20, fontWeight: 600}}>Dresses</Text>
            <View style = {styles.container}>
                <View style={{flexDirection: "column"}}>
                <Text style = {{fontSize: 16, fontWeight: 600, marginBottom: 6}}>Colors:  <Text>{color}</Text></Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && {borderColor: `${color}`}]}
                    data={colors}
                    value={color}
                    labelField="label"
                    valueField="color"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setColor(item.value)
                        console.log(color)
                        setIsFocus(false)
                    }}
                />
                </View>

                <View style={{flexDirection: "column"}}>
                    <Text style = {{fontSize: 16, fontWeight: 600, marginBottom: 6}}>Sizes:  <Text>{size}</Text></Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && {borderColor: `black`}]}
                        data={sizes}
                        value={size}
                        labelField="label"
                        valueField="size"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setSize(item.value)
                            setIsFocus(false)
                        }}
                    />
                </View>

            </View>
            <Products navigation = {navigation} page="productList" cat = {route.params.item.cat} filters={filters}/>

         </ScrollView>
             
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 6,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    //   width: "35%"

    },
    dropdown: {
      maxHeight: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    label: {

    },
    

})



/**
 * 
 *  <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                    </Filter> 
                <Filter>
 */