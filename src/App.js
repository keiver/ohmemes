import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ROUTES from './routes.js';

import Home from './components/Home.js';

const RootStack = createStackNavigator(
  {
    [ROUTES.HOME]: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: ROUTES.HOME,
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'black',
    },
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 0,
        height: 55,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      cardStyle: {
        backgroundColor: 'black',
        opacity: 0,
      },
    }),
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component ``321`   `340-SAsfp[
]``1khgew321[]'
 \'`
]```
  render() {
    return (
      <View style={ styles.container }>
        <RootStack />
      </View>
    );
  }
}


