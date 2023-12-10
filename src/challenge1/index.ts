function findFirstRepeated(gifts: number[]) {
    const uniqueGiftsId = new Set();
    for (const id of gifts) {
        if (uniqueGiftsId.has(id)) {
            return id;
        }
        uniqueGiftsId.add(id);
    }
    return -1
}