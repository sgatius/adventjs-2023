function findNaughtyStep(original: string, modified: string) {
    // Code here
    if (original === modified) {
        return '';
    }
    const originalArray = original.split('');
    const modifiedArray = modified.split('');

    for (let i = 0; i < Math.max(originalArray.length, modifiedArray.length); i++) {
        if (originalArray[i] !== modifiedArray[i]) {
            return originalArray.length >= modifiedArray.length ? originalArray[i] : modifiedArray[i];
        }
    }
}