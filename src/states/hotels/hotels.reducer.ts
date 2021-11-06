import {Reducer} from 'redux';

import {HotelsState, initialHotelsState} from './hotels.state';
import {HotelsActions, HotelsActionTypes} from './hotels.actions.types';

export const hotelsReducer: Reducer<HotelsState, HotelsActions> = (
  state: HotelsState = initialHotelsState,
  action: HotelsActions,
): HotelsState => {
  switch (action.type) {
    case HotelsActionTypes.FETCHING_HOTELS_LIST:
      return {
        ...state,
        isLoadingHotels: true,
        loadingHotelsError: null,
      };
    case HotelsActionTypes.FETCH_HOTELS_LIST_SUCCESS:
      return {
        ...state,
        isLoadingHotels: false,
        loadingHotelsError: null,
        hotelsList: action.payload.hotelsList,
      };
    case HotelsActionTypes.FETCH_HOTELS_LIST_FAILURE:
      return {
        ...state,
        isLoadingHotels: false,
        loadingHotelsError: action.payload.error,
      };

    default:
      return state;
  }
};
