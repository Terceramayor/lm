import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.greyLight,
  },
  checkingTimesContainer: {
    paddingLeft: 5,
    marginBottom: 25,
    width: '100%',
  },
  checkinInfo: {
    paddingTop: 15,
    paddingHorizontal: 25,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDarkDeep,
  },
  priceStyle: {
    paddingTop: 25,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDarkDeep,
  },
  imageandTextContainer: {
    paddingTop: 16,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    width: '100%',
  },
  imageStyle: {
    width: 200,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  imageDescriptionStyle: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDarkDeep,
  },
  mapContainer: {
    height: 200,
    width: '100%',
    backgroundColor: 'tomato',
  },
  mapStyle: {
    flex: 1,
  },
  starImage: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  nameAndLocation: {
    width: '100%',
    backgroundColor: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.greyDarkDeep,
    marginTop: 16,
    paddingTop: 25,
    paddingHorizontal: 25,
  },
  contactHeader: {
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 25,
    paddingTop: 25,
    alignSelf: 'flex-start',
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.greyDarkDeep,
  },
  contactDetailsContainer: {
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingTop: 25,
    paddingLeft: 25,
  },
  iconStyle: {
    marginRight: 15,
    alignSelf: 'center',
    height: 16,
    width: 16,
  },
  iconKeyContainer: {
    flexDirection: 'row',
  },
  contactDetailsBlock: {
    width: '90%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  contactDetailKeyValue: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.greyDark,
  },
  usersRating: {
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignSelf: 'flex-start',
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.greyDarkDeep,
  },
  hotelInfoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.greyMedium,
  },
});
