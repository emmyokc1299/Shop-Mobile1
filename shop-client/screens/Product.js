import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Button, TouchableOpacity, FlatList, TextInput } from "react-native";
import Cart from "../components/home/Cart";
import { publicRequest } from "../requestMethods";
import {addToCart} from '../redux/sideRedux'


import { useDispatch, useSelector } from "react-redux";


export default function Product ({route, navigation}) {
    const {Item} = route.params
    //console.log(Item)
    // /console.log(route.params.item.img)
    const [quantity, setQuantity] = useState(1)
    const [item, setItem] = useState({})
    const dispatch = useDispatch()
    let prod = []

    const handleClick = () => {
        dispatch(addToCart({...item, quantity}))
    } 

    const handlePress = (type) => {
        if (type === 'dec' && quantity > 1) {
            setQuantity(quantity - 1)
        }
        else if (type === 'inc') {
            setQuantity(quantity + 1)
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            console.log(Item._id)
            try{
                const res = await publicRequest.get(`/products/find/${Item._id}`)
                setItem(res.data)
                console.log(res.data)
            }
            catch {

            }
        }
        getProduct()
    }, [Item])

    return (
        <ScrollView vertical showsVerticalScrollIndicator = {false} style={{backgroundColor: "white"}}>
                <Image 
                source={{uri: item?.img}}
                style = {styles.image}
                />
                <View style={{padding: 10}}> 
                    <Text style={{fontSize: 20, fontWeight: 600, marginButtom: 15}}>{item?.title}</Text>

                    <Text style={{fontSize: 18, marginBottom: 20, fontWeight: 100}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem enim ratione odio animi quod facere eos. Accusantium amet iste magni. Repellendus ipsam voluptatum quae blanditiis assumenda omnis debitis magni!</Text>

                    <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 15}}>$ {item?.price}</Text>

                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontSize: 18, fontWeight: 100}}>Color <View ></View> <View></View> </Text>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, width: "100%", height: 100}}>
                        <View style={{flexDirection: "row", marginTop: 5 }}>
                            <TouchableOpacity onPress={() => handlePress("dec")}><Text style = {styles.change}>—</Text></TouchableOpacity>
                            <TextInput style={styles.quantity} onChangeText={() => {}} value= {quantity} placeholder = {quantity} />
                            <TouchableOpacity onPress={() => handlePress("inc")}><Text style = {styles.change} >+</Text></TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => handleClick()}><Text style={styles.cart}>Add to cart</Text></TouchableOpacity>
                    </View>

                </View>

                <Cart navigation={navigation} />
            
        </ScrollView> 
    )
}  

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        marginBottom: 15
    },
    quantity: {
        width: 70,
        height: 35,
        textAlign: "center",
        fontSize: 26,
        marginRight: 10
    },
    change: {
        fontSize: 26,
        marginRight: 10
    },
    cart: {
        padding: 10,
        fontSize:20,
        marginTop: 4,
        fontWeight: 100,
        border: "1px solid black",
        borderRadius: 5,
        paddingRight: 5,
        paddingLeft: 5
    },
})