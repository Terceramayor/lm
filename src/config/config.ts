import {
  createStore,
  applyMiddleware,
  Middleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {hotelsReducer} from 'states/hotels/hotels.reducer';
import {HotelsState} from 'states/hotels/hotels.state';

export interface ApplicationState {
  hotelsData: HotelsState;
}

let middlewares: Middleware[] = [thunk];

const reduxImmutableStateInvariant =
  require('redux-immutable-state-invariant').default();

middlewares = [...middlewares, reduxImmutableStateInvariant, logger];

const enhancers = [applyMiddleware(...middlewares)];

const hotelsListPersistConfig = {
  key: 'hotelsList',
  storage: AsyncStorage,
  timeout: undefined,
  blacklist: ['isLoadingHotels', 'loadingHotelsError'],
};

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  blacklist: ['hotelsList'],
};

const rootReducer = combineReducers({
  hotelsData: persistReducer(hotelsListPersistConfig, hotelsReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default function configureStore(): any {
  let store = createStore(persistedReducer, compose(...enhancers));
  let persistor = persistStore(store);
  return {store, persistor};
}
