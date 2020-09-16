import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const API_KEY = 'c859829031daf97ef9a2cda84f8d35f2'

export const CurrentWeather = ({ coords }) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data.current)
            })
    }, [])

    return weatherData ? (
        <View style={styles.container}>
            <Text>{weatherData.temp}°C </Text>
            <Image
                style={styles.logo}
                source={{
                    uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
                }}
            />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});