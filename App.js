import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from 'fbScreen';
import inScreen from 'inScreen';
import AppHeader from 'AppHeader';

export default class App extends React.Component{
  render(){
    return(
      <View style = {{flex: 1, backgroundColor: 'white'}}>
          <AppContainer />
          <AppHeader />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {fbScreen},
  Instagram: {inScreen}
});

const AppContainer = createAppContainer(TabNavigator);