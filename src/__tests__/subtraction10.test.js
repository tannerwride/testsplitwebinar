import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('1711 - 1 = 1710', () => {
        expect(subtract(1711, 1)).toBe(1710);
      });

      test('856 - 1 = 855', () => {
        expect(subtract(856, 1)).toBe(855);
      });

      test('130 - 1 = 129', () => {
        expect(subtract(130, 1)).toBe(129);
      });
})