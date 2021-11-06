import React, {useEffect} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchHotelsList} from 'states/hotels/hotels.actions';
import {ApplicationState} from 'config/config';
import IHotel from 'types/states/IHotel';

import HotelOption from 'components/HotelOption';

import styles from './ListResultsScreen.style';

const ListResultsScreen = () => {
  const {searchResultsContainer} = styles;

  useEffect(() => {
    dispatch(fetchHotelsList());
  }, []);

  const dispatch = useDispatch();

  const {hotelsList, isLoadingHotels, loadingHotelsError} = useSelector(
    (state: ApplicationState) => state.hotelsData,
  );
  const extractKey = (item: IHotel) => item.id.toString();

  const renderItem = ({item}: ListRenderItemInfo<IHotel>) => {
    console.log(item);
    return (
      <HotelOption
        city={item.location.city}
        name={item.name}
        price={item.price}
        currency={item.currency}
        stars={item.stars}
        userRating={item.userRating}
        showImage={(item.gallery.length > 0 && item.gallery[0]) || undefined}
      />
    );
  };
  console.log(hotelsList);
  return (
    <View style={searchResultsContainer}>
      {hotelsList && (
        <FlatList
          data={hotelsList}
          renderItem={renderItem}
          keyExtractor={extractKey}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
export default ListResultsScreen;
