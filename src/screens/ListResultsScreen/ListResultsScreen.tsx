import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchHotelsList} from 'states/hotels/hotels.actions';
import {HotelsState} from 'states/hotels/hotels.state';

import styles from './ListResultsScreen.style';

const ListResultsScreen = () => {
  const {textStyle, textStyle1, textStyle2} = styles;

  useEffect(() => {
    dispatch(fetchHotelsList());
  }, []);

  const dispatch = useDispatch();

  const hotelsList = useSelector((state: HotelsState) => state.hotelsList);
  console.log(hotelsList);
  return (
    <View>
      <Text style={textStyle}>ListResultsScreen</Text>
      <Text style={textStyle1}>ListResultsScreen</Text>
      <Text style={textStyle2}>ListResultsScreen</Text>
    </View>
  );
};
export default ListResultsScreen;
