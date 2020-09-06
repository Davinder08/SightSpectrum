import React from 'react';
import {View, Dimensions} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';

import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const Stacks = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar animated={false} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <NavigationContainer>
          <Stacks.Navigator initialRouteName="FirstScreen">
            <Stacks.Screen name="FirstScreen" component={FirstScreen} />
            <Stacks.Screen name="SecondScreen" component={SecondScreen} />
            <Stacks.Screen name="ThirdScreen" component={ThirdScreen} />
          </Stacks.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      {/* <SafeAreaView style={{flex: 0, backgroundColor: 'red'}} /> */}
    </>
  );
};

export default App;
