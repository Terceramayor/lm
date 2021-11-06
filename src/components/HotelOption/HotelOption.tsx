import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';

import ratingToColor from 'utils/ratingToColor';

import styles from './HotelOption.style';

import los from './../../../assets/images/';
export interface HotelOptionProps {
  city: string;
  name: string;
  price: number;
  currency: string;
  stars: number;
  userRating: number;
  showImage?: string;
}

const HotelOption = ({
  city,
  name,
  price,
  currency,
  stars,
  userRating,
  showImage,
}: HotelOptionProps) => {
  const {
    hotelOptionContainer,
    mainImage,
    infoContainer,
    nameAndStarsContainer,
    cityText,
    nameText,
    hotelStars,
    priceText,
  } = styles;

  const [showErrorImage, setshowErrorImage] = useState<boolean>(false);

  return (
    <TouchableOpacity style={hotelOptionContainer}>
      <Image
        source={
          (!showErrorImage && {uri: showImage}) ||
          require('./../../../assets/images/errorHouse.png')
        }
        style={mainImage}
        onError={e => {
          setshowErrorImage(true);
        }}
      />
      <View style={infoContainer}>
        <Text style={cityText}>{city}</Text>
        <View style={nameAndStarsContainer}>
          <Text style={nameText}>{name}</Text>
          <Text style={hotelStars}>{stars}</Text>
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
