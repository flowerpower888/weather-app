import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export const CurrentWeather = ({ temp, iconCode }) => {

    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    container: {
        marginTop: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});