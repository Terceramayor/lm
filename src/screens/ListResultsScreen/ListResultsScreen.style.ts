import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
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
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
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
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    marginBottom: 10,
    marginVertical: 10,
    borderColor: theme.colors.greyMedium,
    borderTopWidth: 1,
  },
  checkboxText: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    alignSelf: 'center',
    marginLeft: 10,
    color: theme.colors.white,
  },
});
