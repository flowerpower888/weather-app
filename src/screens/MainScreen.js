import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { CurrentLocation } from '../components/CurrentLocation';
import { CurrentWeather } from '../components/CurrentWeather';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const API_KEY = 'pk.eyJ1IjoiZmx2dnJwdnZyIiwiYSI6ImNrZjRtM3BjMTBlaXoyem1kM3NlZ2Q5czQifQ.0sHYMvC_j9tjOqO8_5ua9Q'


export const MainScreen = () => {
  const [coords, setCoords] = useState(null);
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

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
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data.coords.longitude},${data.coords.latitude}.json?access_token=${API_KEY}`)
          .then(res => res.json())
          .then(data => {
            setLocation(data.features[0].place_name)
          })
      })
  }, []);

  return coords ?  (
    <View style={styles.center}>
      <CurrentLocation coords={coords} location={location} />
      <CurrentWeather coords={coords} />
    </View>
  ) : null
};

MainScreen.navigationOptions = {
  headerTitle: 'Current Weather'
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
})