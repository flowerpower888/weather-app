import React from 'react';
import { View } from 'react-native';
import { CurrentLocation } from './CurrentLocation';
import { CurrentWeather } from './CurrentWeather';

export const WeatherCard = ({ coords, location, temp, iconCode }) => {
    return (
        <View>
            <CurrentLocation coords={coords} location={location} />
            <CurrentWeather temp={temp} iconCode={iconCode} />
        </View>
    );
};