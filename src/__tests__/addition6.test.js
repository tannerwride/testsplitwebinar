import { add } from '../math';

describe('Addition testing', () => {
    test('5 + 2 = 7', () => {
        expect(add(5, 2)).toBe(7);
      });

      test('820 + 3 = 823', () => {
        expect(add(820, 3)).toBe(823);
      });   

      test('412 + 15 = 427', () => {
        expect(add(412, 15)).toBe(427);
      });    

      test('930 + 17 = 947', () => {
        expect(add(930, 17)).toBe(947);
      });    

      test('1920 + 20 = 1940', () => {
        expect(add(1920, 20)).toBe(1940);
      });
})