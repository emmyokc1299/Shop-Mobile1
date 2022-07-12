import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";


export default function Register() {
    const [name, onChangeName] = useState("")
    const [first_name, onChangeFirstName] = useState("")
    const [last_name, onChangeLastName] = useState("")
    const [username, onChangeUserName] = useState("")
    const [email, onChangeEmail] = useState("")
    const [password, onChangePassword] = useState("")
    const [confirmPassword, onChangeConfirmPassword] = useState("")

    const Image = {uri: `https://i.ibb.co/RvWmQ8z/ten.jpg`}

    return(
        <View >
            <ImageBackground style = {styles.container} source = {Image} resizeMode="cover">
                <View style = {styles.form}>
                    <Text style = {styles.text}>REGISTER</Text>
                    <TextInput 
                    style= {styles.input}
                    value={first_name}
                    onChangeText= {onChangeFirstName}
                    placeholder="first name"/>

                    <TextInput 
                    style= {styles.input}
                    value={last_name}
                    onChangeText= {onChangeLastName}
                    placeholder="last name"/>

                    <TextInput 
                    style= {styles.input}
                    value={username}
                    onChangeText= {onChangeUserName}
                    placeholder="username"/>

                    <TextInput 
                    style= {styles.input}
                    value={email}
                    onChangeText= {onChangeEmail}
                    placeholder="email"/>

                    <TextInput
                    style= {styles.input}
                    value={password}
                    onChangeText= {onChangePassword}
                    placeholder="password"
                    keyboardType="visible-password"
                    />

                    <TextInput
                    style= {styles.input}
                    value={confirmPassword}
                    onChangeText= {onChangeConfirmPassword}
                    placeholder=" confirm password"
                    keyboardType="visible-password"
                    />

                    <TouchableOpacity>
                        <Text style = {styles.sign}>CREATE</Text>
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
        height: 550,
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