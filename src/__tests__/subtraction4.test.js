import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('54 - 1 = 53', () => {
        expect(subtract(54, 1)).toBe(53);
      });

      test('66 - 1 = 65', () => {
        expect(subtract(66, 1)).toBe(65);
      });

      test('310 - 1 = 309', () => {
        expect(subtract(310, 1)).toBe(309);
      });
})