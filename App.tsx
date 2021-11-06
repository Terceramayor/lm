import React from 'react';
import {Text} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListResultsScreen from 'screens/ListResultsScreen';
import configureStore from 'config/config';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={configureStore().store}>
        <PersistGate
          loading={<Text>loading</Text>} //Tobe changed by custom component
          persistor={configureStore().persistor}>
          <Stack.Navigator>
            <Stack.Screen
              name="ListResultsScreen"
              component={ListResultsScreen}
            />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
