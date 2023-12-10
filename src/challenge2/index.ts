function manufacture(gifts: string[], materials: string) {
    // Code here
    const result: string[] = [];
    gifts.forEach(gift => {
        let validGift: boolean = true;
        for (let charIndex = 0; charIndex < gift.length; charIndex++) {
            if(!materials.includes(gift.charAt(charIndex))) {
                validGift = false;
            }
        }
        if (validGift) {
            result.push(gift);
        }
    });
    return result;
}