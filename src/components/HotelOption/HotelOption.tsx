import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';

import IHotel from 'types/states/IHotel';
import ratingToColor from 'utils/ratingToColor';
import screenNames from 'constants/screenNames';

import styles from './HotelOption.style';

export interface HotelOptionProps {
  hotelDetails: IHotel;
  navigation: any;
}

const HotelOption = ({hotelDetails, navigation}: HotelOptionProps) => {
  const {
    hotelOptionContainer,
    mainImage,
    infoContainer,
    nameAndStarsContainer,
    cityText,
    nameText,
    hotelStars,
    hotelStarImage,
    priceText,
    hotelStarsContainer,
  } = styles;

  const {
    location: {city},
    name,
    price,
    currency,
    stars,
    userRating,
    gallery,
  } = hotelDetails;

  const [showErrorImage, setshowErrorImage] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={hotelOptionContainer}
      onPress={() =>
        navigation.navigate(screenNames.HOTEL_DETAILS_SCREEN, {hotelDetails})
      }>
      <Image
        source={
          (!showErrorImage && {
            uri: gallery.length > 0 && gallery[0],
          }) ||
          require('./../../../assets/images/errorHouse.png')
        }
        style={mainImage}
        onError={() => {
          setshowErrorImage(true);
        }}
      />
      <View style={infoContainer}>
        <Text style={cityText}>{city}</Text>
        <View style={nameAndStarsContainer}>
          <Text style={nameText}>{name}</Text>
          <View style={hotelStarsContainer}>
            <Text style={hotelStars}>{stars}</Text>
            <Image
              style={hotelStarImage}
              source={require('./../../../assets/icons/star.png')}
            />
          </View>
        </View>
        <Text style={priceText}>{`${price} ${currency} per night`}</Text>
        <Rating
          type="custom"
          ratingColor={ratingToColor(userRating)}
          showRating={false}
          readonly
          imageSize={10}
          ratingCount={10}
          tintColor={infoContainer.backgroundColor}
          fractions={2}
          startingValue={userRating}
        />
      </View>
    </TouchableOpacity>
  );
};
export default HotelOption;
