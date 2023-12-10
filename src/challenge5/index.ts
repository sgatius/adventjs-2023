function cyberReindeer(road: string, time: number) {
    const result: string[] = [road];
    let previousChar: string = '.';

    for (let step = 1; step < time; step++) {
        if (step === 5) {
            road = road.replace(/\|/g, '*');
        }

        const match = road.match(/S[\*\.]/);
        if (match) {
            const currentChar = match[0][1];
            road = road.replace(match[0], `${previousChar}S`);
            previousChar = currentChar;
        }

        result.push(road);
    }

    return result;
}