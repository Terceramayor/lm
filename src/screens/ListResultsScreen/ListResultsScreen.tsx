import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchHotelsList} from 'states/hotels/hotels.actions';
import {HotelsState} from 'states/hotels/hotels.state';

const ListResultsScreen = () => {
  useEffect(() => {
    dispatch(fetchHotelsList());
  }, []);

  const dispatch = useDispatch();

  const hotelsList = useSelector((state: HotelsState) => state.hotelsList);
  console.log(hotelsList);
  return (
    <View>
      <Text>ListResultsScreen</Text>
    </View>
  );
};
export default ListResultsScreen;
