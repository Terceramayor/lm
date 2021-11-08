import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
    paddingBottom: 24,
    backgroundColor: theme.colors.main,
  },
  hotelsFound: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
  },
  checkFilterTitle: {
    fontSize: 10,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
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
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    marginBottom: 10,
    borderTopWidth: 1,
    borderColor: theme.colors.greyMedium,
  },
  checkboxText: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    marginLeft: 10,
    color: theme.colors.white,
  },
});
