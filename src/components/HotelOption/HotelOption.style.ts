import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelOptionContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.greyLight,
    borderRadius: 5,
    padding: 10,
    margin: 2,
  },
  mainImage: {
    fkex: 1,
    width: 100,
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
  },
  nameText: {
    flex: 0.75,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDark,
  },
  hotelStars: {
    textAlign: 'center',
    flex: 0.25,
    marginLeft: 5,
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
