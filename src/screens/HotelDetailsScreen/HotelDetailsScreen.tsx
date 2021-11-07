import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import styles from './HotelDetailsScreen.style';
import theme from 'theme/theme';
import hoteslDescriptions from 'constants/hoteslDescriptions';
import IHotel from 'types/states/IHotel';

export interface HotelDetailsScreen {
  route: {params: {hotelDetails: IHotel}};
}

const HotelDetailsScreen = (props: HotelDetailsScreen) => {
  const {location, name, price, currency, stars, userRating, gallery} =
    props.route.params.hotelDetails;
  const {
    hotelDetailsContainer,
    imageStyle,
    imageandTextContainer,
    imageDescriptionStyle,
  } = styles;

  const [showErrorImage, setshowErrorImage] = useState<boolean>(false);
  const renderItem = (itemData: {index: number; item: string}) => {
    console.log(itemData.item);
    return (
      <View style={imageandTextContainer}>
        <Image
          source={
            (!showErrorImage && {
              uri: gallery.length > 0 && itemData.item,
            }) ||
            require('./../../../assets/images/errorHouse.png')
          }
          style={imageStyle}
          onError={() => {
            setshowErrorImage(true);
          }}
        />
        <Text style={imageDescriptionStyle}>
          {
            hoteslDescriptions[
              Math.floor(Math.random() * hoteslDescriptions.length)
            ]
          }
        </Text>
      </View>
    );
  };
  return (
    <View style={hotelDetailsContainer}>
      <Carousel
        layout={'default'}
        data={gallery}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

export default HotelDetailsScreen;
