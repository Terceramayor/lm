import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHotelsList} from 'states/hotels/hotels.actions';

const ListResultsScreen = () => {
  useEffect(() => {
    dispatch(fetchHotelsList());
  }, []);

  const dispatch = useDispatch();

  return (
    <View>
      <Text>ListResultsScreen</Text>
    </View>
  );
};
export default ListResultsScreen;
