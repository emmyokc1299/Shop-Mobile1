import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import ProductList from './screens/ProductList';
import Product from './screens/Product';
import Login from './screens/Login';
import Register from './screens/Register';




export default function RootNavigation () {
    
    const Stack = createNativeStackNavigator();

    const screenOptions = {
        headerShow: false,
        title: ""
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home" screenOptions = {screenOptions}>
                <Stack.Screen name = "Home" component = {Home} />
                <Stack.Screen  name="ProductList" component={ProductList}/>
                <Stack.Screen name = "Product" component={Product}/>
                <Stack.Screen  name="Login" component={Login}/>
                <Stack.Screen  name="Register" component={Register}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}