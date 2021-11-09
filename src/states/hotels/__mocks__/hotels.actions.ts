module.exports = {
  fetchHotelsList: jest.fn(() => {
    return {type: 'mockedAction', payload: 'mockedPayload'};
  }),
  filterHotelsByCheckingTimes: jest.fn(() => {
    return {type: 'mockedAction', payload: 'mockedPayload'};
  }),
  sortHotelsByPrice: jest.fn(() => {
    return {type: 'mockedAction', payload: 'mockedPayload'};
  }),
};
export {};
