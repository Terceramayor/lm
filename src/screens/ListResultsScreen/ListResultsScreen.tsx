import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useSelector, useDispatch} from 'react-redux';
import {Slider} from 'react-native-elements';

import {
  fetchHotelsList,
  filterHotelsByCheckingTimes,
  sortHotelsByPrice,
} from 'states/hotels/hotels.actions';
import {ApplicationState} from 'config/config';

import IHotel from 'types/states/IHotel';

import Spinner from 'components/Spinner';
import HotelOption from 'components/HotelOption';
import ThumbSelector from 'components/ThumbSelector';

import styles from './ListResultsScreen.style';
import theme from 'theme/theme';

const ListResultsScreen = ({navigation}: any) => {
  const {
    searchResultsContainer,
    hotelsFound,
    thumbStyle,
    slidersContainer,
    sliderStyle,
    filtersTitleContainer,
    checkFilterTitle,
    checkBoxContainer,
    checkboxText,
  } = styles;

  //useState deckaration block

  const [showOptionsBlock, setShowOptionsBlock] = useState<boolean>(false);

  const [sortByPrice, setSortByPrice] = useState<boolean>(false);

  const [checkInSelected, setCheckInSelected] = useState<number>(0);
  const [checkInCurrent, setCheckInCurrent] = useState<number>(0);
  const [showCurrentCheckIn, setShowCurrentCheckIn] = useState<boolean>(false);

  const [checkOutSelected, setCheckOutSelected] = useState<number>(0);
  const [checkOutCurrent, setCheckOutCurrent] = useState<number>(0);
  const [showCurrentCheckOut, setShowCurrentCheckOut] =
    useState<boolean>(false);

  //Redux store retrieve block deckaration block

  const {hotelsList, hotelslistFiltered, isLoadingHotels, loadingHotelsError} =
    useSelector((state: ApplicationState) => state.hotelsData);

  //Side effects block

  const dispatch = useDispatch(); //Dispathc the action to retrieve the hotels list after the first rendering
  useEffect(() => {
    dispatch(fetchHotelsList());
  }, [dispatch]);

  useEffect(() => {
    hotelsList &&
      dispatch(
        filterHotelsByCheckingTimes(
          hotelsList,
          checkInSelected,
          checkOutSelected,
        ),
      );
  }, [checkInSelected, checkOutSelected, hotelsList, dispatch]); //Dispatch the filter action whenever the user changes the position of any of the sliders

  //Render block

  const extractKey = (item: IHotel) => item.id.toString();

  const renderItem = ({item}: ListRenderItemInfo<IHotel>) => {
    return <HotelOption navigation={navigation} hotelDetails={item} />;
  };

  const handlePriceSorting = () => {
    if (!sortByPrice) {
      hotelslistFiltered && dispatch(sortHotelsByPrice(hotelslistFiltered));
    } else {
      hotelsList &&
        dispatch(
          filterHotelsByCheckingTimes(
            hotelsList,
            checkInSelected,
            checkOutSelected,
          ),
        );
    }
    setSortByPrice(!sortByPrice);
  };

  const renderHotelCheckingFilters = () => {
    return (
      hotelsList && (
        <>
          <TouchableOpacity
            testID={'filtersOnPress'}
            onPress={() => setShowOptionsBlock(!showOptionsBlock)}>
            <Text
              style={
                hotelsFound
              }>{`${hotelsList.length} hotels found - Tap for filtering options`}</Text>
          </TouchableOpacity>
          {showOptionsBlock && (
            <>
              <View style={checkBoxContainer}>
                <CheckBox
                  value={sortByPrice}
                  onValueChange={() =>
                    hotelslistFiltered && handlePriceSorting()
                  }
                />
                <Text style={checkboxText}>Sort by price</Text>
              </View>
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
                  thumbTintColor={theme.colors.white}
                  maximumTrackTintColor={theme.colors.greenLight}
                  onSlidingStart={() => setShowCurrentCheckIn(true)}
                  onValueChange={value => setCheckInCurrent(Math.round(value))}
                  onSlidingComplete={value => {
                    setCheckInSelected(Math.round(value));
                    setShowCurrentCheckIn(false);
                    setSortByPrice(false);
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
                  minimumTrackTintColor={theme.colors.redLight}
                  thumbTintColor={theme.colors.white}
                  maximumTrackTintColor={theme.colors.greenLight}
                  onSlidingStart={() => setShowCurrentCheckOut(true)}
                  onValueChange={value => setCheckOutCurrent(Math.round(value))}
                  onSlidingComplete={value => {
                    setCheckOutSelected(Math.round(value));
                    setShowCurrentCheckOut(false);
                    setSortByPrice(false);
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
            </>
          )}
        </>
      )
    );
  };

  return (
    <View style={searchResultsContainer}>
      {isLoadingHotels && <Spinner />}
      {hotelsList && !isLoadingHotels && !loadingHotelsError && (
        <>
          {renderHotelCheckingFilters()}
          <FlatList
            testID={'hotelsFlatList'}
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
