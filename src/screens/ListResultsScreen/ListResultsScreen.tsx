import React, {useEffect, useState} from 'react';
import {View, FlatList, ListRenderItemInfo, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Slider} from 'react-native-elements';
import date from 'date-and-time';

import {
  fetchHotelsList,
  filterHotelsByCheckingTimes,
} from 'states/hotels/hotels.actions';
import {ApplicationState} from 'config/config';
import IHotel from 'types/states/IHotel';

import HotelOption from 'components/HotelOption';
import ThumbSelector from 'components/ThumbSelector';

import styles from './ListResultsScreen.style';
import theme from 'theme/theme';

const ListResultsScreen = () => {
  const {
    searchResultsContainer,
    hotelsFound,
    thumbStyle,
    slidersContainer,
    sliderStyle,
    filtersTitleContainer,
    checkFilterTitle,
  } = styles;

  const [checkInSelected, setCheckInSelected] = useState<number>(0);
  const [checkInCurrent, setCheckInCurrent] = useState<number>(0);
  const [showCurrentCheckIn, setShowCurrentCheckIn] = useState<boolean>(false);

  const [checkOutSelected, setCheckOutSelected] = useState<number>(0);
  const [checkOutCurrent, setCheckOutCurrent] = useState<number>(0);
  const [showCurrentCheckOut, setShowCurrentCheckOut] =
    useState<boolean>(false);

  const {hotelsList, hotelslistFiltered, isLoadingHotels, loadingHotelsError} =
    useSelector((state: ApplicationState) => state.hotelsData);

  useEffect(() => {
    dispatch(fetchHotelsList());
  }, []);

  useEffect(() => {
    hotelsList &&
      dispatch(
        filterHotelsByCheckingTimes(
          hotelsList,
          checkInSelected,
          checkOutSelected,
        ),
      );
  }, [checkInSelected, checkOutSelected, hotelsList]);

  const dispatch = useDispatch();

  const extractKey = (item: IHotel) => item.id.toString();

  const renderItem = ({item}: ListRenderItemInfo<IHotel>) => {
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

  return (
    <View style={searchResultsContainer}>
      {hotelsList && (
        <>
          <Text style={hotelsFound}>{`${hotelsList.length} hotels found`}</Text>
          <View style={filtersTitleContainer}>
            <Text
              style={
                checkFilterTitle
              }>{`Check in ${checkInSelected}:00 earliest`}</Text>
            <Text
              style={
                checkFilterTitle
              }>{`Check out ${checkOutSelected}:00 latest`}</Text>
          </View>
          <View style={slidersContainer}>
            <Slider
              minimumValue={0}
              maximumValue={24}
              value={checkInSelected}
              minimumTrackTintColor={theme.colors.redLight}
              thumbTintColor={theme.colors.greyDark}
              maximumTrackTintColor={theme.colors.greenLight}
              onSlidingStart={() => setShowCurrentCheckIn(true)}
              onValueChange={value => setCheckInCurrent(Math.round(value))}
              onSlidingComplete={value => {
                setCheckInSelected(Math.round(value));
                setShowCurrentCheckIn(false);
              }}
              style={sliderStyle}
              thumbStyle={thumbStyle}
              thumbProps={{
                children: (
                  <ThumbSelector
                    currentSelectedTime={checkInCurrent}
                    showTime={showCurrentCheckIn}
                  />
                ),
              }}
            />

            <Slider
              minimumValue={0}
              maximumValue={24}
              value={checkOutSelected}
              minimumTrackTintColor={theme.colors.greenLight}
              thumbTintColor={theme.colors.greyDark}
              maximumTrackTintColor={theme.colors.redLight}
              onSlidingStart={() => setShowCurrentCheckOut(true)}
              onValueChange={value => setCheckOutCurrent(Math.round(value))}
              onSlidingComplete={value => {
                setCheckOutSelected(Math.round(value));
                setShowCurrentCheckOut(false);
              }}
              style={sliderStyle}
              thumbStyle={thumbStyle}
              thumbProps={{
                children: (
                  <ThumbSelector
                    currentSelectedTime={checkOutCurrent}
                    showTime={showCurrentCheckOut}
                  />
                ),
              }}
            />
          </View>

          <FlatList
            data={hotelslistFiltered}
            renderItem={renderItem}
            keyExtractor={extractKey}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};
export default ListResultsScreen;
