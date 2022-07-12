import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/sideRedux";

export default function () {

    //const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const open = useSelector((state) => state.side.open)

    const handlePress = () => {
        dispatch(setOpen())
    }
    return (
        <View style = {styles.main} >
            { open === false ? 
            (<TouchableOpacity style = {{marginTop: 2, flex : 0.7}} onPress = {() => handlePress() }>
                <EvilIcons name = "navicon" size={34} color = "#2F4F4F"/>
            </TouchableOpacity>)
                :
            (<TouchableOpacity style = {{marginTop: 2, flex : 0.7}} onPress = {() => handlePress()}>
            <EvilIcons name = "close" size={34} color = "#2F4F4F"/>
            </TouchableOpacity>)
            }
            <Text style = {styles.text}>
                SHOP
            </Text>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: "6%",
        color: "#20B2AA"
    },
    text: {
        fontWeight: 600,
        fontSize: 24,
        marginTop: -2,
        flex: 1,
        color: "#2F4F4F"
    }
})