import arrayCheckingTimes from './arrayCheckingTimes';
import mockedHotelsArray from './../../__mocks__/hotel';

describe('Given the arrayCheckingTimes util function', () => {
  describe('When invoked with an hotels array to filtered by checkIn and from keys', () => {
    it('The array should be filtered by checkIn and from', () => {
      expect(arrayCheckingTimes(mockedHotelsArray, 'checkIn', 'from')).toEqual([
        14, 12,
      ]);
    });
  });

  describe('When invoked with hotels array to be filtered by checkout and from keys', () => {
    it('The array should be filtered by checkOut and from', () => {
      expect(arrayCheckingTimes(mockedHotelsArray, 'checkOut', 'from')).toEqual(
        [7, 7],
      );
    });
  });

  describe('When invoked with hotels array to be filtered by checkIn and to keys', () => {
    it('The array should be filtered by checkIn and to', () => {
      expect(arrayCheckingTimes(mockedHotelsArray, 'checkIn', 'to')).toEqual([
        23, 20,
      ]);
    });
  });

  describe('When invoked with hotels array to be filtered by checkOut and to keys', () => {
    it('The array should be filtered by checkOut and to', () => {
      expect(arrayCheckingTimes(mockedHotelsArray, 'checkOut', 'to')).toEqual([
        10, 10,
      ]);
    });
  });
});
