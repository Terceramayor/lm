export interface location {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface checkTimes {
  from: string;
  to: string;
}

export interface contact {
  phoneNumber: string;
  email: string;
}

export default interface IHotel {
  id: number;
  name: string;
  location: location;
  stars: number;
  checkIn: checkTimes;
  checkOut: checkTimes;
  contact: contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}
