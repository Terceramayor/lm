import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Carousel from 'react-native-snap-carousel';

import {MAPBOX_TOKEN} from '@env';
import IHotel from 'types/states/IHotel';

import styles from './HotelDetailsScreen.style';

import hoteslDescriptions from 'constants/hoteslDescriptions';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

export interface HotelDetailsScreenProps {
  route: {params: {hotelDetails: IHotel}};
}

const HotelDetailsScreen = (props: HotelDetailsScreenProps) => {
  const {
    location,
    name,
    price,
    currency,
    contact,
    stars,
    userRating,
    gallery,
    checkIn,
    checkOut,
  } = props.route.params.hotelDetails;
  const {
    hotelDetailsContainer,
    priceStyle,
    imageStyle,
    imageandTextContainer,
    imageDescriptionStyle,
    mapContainer,
    mapStyle,
    starImage,
    nameAndLocation,
    contactDetailsContainer,
    contactDetailsBlock,
    contactDetailKeyValue,
    contactHeader,
    usersRating,
    hotelInfoContainer,
    separator,
    iconStyle,
    iconKeyContainer,
    checkingTimesContainer,
    checkinInfo,
  } = styles;

  const [showErrorImage, setshowErrorImage] = useState<boolean>(false);

  const renderItem = (itemData: {index: number; item: string}) => {
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
  const renderMap = () => {
    return (
      <View style={mapContainer}>
        <MapboxGL.MapView
          style={mapStyle}
          logoEnabled={false}
          localizeLabels={true}>
          <MapboxGL.Camera
            zoomLevel={11}
            animationMode={'flyTo'}
            animationDuration={2000}
            centerCoordinate={[location.longitude, location.latitude]}
          />
          <View>
            <MapboxGL.PointAnnotation
              anchor={{x: 0.5, y: 0.5}}
              id={name}
              coordinate={[location.longitude, location.latitude]}>
              <View>
                <Image
                  style={starImage}
                  source={require('./../../../assets/icons/marker.png')}
                />
              </View>
            </MapboxGL.PointAnnotation>
          </View>
        </MapboxGL.MapView>
      </View>
    );
  };
  const renderCheckingTime = () => {
    return (
      <View style={checkingTimesContainer}>
        <Text style={checkinInfo}>
          {`- Checking: from: ${checkIn.from} to: ${checkIn.to}`}
        </Text>
        <Text style={checkinInfo}>
          {`- Checkout: from: ${checkOut.from} to: ${checkOut.to}`}
        </Text>
      </View>
    );
  };
  const renderSeparator = () => {
    return <View style={separator} />;
  };
  return (
    <ScrollView>
      <View style={hotelDetailsContainer}>
        <Text style={priceStyle}> {`${price} ${currency} per night`}</Text>
        <Carousel
          layout={'default'}
          data={gallery}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
        />
        <View style={hotelInfoContainer}>
          <Text
            style={
              nameAndLocation
            }>{`${name} located in ${location.city} - ${stars} stars hotel`}</Text>
          {renderCheckingTime()}
          {renderSeparator()}
          <Text style={contactHeader}>
            {'Your can reach the hotel staff though:'}
          </Text>
          <View style={contactDetailsContainer}>
            <View style={contactDetailsBlock}>
              <View style={iconKeyContainer}>
                <Image
                  source={require('./../../../assets/icons/email.png')}
                  style={iconStyle}
                />
                <Text style={contactDetailKeyValue}>{'email:'}</Text>
              </View>
              <Text style={contactDetailKeyValue}>{`${contact.email}`}</Text>
            </View>
            <View style={contactDetailsBlock}>
              <View style={iconKeyContainer}>
                <Image
                  source={require('./../../../assets/icons/phone.png')}
                  style={iconStyle}
                />
                <Text style={contactDetailKeyValue}>{'phone:'}</Text>
              </View>
              <Text
                style={contactDetailKeyValue}>{`${contact.phoneNumber}`}</Text>
            </View>
          </View>
          {renderSeparator()}
          <Text
            style={
              usersRating
            }>{`Our users rate this hotel as ${userRating}/10`}</Text>
        </View>
        {renderMap()}
      </View>
    </ScrollView>
  );
};

export default HotelDetailsScreen;
