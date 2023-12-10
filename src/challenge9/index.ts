export function adjustLights(lights: string[]) {
    const redLight = '🔴';
    const greenLight = '🟢';
    let greenFirstErrorCounter: number = 0;
    let redFirstErrorCounter: number = 0;
    lights.forEach((light, index) => {
        // Check when start from green
        if (index % 2 === 0) {
            // Check even 0, 2, 4...
            if (light === redLight) {
                greenFirstErrorCounter += 1;
            } else {
                redFirstErrorCounter += 1;
            }
        } else {
            // Check odd 1, 3, 5...
            if (light === redLight) {
                redFirstErrorCounter += 1;
            } else {
                greenFirstErrorCounter += 1;
            }
        }
    });
    return Math.min(greenFirstErrorCounter, redFirstErrorCounter);
}