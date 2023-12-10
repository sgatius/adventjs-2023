export function createChristmasTree(ornaments: string, height: number) {
    const tree: string[] = [];
    let ornament = 0;

    for (let level = height; level > 0; level--) {
        const numBlankSpaces = level - 1;
        const numOfItems = height - numBlankSpaces;
        let line = ' '.repeat(numBlankSpaces);

        for (let col = 0; col < numOfItems; col++) {
            line += `${ornaments[ornament % ornaments.length]}`;
            line += `${col === numOfItems - 1 ? '' : ' '}`;
            ornament++;
        }
        line += '\n';
        tree.push(line);
    }

    const baseLine = ' '.repeat(height - 1) + '|\n';
    tree.push(baseLine);

    return tree.join('');
}
