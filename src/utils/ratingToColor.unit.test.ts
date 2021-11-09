import ratingToColor from './ratingToColor';

describe('Given the ratingToColor util function', () => {
  describe('When invoked with a score of 10', () => {
    it('The output color should be green', () => {
      expect(ratingToColor(10)).toEqual('rgb(0,255,0)');
    });
  });
  describe('When invoked with a score of 0', () => {
    it('The output color should be red', () => {
      expect(ratingToColor(0)).toEqual('rgb(255,0,0)');
    });
  });
  describe('When invoked with a score of 5', () => {
    it('The output color should be yellow', () => {
      expect(ratingToColor(5)).toEqual('rgb(127.5,127.5,0)');
    });
  });
});
