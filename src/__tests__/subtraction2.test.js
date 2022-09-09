import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('14 - 1 = 13', () => {
        expect(subtract(14, 1)).toBe(13);
      });

      test('26 - 1 = 15', () => {
        expect(subtract(26, 1)).toBe(25);
      });

      test('110 - 1 = 109', () => {
        expect(subtract(110, 1)).toBe(109);
      });
})