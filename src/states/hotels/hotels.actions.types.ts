import {Action} from 'redux';
import {AxiosError} from 'axios';

import {ThunkAction} from 'redux-thunk';
import {HotelsState} from './hotels.state';
import IHotel from 'types/states/IHotel';

export enum HotelsActionTypes {
  FETCHING_HOTELS_LIST = 'FETCH_CART',
  FETCH_HOTELS_LIST_SUCCESS = 'FETCH_CART_SUCCESS',
  FETCH_HOTELS_LIST_FAILURE = 'FETCH_CART_FAILURE',
  FILTER_HOTELS_BY_CHECKING_TIMES = 'FILTER_HOTELS_BY_CHECKING_TIMES',
}

export interface FetchHotelsListRequest extends Action {
  type: HotelsActionTypes.FETCHING_HOTELS_LIST;
}

export interface FetchHotelsListSuccess extends Action {
  type: HotelsActionTypes.FETCH_HOTELS_LIST_SUCCESS;
  payload: {hotelsList: IHotel[]};
}

export interface FetchHotelsListFailure extends Action {
  type: HotelsActionTypes.FETCH_HOTELS_LIST_FAILURE;
  payload: {error: AxiosError};
}
export interface filterHotelsByCheckingTimesAction extends Action {
  type: HotelsActionTypes.FILTER_HOTELS_BY_CHECKING_TIMES;
  payload: {filteredHotelsList: IHotel[]};
}

export type HotelsActions =
  | FetchHotelsListRequest
  | FetchHotelsListSuccess
  | FetchHotelsListFailure
  | filterHotelsByCheckingTimesAction;

export type ThunkResult = ThunkAction<
  void,
  HotelsState,
  undefined,
  HotelsActions
>;
