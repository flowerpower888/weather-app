import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { AppLoader } from '../components/AppLoader';
import { Table } from './../components/Table';


export const RecentSearchesScreen = () => {
  const [recievedData, setRecievedData] = useState(null)

  useEffect(() => {
    fetch('https://weather-app-289621.firebaseio.com/query.json', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => setRecievedData(data))
  }, [])


  return recievedData ? (
    <ScrollView>
      <Table data={[Object.keys(recievedData).map(key => recievedData[key])][0]} />
    </ScrollView>
  ) 
  : <AppLoader />
}

RecentSearchesScreen.navigationOptions = {
  headerTitle: 'Recent Searches'
}