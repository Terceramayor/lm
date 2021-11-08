import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './Spinner.style';
import theme from 'theme/theme';

const Spinner = () => {
  const {spinnerContainer} = styles;

  return (
    <View style={spinnerContainer}>
      <ActivityIndicator
        color={theme.colors.terracota}
        size={'large'}
        testID="spinerTestId"
      />
    </View>
  );
};

export default Spinner;
