import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import { popularProducts } from "../../data";
import Product from "./Product";
import axios from "axios";


export default function Products ({page, navigation, cat, filters}) {

    const [products, setProducts] = useState([])

    const [filteredProducts, setFilteredProducts] = useState([])

    //console.log(cat, filters)

    useEffect(() => {
        //console.log(cat)
        const getProducts = async () => {
            try{
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products`)
                setProducts(res.data)
                //console.log(res.data)
            } catch(err) {
                console.log(err)
            }

        }
        getProducts()
    }, [cat])


    useEffect(() => {
        // cat && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))))
        const res =  cat && products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
        setFilteredProducts(res)
        //console.log(res)

        //console.log(products)
    }, [products, cat, filters])
    
    //[products, cat, filters]

        if (page === "home")
        return(
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{marginLeft: 10}}>
            {products.map((item) => (
                <Product item={item} key = {item.id}  page = "home" navigation = {navigation} />
            ))}
            </ScrollView>   
        )

        else if (page === "productList") {
            return(
            <ScrollView vertical showsVerticalScrollIndicator = {false} style = {{margin: "auto", marginTop: 35}}>
                { filteredProducts.map((item) => (
                    <Product item={item} key = {item._id} page = "productList" navigation = {navigation}/>
                ))}
            </ScrollView>)
        }
}



/**
 * the Products displayed in the homepage don't seem to be gotten from the api but rather form the data folder in this project
 */







/**
 * (
            <ScrollView vertical showsVerticalScrollIndicator = {false} style = {{margin: "auto", marginTop: 35}}>
                {popularProducts.map((item) => (
                    <Product item={item} key = {item.id} page = "productList" navigation = {navigation}/>
                ))}
            </ScrollView>)
 */