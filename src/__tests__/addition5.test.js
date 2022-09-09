import { add } from '../math';

describe('Addition testing', () => {
    test('15 + 2 = 17', () => {
        expect(add(15, 2)).toBe(17);
      });

      test('320 + 3 = 323', () => {
        expect(add(320, 3)).toBe(323);
      });   

      test('512 + 15 = 527', () => {
        expect(add(512, 15)).toBe(527);
      });    

      test('920 + 17 = 937', () => {
        expect(add(920, 17)).toBe(937);
      });    

      test('1720 + 20 = 1740', () => {
        expect(add(1720, 20)).toBe(1740);
      });
})