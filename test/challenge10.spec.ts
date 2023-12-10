import { describe, expect, test } from 'vitest';
import { createChristmasTree } from '../src/challenge10';

describe('Challenge 10', () => {
    test('Test #01', () => {
        expect(createChristmasTree('x', 3)).toBeTypeOf('string');
    })

    test('Test #02', () => {
        const result = createChristmasTree('x', 3);
        const expected = '  x\n' + ' x x\n' + 'x x x\n' + '  |\n'
        expect(result).toBe(expected);
    })

    test('Test #03', () => {
        const result = createChristmasTree('xo', 4);
        const expected = '   x\n' + '  o x\n' + ' o x o\n' + 'x o x o\n' + '   |\n'
        expect(result).toBe(expected);
    })

    test('Test #04', () => {
        const result = createChristmasTree('123', 5);
        const expected = "    1\n" + "   2 3\n" + "  1 2 3\n" + " 1 2 3 1\n" + "2 3 1 2 3\n" + "    |\n";

        expect(result).toBe(expected);
    })
});