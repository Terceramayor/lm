import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelOptionContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.greyLight,
    padding: 10,
    margin: 2,
  },
  mainImage: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'cover',
    marginRight: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255,255,255)',
  },
  cityText: {
    marginBottom: 10,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
  },
  nameAndStarsContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    flex: 0.75,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDark,
  },
  hotelStarImage: {
    width: 25,
    height: 25,
    position: 'absolute',
  },
  hotelStars: {
    width: 25,
    height: 25,
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 8,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
  },
  priceText: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyMedium,
  },
  ratingStartScale: {
    width: 10,
  },
});
