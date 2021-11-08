import React from 'react';
import {render} from '@testing-library/react-native';

import ThumbSelector from './ThumbSelector';

const initialProps = {currentSelectedTime: 99, showTime: true};

describe('Given the ThumbSelector component', () => {
  describe('When the prop showTime is set to true', () => {
    it('The currentSelectedTime value should be rendered', () => {
      const {getByText} = render(
        <ThumbSelector
          currentSelectedTime={initialProps.currentSelectedTime}
          showTime={initialProps.showTime}
        />,
      );
      expect(
        getByText(initialProps.currentSelectedTime.toString()),
      ).toBeDefined();
    });
    describe('When the prop showTime is set to false', () => {
      it('The currentSelectedTime value should NOT be rendered', () => {
        const {queryByText} = render(
          <ThumbSelector
            currentSelectedTime={initialProps.currentSelectedTime}
            showTime={!initialProps.showTime}
          />,
        );
        expect(
          queryByText(initialProps.currentSelectedTime.toString()),
        ).toBeNull();
      });
    });
  });
});
