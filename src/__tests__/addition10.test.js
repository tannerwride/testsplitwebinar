import { add } from '../math';

describe('Addition testing', () => {
    test('403 + 2 = 405', () => {
        expect(add(403, 2)).toBe(405);
      });

      test('970 + 3 = 973', () => {
        expect(add(970, 3)).toBe(973);
      });   

      test('331 + 15 = 346', () => {
        expect(add(331, 15)).toBe(346);
      });    

      test('50 + 17 = 67', () => {
        expect(add(50, 17)).toBe(67);
      });    

      test('1882 + 20 = 1902', () => {
        expect(add(1882, 20)).toBe(1902);
      });
})