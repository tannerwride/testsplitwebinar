import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('514 - 1 = 513', () => {
        expect(subtract(514, 1)).toBe(513);
      });

      test('296 - 1 = 295', () => {
        expect(subtract(296, 1)).toBe(295);
      });

      test('730 - 1 = 729', () => {
        expect(subtract(730, 1)).toBe(729);
      });
})