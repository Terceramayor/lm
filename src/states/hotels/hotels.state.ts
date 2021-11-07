import {AxiosError} from 'axios';
import IHotel from 'types/states/IHotel';

export interface HotelsState {
  isLoadingHotels: boolean;
  loadingHotelsError: AxiosError | null;
  hotelsList: IHotel[] | null;
  hotelslistFiltered: IHotel[] | null;
}

export const initialHotelsState: HotelsState = {
  isLoadingHotels: false,
  loadingHotelsError: null,
  hotelsList: null,
  hotelslistFiltered: null,
};
