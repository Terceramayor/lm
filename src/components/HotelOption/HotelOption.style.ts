import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelOptionContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 2,
    backgroundColor: theme.colors.greyLight,
  },
  mainImage: {
    flex: 1,
    resizeMode: 'cover',
    aspectRatio: 1,
    marginRight: 5,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: 'rgb(255,255,255)',
  },
  cityText: {
    marginBottom: 10,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
  },
  nameAndStarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  nameText: {
    flex: 0.75,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDark,
  },
  hotelStarsContainer: {
    alignSelf: 'center',
  },
  hotelStarImage: {
    position: 'absolute',
    width: 25,
    height: 25,
  },
  hotelStars: {
    textAlign: 'center',
    width: 25,
    height: 25,
    lineHeight: 25,
    fontSize: 8,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
  },
  priceText: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    marginBottom: 10,
    color: theme.colors.greyMedium,
  },
  ratingStartScale: {
    width: 10,
  },
});
