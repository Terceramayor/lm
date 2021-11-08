import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListResultsScreen from 'screens/ListResultsScreen';
import HotelDetailsScreen from 'screens/HotelDetailsScreen';
import configureStore from 'config/config';

import screenNames from 'constants/screenNames';
import navigationStylesConfig from 'config/navigationStylesConfig';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={configureStore().store}>
        <PersistGate persistor={configureStore().persistor}>
          <Stack.Navigator>
            <Stack.Screen
              name={screenNames.SEARCH_RESULTS}
              component={ListResultsScreen}
              options={navigationStylesConfig[screenNames.SEARCH_RESULTS]}
            />
            <Stack.Screen
              name={screenNames.HOTEL_DETAILS_SCREEN}
              component={HotelDetailsScreen}
              options={navigationStylesConfig[screenNames.HOTEL_DETAILS_SCREEN]}
            />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
