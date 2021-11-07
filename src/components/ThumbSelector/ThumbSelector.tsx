import React from 'react';
import {View, Text} from 'react-native';

import styles from './ThumbSelector.style';

export interface ThumbSelectorProps {
  currentSelectedTime: number;
  showTime: boolean;
}

const ThumbSelector = ({currentSelectedTime, showTime}: ThumbSelectorProps) => {
  const {selectorContainer, timeStyle} = styles;

  return (
    <View style={selectorContainer}>
      {<Text style={timeStyle}>{(showTime && currentSelectedTime) || ''}</Text>}
    </View>
  );
};
export default ThumbSelector;
