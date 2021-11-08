import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  selectorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: theme.colors.greyMedium,
  },
  timeStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 20,
    height: 20,
    lineHeight: 20,
    fontSize: 10,
    fontFamily: theme.fonts.bold,
    color: theme.colors.greyDark,
  },
});
