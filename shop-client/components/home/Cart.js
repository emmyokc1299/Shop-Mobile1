import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity, Pressable, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";



export default function Cart({navigation}) {

    const [modalVisible, setModalVisible] = useState(false)
    const handleCheck = () => {
        setModalVisible(false)
    }

    const products = useSelector((state) => state.side.products)

    console.log(products)


    const checkOutModal = () => {
        return(
            <ScrollView vertical showsVerticalScrollIndicator = {false}>
                {/* <View>hsmfvnd,sc4s5dajsdclk</View> */}
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <TouchableOpacity onPress = {() => handleCheck()} style={{position: "absolute", top: 0, left: 0}}><Text>{"<"}====</Text></TouchableOpacity>

                        <Text style={styles.bag} >Your Bag</Text>

                        { products.map(product => <View style={{borderBottomWidth: 2}}>
                            <Image 
                                style={styles.img}
                                source={{uri: `${product.img}`}}
                            />
                            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                                <View>
                                    <Text style={{fontSize: 18, fontWeight: 100, marginBottom: 8}}>{product.title}</Text>
                                    <Text style={{fontSize: 18, fontWeight: 100, marginBottom: 8}}>{product._id}</Text>
                                    <Text style={{}}></Text>
                                    <Text style={{fontSize: 18, fontWeight: 100,}}>M</Text>
                                </View>
                                <View style={{flexDirection: "column", justifyContent: "space-evenly"}}>
                                    <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 1}}>
                                        <View style={{flexDirection: "row", marginTop: 1 }}>
                                            <TouchableOpacity><Text style = {[styles.change, {marginRight: 12}]}>-</Text></TouchableOpacity>
                                            <Text style={styles.quantity}>{product.quantity}</Text>
                                            <TouchableOpacity><Text style = {[styles.change, {marginLeft: 12}]}>+</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View><Text style={{fontSize: 18, textAlign: "center"}} >$ {product.price}</Text></View>
                                </View>
                                
                            </View>


                            
                        </View>)}

                        <TouchableOpacity style={styles.checkout} onPress={() => handleCheck()}>
                            <Text style={{fontSize: 18, color: "white", margin: "auto"}}>Checkout =={'>'} $80</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        )
    }

    return(
        <View style={{backgroundColor: "white", height: 500}}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkOutModal()}
            </Modal>

            <View>
                <TouchableOpacity style={styles.checkout} onPress={() => setModalVisible(true)}>
                    <Text style={{fontSize: 18, color: "white", margin: "auto"}}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
        height: 300
    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        height: 1000, //////////////
        paddingTop: 20, 
        position: "relative"
    },
    
    img:{
        width: "70%",
        height: 200,
        margin: "auto",
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    },
    bag: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600,
    },
    change: {
        fontSize: 20,
        fontWeight: 800
    }, 
    quantity: {
        fontSize: 20
    },
    checkout: {
        marginTop: 12,
        backgroundColor: "black",
        paddingTop: 5,
        paddingBottom: 5,
        width: '80%',
        margin: "auto",
        borderRadius: 10
    }
})



