import React from 'react';
import '@testing-library/react-native/dont-cleanup-after-each';
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import screenNames from 'constants/screenNames';

import HotelOption from './HotelOption';
import hotelsMockedArray from './../../../__mocks__/hotel';

jest.mock('react-native-elements');
jest.mock('./../../utils/ratingToColor');

const initialProps = {
  hotelDetails: hotelsMockedArray,
  navigation: {navigate: jest.fn()},
};

const navigateMethodSpyOverMock = jest.spyOn(
  initialProps.navigation,
  'navigate',
);

describe('Given the HotelOption component', () => {
  afterAll(() => {
    cleanup();
  });
  describe('When rendered with valid props', () => {
    const {queryByText} = render(
      <HotelOption
        hotelDetails={initialProps.hotelDetails[0]}
        navigation={initialProps.navigation}
      />,
    );
    it('The city name should be rendered', () => {
      expect(
        queryByText(initialProps.hotelDetails[0].location.city),
      ).toBeDefined();
    });
    it('The hotel name should be rendered', () => {
      expect(queryByText(initialProps.hotelDetails[0].name)).toBeDefined();
    });
    it('The hotel price should be rendered', () => {
      expect(
        queryByText(initialProps.hotelDetails[0].price.toString()),
      ).toBeDefined();
    });
    it('The price currency should be rendered', () => {
      expect(queryByText(initialProps.hotelDetails[0].currency)).toBeDefined();
    });
    it('The hotel stars should be rendered', () => {
      expect(
        queryByText(initialProps.hotelDetails[0].stars.toString()),
      ).toBeDefined();
    });
    it('The user rating should be rendered', () => {
      expect(
        queryByText(initialProps.hotelDetails[0].userRating.toString()),
      ).toBeDefined();
    });
  });
  describe('When the user presses an hotel option block', () => {
    const {getByTestId} = render(
      <HotelOption
        hotelDetails={initialProps.hotelDetails[0]}
        navigation={initialProps.navigation}
      />,
    );
    it('The Navigation method Navigate should be called with the hotel details screen name and the hotel details', async () => {
      const hotelOnPress = await waitFor(() => getByTestId('hotelOnPress'));
      fireEvent.press(hotelOnPress);
      expect(navigateMethodSpyOverMock).toHaveBeenCalledWith(
        screenNames.HOTEL_DETAILS_SCREEN,
        {hotelDetails: hotelsMockedArray[0]},
      );
    });
  });
});
