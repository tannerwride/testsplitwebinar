import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('14 - 1 = 13', () => {
        expect(subtract(74, 1)).toBe(73);
      });

      test('96 - 1 = 95', () => {
        expect(subtract(96, 1)).toBe(95);
      });

      test('610 - 1 = 609', () => {
        expect(subtract(610, 1)).toBe(609);
      });
})