import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  searchResultsContainer: {
    backgroundColor: theme.colors.main,
  },
  hotelsFound: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.greyDark,
  },
  checkFilterTitle: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
    fontSize: 10,
  },
  filtersTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  slidersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sliderStyle: {
    width: '40%',
  },
  thumbStyle: {
    width: 20,
    height: 20,
  },
});
