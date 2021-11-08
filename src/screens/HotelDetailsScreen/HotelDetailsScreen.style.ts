import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
    backgroundColor: theme.colors.greyLight,
  },
  checkingTimesContainer: {
    width: '100%',
    paddingLeft: 5,
    marginBottom: 25,
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
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
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
    width: '100%',
    height: 200,
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
    marginTop: 16,
    paddingTop: 25,
    paddingHorizontal: 25,
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    backgroundColor: theme.colors.white,
    color: theme.colors.greyDarkDeep,
  },
  contactHeader: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
    paddingTop: 25,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.greyDarkDeep,
    backgroundColor: theme.colors.white,
  },
  contactDetailsContainer: {
    width: '100%',
    paddingTop: 25,
    paddingLeft: 25,
    backgroundColor: theme.colors.white,
  },
  iconStyle: {
    alignSelf: 'center',
    height: 16,
    width: 16,
    marginRight: 15,
  },
  iconKeyContainer: {
    flexDirection: 'row',
  },
  contactDetailsBlock: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: theme.colors.white,
  },
  contactDetailKeyValue: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.greyDark,
  },
  usersRating: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.greyDarkDeep,
    backgroundColor: theme.colors.white,
  },
  hotelInfoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.greyMedium,
  },
});
