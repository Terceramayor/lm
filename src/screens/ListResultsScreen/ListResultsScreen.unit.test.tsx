import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import screenNames from 'constants/screenNames';

import ListResultsScreen from './ListResultsScreen';
import hotelsMockedArray from './../../../__mocks__/hotel';

// import * as hotelActions from 'states/hotels/hotels.actions';

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
jest.mock('./../../utils/ratingToColor');
jest.mock('./../../states/hotels/hotels.actions');

const initialProps = {
  hotelDetails: hotelsMockedArray,
  navigation: {navigate: jest.fn()},
};

const mockedStoreObject = {
  hotelsData: {
    hotelsList: '',
    hotelslistFiltered: '',
    isLoadingHotels: '',
    loadingHotelsError: '',
  },
};

const navigateMethodSpyOverMock = jest.spyOn(
  initialProps.navigation,
  'navigate',
);

const mockStore = configureStore();

const renderComponent = (store: any) => {
  return render(
    <Provider store={store}>
      <ListResultsScreen />
    </Provider>,
  );
};

describe('Given the HotelOption component', () => {
  let store: any;

  describe('When rendered with valid props', () => {
    store = mockStore(mockedStoreObject);
    const {queryByText} = renderComponent(store);
    it('The city name should be rendered', () => {
      expect(
        queryByText(initialProps.hotelDetails[0].location.city),
      ).toBeDefined();
    });
  });
});
