import { add } from '../math';

describe('Addition testing', () => {
    test('13 + 2 = 15', () => {
        expect(add(13, 2)).toBe(15);
      });

      test('970 + 3 = 973', () => {
        expect(add(970, 3)).toBe(973);
      });   

      test('521 + 15 = 536', () => {
        expect(add(521, 15)).toBe(536);
      });    

      test('130 + 17 = 147', () => {
        expect(add(130, 17)).toBe(147);
      });    

      test('1900 + 20 = 1920', () => {
        expect(add(1900, 20)).toBe(1920);
      });
})