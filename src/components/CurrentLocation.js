import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export const CurrentLocation = ({ coords, location }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{coords.latitude + ","} {coords.longitude}</Text>
            <Entypo style={styles.icon} name="location" size={45} color="black" />
            <Text style={styles.centerText}>{location}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        textAlign: 'center'
    },
    heading: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center'
    },
    icon: {
        padding: 20
    }
});