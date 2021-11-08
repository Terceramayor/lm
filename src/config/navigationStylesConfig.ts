import screenNames from 'constants/screenNames';
import theme from 'theme/theme';

export default {
  [screenNames.SEARCH_RESULTS]: {
    title: screenNames.SEARCH_RESULTS,
    headerStyle: {
      backgroundColor: theme.colors.terracota,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  [screenNames.HOTEL_DETAILS_SCREEN]: {
    title: screenNames.HOTEL_DETAILS_SCREEN,
    headerStyle: {
      backgroundColor: theme.colors.terracota,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
