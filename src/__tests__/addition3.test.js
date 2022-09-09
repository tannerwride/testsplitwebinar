import { add } from '../math';

describe('Addition testing', () => {
    test('15 + 2 = 17', () => {
        expect(add(15, 2)).toBe(17);
      });

      test('22 + 3 = 25', () => {
        expect(add(22, 3)).toBe(25);
      });   

      test('42 + 15 = 57', () => {
        expect(add(42, 15)).toBe(57);
      });    

      test('52 + 17 = 69', () => {
        expect(add(52, 17)).toBe(69);
      });    

      test('142 + 20 = 162', () => {
        expect(add(142, 20)).toBe(162);
      });
})