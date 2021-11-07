import {ThunkDispatch} from 'redux-thunk';
import {Dispatch} from 'react-redux';
import axios, {AxiosError, AxiosResponse} from 'axios';
import date from 'date-and-time';

import {filterHotelsByCheckingTimesAction} from 'states/hotels/hotels.actions.types';
import {HotelsState} from './hotels.state';
import {
  HotelsActionTypes,
  HotelsActions,
  ThunkResult,
} from './hotels.actions.types';
import IHotel from 'types/states/IHotel';

const ENDPOINT = 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

export const fetchHotelsList = (): ThunkResult => {
  return async (
    dispatch: ThunkDispatch<HotelsState, undefined, HotelsActions>,
  ) => {
    dispatch(fetchCartRequest());
    return axios
      .get(ENDPOINT)
      .then((response: AxiosResponse<IHotel[]>) => {
        dispatch(fetchCartSuccess(response.data));
      })
      .catch((error: AxiosError) => {
        return dispatch(fetchCartFailure({...error}));
      });
  };
};

export const fetchCartRequest = (): HotelsActions => ({
  type: HotelsActionTypes.FETCHING_HOTELS_LIST,
});

export const fetchCartSuccess = (hotelsList: IHotel[]): HotelsActions => {
  return {
    type: HotelsActionTypes.FETCH_HOTELS_LIST_SUCCESS,
    payload: {hotelsList},
  };
};

export const fetchCartFailure = (error: AxiosError): HotelsActions => ({
  type: HotelsActionTypes.FETCH_HOTELS_LIST_FAILURE,
  payload: {error: {...error}},
});

export const filterHotelsByCheckingTimes = (
  hotelListToFilter: IHotel[],
  checkIn: number,
  checkOut: number,
) => {
  let filteredHotelsList = hotelListToFilter.filter(hotel => {
    console.log(date.preparse(hotel.checkIn.from, 'HH:mm:ss').H);
    return (
      date.preparse(hotel.checkIn.from, 'HH:mm:ss').H >= checkIn &&
      date.preparse(hotel.checkOut.to, 'HH:mm:ss').H >= checkOut
    );
  });
  return (dispatch: Dispatch<filterHotelsByCheckingTimesAction>) => {
    dispatch({
      type: HotelsActionTypes.FILTER_HOTELS_BY_CHECKING_TIMES,
      payload: {filteredHotelsList},
    });
  };
};
