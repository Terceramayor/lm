import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import screenNames from 'constants/screenNames';

import ListResultsScreen from './ListResultsScreen';
import hotelsMockedArray from './../../../__mocks__/hotel';

import * as hotelActions from 'states/hotels/hotels.actions';

jest.mock('./../../components/Spinner/Spinner', () => 'mockedSpinner');
jest.mock(
  './../../components/HotelOption/HotelOption',
  () => 'mockedHotelOption',
);
jest.mock(
  './../../components/ThumbSelector/ThumbSelector',
  () => 'mockedThumbSelector',
);

jest.mock('react-native-elements');
jest.mock('@react-native-community/checkbox', () => 'mockedCheckbox');
jest.mock('./../../utils/ratingToColor');
jest.mock('./../../states/hotels/hotels.actions');

const initialProps = {
  navigation: {navigate: jest.fn()},
};

const mockedStoreObject = {
  hotelsData: {
    hotelsList: hotelsMockedArray,
    hotelslistFiltered: hotelsMockedArray,
    isLoadingHotels: false,
    loadingHotelsError: false,
  },
};

const navigateMethodSpyOverMock = jest.spyOn(
  initialProps.navigation,
  'navigate',
);

const fetchHotelsListSpyOverMock = jest.spyOn(hotelActions, 'fetchHotelsList');

const mockStore = configureStore();

const renderComponent = (store: any, props: any) => {
  return render(
    <Provider store={store}>
      <ListResultsScreen navigation={props} />
    </Provider>,
  );
};

describe('Given the HotelOption component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let store: any;

  describe('When rendered with valid props', () => {
    it('The redux action should be called', () => {
      store = mockStore(mockedStoreObject);
      renderComponent(store, initialProps.navigation);
      expect(fetchHotelsListSpyOverMock).toHaveBeenCalled();
    });
  });

  describe('When the hotels list is successfully fetched', () => {
    it('The element with test ID should be defined', () => {
      store = mockStore(mockedStoreObject);
      const {queryByTestId} = renderComponent(store, initialProps.navigation);
      expect(queryByTestId('hotelsFlatList')).toBeDefined();
    });
  });

  describe('When the hotels list is being fetched', () => {
    it('The element with test ID should not be defined', () => {
      store = mockStore({
        ...mockedStoreObject,
        hotelsData: {...mockedStoreObject.hotelsData, isLoadingHotels: true},
      });
      const {queryByTestId} = renderComponent(store, initialProps.navigation);
      expect(queryByTestId('hotelsFlatList')).toBeNull();
    });
  });

  describe('When the user presses on the filters block', () => {
    it('The text string sort by price should be rendered', async () => {
      store = mockStore(mockedStoreObject);
      const {getByTestId, getByText} = renderComponent(
        store,
        initialProps.navigation,
      );
      const filtersOnPress = await waitFor(() => getByTestId('filtersOnPress'));
      fireEvent.press(filtersOnPress);
      expect(getByText('Sort by price')).toBeDefined();
    });
  });
});
