import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('114 - 1 = 113', () => {
        expect(subtract(114, 1)).toBe(113);
      });

      test('196 - 1 = 195', () => {
        expect(subtract(196, 1)).toBe(195);
      });

      test('710 - 1 = 709', () => {
        expect(subtract(710, 1)).toBe(709);
      });
})