function organizeGifts(gifts: string) {
    const regex: RegExp = /\d+[a-zA-Z]/g;
    const matches = gifts.match(regex) ?? [];
    const result: string[] = [];
    for (const giftToken of matches) {
        const giftQuantity: number = Number(giftToken.match(/\d+/)![0]);
        const giftType: string = giftToken.match(/[a-zA-Z]/)![0];
        const palletCount: number = Math.floor(giftQuantity / 50);
        const boxCount: number = Math.floor((giftQuantity % 50) / 10);
        const bagCount: number = giftQuantity % 10;
        result.push(`[${giftType}]`.repeat(palletCount));
        result.push(`{${giftType}}`.repeat(boxCount));
        bagCount && result.push(`(${giftType.repeat(bagCount)})`);
    }
    return result.join('');
}