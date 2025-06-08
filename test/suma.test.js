import { describe, it, expect } from 'vitest';
import { suma } from '../src/suma.js';

describe('función suma', () => {
    it('debería retornar 5 para 2 + 3', () => {
        expect(suma(2, 3)).toBe(5);
    });

    it('debería retornar -1 para 2 + (-3)', () => {
        expect(suma(2, -3)).toBe(-1);
    });
});