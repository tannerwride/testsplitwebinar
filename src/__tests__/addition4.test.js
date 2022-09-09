import { add } from '../math';

describe('Addition testing', () => {
    test('25 + 2 = 27', () => {
        expect(add(25, 2)).toBe(27);
      });

      test('32 + 3 = 35', () => {
        expect(add(32, 3)).toBe(35);
      });   

      test('412 + 15 = 427', () => {
        expect(add(412, 15)).toBe(427);
      });    

      test('520 + 17 = 537', () => {
        expect(add(520, 17)).toBe(537);
      });    

      test('172 + 20 = 192', () => {
        expect(add(172, 20)).toBe(192);
      });
})