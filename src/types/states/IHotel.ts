export interface ILocation {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface ICheckTimes {
  from: string;
  to: string;
}

export interface IContact {
  phoneNumber: string;
  email: string;
}
export interface ICheckingKeys {
  checkIn: ICheckTimes;
  checkOut: ICheckTimes;
}
export default interface IHotel {
  id: number;
  name: string;
  location: ILocation;
  stars: number;
  checkIn: ICheckTimes;
  checkOut: ICheckTimes;
  contact: IContact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}
