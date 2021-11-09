import React from 'react';
import '@testing-library/react-native/dont-cleanup-after-each';
import {render, cleanup} from '@testing-library/react-native';

import HotelDetailsScreen, {
  HotelDetailsScreenProps,
} from './HotelDetailsScreen';
import hotelsMockedArray from './../../../__mocks__/hotel';

jest.mock('@react-native-mapbox-gl/maps');
jest.mock('react-native-snap-carousel', () => 'mockedCarousel');

const initialProps = {
  route: {params: {hotelDetails: hotelsMockedArray[0]}},
};

const renderComponent = (props: HotelDetailsScreenProps) => {
  return render(<HotelDetailsScreen route={props.route} />);
};

describe('Given the HotelDetailsScreen component', () => {
  afterAll(() => {
    cleanup();
  });
  describe('When rendered with valid props', () => {
    const {getByText, debug} = renderComponent(initialProps);
    it('The checkout info should be rendered', () => {
      expect(
        getByText(
          `Checkout: from: ${initialProps.route.params.hotelDetails.checkOut.from} to: ${initialProps.route.params.hotelDetails.checkOut.to}`,
        ),
      ).toBeDefined();
    });
    it('The hotel phone number should be rendered', () => {
      expect(
        getByText(initialProps.route.params.hotelDetails.contact.phoneNumber),
      ).toBeDefined();
    });
    it('The users rating should be rendered', () => {
      expect(
        getByText(
          `Our users rate this hotel as ${initialProps.route.params.hotelDetails.userRating}/10`,
        ),
      ).toBeDefined();
    });
  });
});
