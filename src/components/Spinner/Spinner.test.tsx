import React from 'react';
import {render} from '@testing-library/react-native';

import Spinner from './Spinner';

describe('Given the Spinner component', () => {
  describe('When rendered', () => {
    it('The currentSelectedTime value should be rendered', () => {
      const {getByTestId} = render(<Spinner />);
      expect(getByTestId('spinerTestId')).toBeDefined();
    });
  });
});
