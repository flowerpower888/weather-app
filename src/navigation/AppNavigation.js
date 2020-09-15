import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MainScreen } from '../screens/MainScreen'
import { RecentSearchesScreen } from '../screens/RecentSearchesScreen'
import { THEME } from './../theme';

const MainNavigator = createStackNavigator({
  Main: MainScreen,
  'Recent Searches': {
    screen: RecentSearchesScreen
  }
},
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR
      },
      headerTintColor: '#fff'
    }
  }
)

const RecentSearchesNavigator = createStackNavigator(
  {
    RecentSearches: RecentSearchesScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR
      },
      headerTintColor: '#fff'
    }
  }
)

const BottomNavigator = createBottomTabNavigator({
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      tabBarIcon: info => (<Ionicons name='ios-home' size={25} color={info.tintColor} />)
    }
  },
  'Recent Searches': {
    screen: RecentSearchesNavigator,    navigationOptions: {
      tabBarIcon: info => (<Ionicons name='ios-list' size={25} color={info.tintColor} />)
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR
  }
})

export const AppNavigation = createAppContainer(BottomNavigator)