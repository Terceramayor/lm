import {StyleSheet} from 'react-native';
import theme from 'theme/theme';

export default StyleSheet.create({
  selectorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    backgroundColor: theme.colors.greyMedium,
    borderRadius: 15,
  },
  timeStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 20,
    height: 20,
    lineHeight: 20,
    fontSize: 10,
    color: theme.colors.greyDark,
    fontFamily: theme.fonts.bold,
  },
});
