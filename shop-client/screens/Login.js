import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";


export default function Login() {
    const [name, onChangeName] = useState("")
    const [password, onChangePassword] = useState("")

    const Image = {uri: `https://i.ibb.co/RvWmQ8z/ten.jpg`}

    return(
        <View >
            <ImageBackground style = {styles.container} source = {Image} resizeMode="cover">
                <View style = {styles.form}>
                    <Text style = {styles.text}>SIGN IN</Text>
                    <TextInput 
                    style= {styles.input}
                    value={name}
                    onChangeText= {onChangeName}
                    placeholder="username"/>

                    <TextInput
                    style= {styles.input}
                    value={password}
                    onChangeText= {onChangePassword}
                    placeholder="password"
                    keyboardType="visible-password"
                    />

                    <TouchableOpacity>
                        <Text style = {styles.sign}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.acc}> Create an account</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100vh",
    },
    form: {
        margin: "auto",
        border: "1px solid black",
        marginTop: 200,
        width: "80%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: 400,
        paddingLeft: 14,
        borderRadius: 5
    },
    text: {
        fontSize: "1.25rem"
    },
    input: {
        width: "90%",
        height: 40,
        border: "1px solid black",
        paddingLeft: 10,
        fontSize: "1.05rem",
        borderRadius: 5
    },
    sign: {
        backgroundColor: "teal",
        width: 100,
        height: 43,
        borderRadius: 4,
        textAlign: "center",
        fontSize: "1.03rem",
        paddingTop: 10
    },
    acc:{
        fontSize: "1.05rem",
        textDecorationLine: "underline",
        textDecorationStyle: "double",
        textDecorationColor: "black"
    }
    

})