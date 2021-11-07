import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './Spinner.style';
import theme from 'theme/theme';

const Spinner = () => {
  const {spinnerContainer} = styles;

  return (
    <View style={spinnerContainer}>
      <ActivityIndicator color={theme.colors.greyDark} size={'large'} />
    </View>
  );
};

export default Spinner;
