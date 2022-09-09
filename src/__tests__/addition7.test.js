import { add } from '../math';

describe('Addition testing', () => {
    test('3 + 2 = 5', () => {
        expect(add(3, 2)).toBe(5);
      });

      test('870 + 3 = 873', () => {
        expect(add(870, 3)).toBe(873);
      });   

      test('421 + 15 = 436', () => {
        expect(add(412, 15)).toBe(427);
      });    

      test('230 + 17 = 247', () => {
        expect(add(230, 17)).toBe(247);
      });    

      test('920 + 20 = 940', () => {
        expect(add(920, 20)).toBe(940);
      });
})