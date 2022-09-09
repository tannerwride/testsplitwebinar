import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('74 - 1 = 73', () => {
        expect(subtract(74, 1)).toBe(73);
      });

      test('86 - 1 = 85', () => {
        expect(subtract(86, 1)).toBe(85);
      });

      test('410 - 1 = 409', () => {
        expect(subtract(410, 1)).toBe(409);
      });
})