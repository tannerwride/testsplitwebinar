import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('24 - 1 = 23', () => {
        expect(subtract(24, 1)).toBe(23);
      });

      test('36 - 1 = 35', () => {
        expect(subtract(36, 1)).toBe(35);
      });

      test('210 - 1 = 209', () => {
        expect(subtract(210, 1)).toBe(209);
      });
})