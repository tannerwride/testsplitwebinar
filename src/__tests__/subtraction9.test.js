import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('1411 - 1 = 1410', () => {
        expect(subtract(1411, 1)).toBe(1410);
      });

      test('256 - 1 = 255', () => {
        expect(subtract(256, 1)).toBe(255);
      });

      test('930 - 1 = 929', () => {
        expect(subtract(930, 1)).toBe(929);
      });
})