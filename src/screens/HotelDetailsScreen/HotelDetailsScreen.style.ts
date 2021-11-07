import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  hotelDetailsContainer: {
    paddingLeft: 10,
    width: '50%',
  },
  imageandTextContainer: {
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.redLight,
    alignItems: 'center',
    width: '100%',
  },
  imageStyle: {
    width: 200,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  imageDescriptionStyle: {
    marginVertical: 10,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDarkDeep,
  },
});
