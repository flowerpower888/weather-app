import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { AppLoader } from '../components/AppLoader';
import { WeatherCard } from '../components/WeatherCard';

const WEATHER_API_KEY = 'c859829031daf97ef9a2cda84f8d35f2'
const COORDS_API_KEY = 'pk.eyJ1IjoiZmx2dnJwdnZyIiwiYSI6ImNrZjRtM3BjMTBlaXoyem1kM3NlZ2Q5czQifQ.0sHYMvC_j9tjOqO8_5ua9Q'


export const MainScreen = () => {
  const [coords, setCoords] = useState(null);
  const [location, setLocation] = useState(null)
  const [query, setQuery] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

  const getWeather = (coords) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const query = {
          coords: {
            latitude: data.lat,
            longitude: data.lon
          },
          date: new Date(data.current.dt * 1000),
          location: data.timezone,
          weather: {
            temp: `${data.current.temp}°C`,
            iconCode: data.current.weather[0].icon
          }
        }
        fetch('https://weather-app-289621.firebaseio.com/query.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(query)
        })
          .then(res => res.json())
        setQuery(query)
      })
  }

  const getLocation = (coords) => {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.longitude},${coords.latitude}.json?access_token=${COORDS_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setLocation(data.features[0].place_name)
      })
  }


  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(status => {
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
        }
      })
    Location.getCurrentPositionAsync({})
      .then(data => {
        setCoords(data.coords)
        getLocation(data.coords)
        getWeather(data.coords)
      })
  }, []);

  
  return query ? (
    <View style={styles.center}>
      <Text style={styles.heading2}>Your location: </Text>
      <WeatherCard coords={coords} location={location} temp={query.weather.temp} iconCode={query.weather.iconCode} />
    </View>
  ) : <AppLoader />
};

MainScreen.navigationOptions = {
  headerTitle: 'Current Weather'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading2: {
    color: "#000",
    margin: 5,
    fontWeight: "bold",
    fontSize: 15
  },
})