import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const CurrentLocation = ({ coords, location }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading2}>Your location: </Text>
            <Text style={styles.heading1}>{coords ? `${coords.latitude}, ${coords.longitude}` : ""}</Text>
            <Text style={styles.heading3}>{location}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading1: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 30,
        margin: 20
    },
    heading2: {
        color: "#000",
        margin: 5,
        fontWeight: "bold",
        fontSize: 15
    },
    heading3: {
        color: "#000",
        margin: 5
    }
});