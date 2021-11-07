import date from 'date-and-time';

import IHotel, {IHotelKeys, ICheckTimes} from 'types/states/IHotel';

export interface IHotelIndex {
  [key: string]: string;
}

const arrayCheckingTimes = (
  hotelsArray: IHotel[],
  checkingOption: keyof IHotelKeys,
  timeReference: keyof ICheckTimes,
): Number[] => {
  let checkingTimeArray: Number[] = [];

  hotelsArray.forEach((hotel, index) => {
    checkingTimeArray.push(
      date.preparse(
        hotel[checkingOption][timeReference] === '24:00'
          ? '23:59'
          : hotel[checkingOption][timeReference],
        'HH:mm:ss',
      ).H,
    );
  });
  return checkingTimeArray;
};

export default arrayCheckingTimes;
