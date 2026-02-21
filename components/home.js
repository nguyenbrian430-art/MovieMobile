import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react";

export default function Home(props) {

    const [name,setName]=useState("Brian");

    return (

        <View style={styles.home}>
        <Text>{props.msg}</Text>
        <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:'center',
        justifyContent: "center",
    },
    name:{
        color:"00ff00",
        marginTop:30,
    },
});
