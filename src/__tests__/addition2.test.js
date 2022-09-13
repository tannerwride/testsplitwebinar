import { add } from '../math';

describe('Addition testing', () => {
    test('5 + 2 = 7', () => {
        expect(add(1, 0)).toBe(1);
      });

      test('12 + 3 = 15', () => {
        expect(add(12, 3)).toBe(15);
      });   

      test('22 + 15 = 37', () => {
        expect(add(22, 15)).toBe(37);
      });    

      test('32 + 17 = 49', () => {
        expect(add(32, 17)).toBe(49);
      });    

      test('42 + 20 = 62', () => {
        expect(add(42, 20)).toBe(62);
      });
})