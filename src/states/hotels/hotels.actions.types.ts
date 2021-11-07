import {Action} from 'redux';
import {AxiosError} from 'axios';

import {ThunkAction} from 'redux-thunk';
import {HotelsState} from './hotels.state';
import IHotel from 'types/states/IHotel';

export enum HotelsActionTypes {
  FETCHING_HOTELS_LIST = 'FETCHING_HOTELS_LIST',
  FETCH_HOTELS_LIST_SUCCESS = 'FETCHING_HOTELS_LIST_SUCCESS',
  FETCH_HOTELS_LIST_FAILURE = 'FETCHING_HOTELS_LIST_FAILURE',
  FILTER_HOTELS_BY_CHECKING_TIMES = 'FILTER_HOTELS_BY_CHECKING_TIMES',
  SORT_HOTELS_BY_PRICE = ' SORT_HOTELS_BY_PRICE',
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
export interface FilterHotelsByCheckingTimesAction extends Action {
  type: HotelsActionTypes.FILTER_HOTELS_BY_CHECKING_TIMES;
  payload: {filteredHotelsList: IHotel[]};
}

export interface SortHotelsByPrice extends Action {
  type: HotelsActionTypes.SORT_HOTELS_BY_PRICE;
  payload: {sortedHotelsByPrice: IHotel[]};
}

export type HotelsActions =
  | FetchHotelsListRequest
  | FetchHotelsListSuccess
  | FetchHotelsListFailure
  | FilterHotelsByCheckingTimesAction
  | SortHotelsByPrice;

export type ThunkResult = ThunkAction<
  void,
  HotelsState,
  undefined,
  HotelsActions
>;
