import { adjustLights } from '../src/challenge9';
import {test, expect } from 'vitest';

test('Test #2', () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
    expect(result).toEqual(1)
})