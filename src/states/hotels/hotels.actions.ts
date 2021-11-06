import {ThunkDispatch} from 'redux-thunk';
import axios, {AxiosError, AxiosResponse} from 'axios';

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
        console.log(response.data);
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
