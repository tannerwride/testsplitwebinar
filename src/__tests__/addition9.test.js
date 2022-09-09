import { add } from '../math';

describe('Addition testing', () => {
    test('103 + 2 = 105', () => {
        expect(add(103, 2)).toBe(105);
      });

      test('870 + 3 = 873', () => {
        expect(add(870, 3)).toBe(873);
      });   

      test('531 + 15 = 546', () => {
        expect(add(531, 15)).toBe(546);
      });    

      test('150 + 17 = 167', () => {
        expect(add(150, 17)).toBe(167);
      });    

      test('1837 + 20 = 1857', () => {
        expect(add(1837, 20)).toBe(1857);
      });
})