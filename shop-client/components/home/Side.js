import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../redux/sideRedux";


export default function Side ({navigation}) {
    const open = useSelector((state) => state.side.open)
    const [prev, setPrev] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(open === true){
            setPrev(true)
        }
    }, [open])

    const Animation = () => {
        if (open === true){
            return fadeIn
        }
        else if(open === false && prev === true){
            return fadeOut
        }
        else{
            return null
        }
    }

    const handlePress = (screen) => {
        navigation.navigate(screen)
        dispatch(setOpen())

    }

    //open ? fadeIn : fadeOut

    return(
        <Animatable.View animation = {Animation()} duration = {300} style={styles.main}>
            <TouchableOpacity onPress={() => handlePress("Login")}>
                <Text style={styles.direct}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress("Register")}>
                <Text style={styles.direct}>REGISTER</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.direct}>ABOUT US</Text>
            </TouchableOpacity>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    main: {
        position: 'fixed',
        height: "100vh",
        width: 300,
        backgroundColor: "white",
        right: "100vw",
        top: "0vh",
        paddingTop: 50
    },
    direct: {
        fontSize: "1.25rem",
        marginLeft: 30,
        marginBottom: 30,
        fontWeight: 100
    }
})

const fadeIn = {
    easing: "ease-in",
    0: {
        opacity: 0,
        translateX: 0,
      },
    1: {
        opacity: 1,
        translateX: 300,
      },
}

const fadeOut = {
    easing: "ease-in",
    0: {
        opacity: 1,
        translateX: 300,
      },
      1: {
        opacity: 0,
        translateX: 0,
      },
}








//prev and setPrev is used to eliminate the problem i was having with the fadeOut animation executing immediately the side component renders. The problem is that when the component renders, the open variable is initially false thereby making the fadeOut animation to execute by virtue of this my now deprecated logic => open ? fadeIn : fadeOut.

// Study the useEffect and Animation function in case you are confused