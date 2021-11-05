import React from 'react';

import ListResultsScreen from 'screens/ListResultsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListResultsScreen" component={ListResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
