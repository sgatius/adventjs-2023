function maxDistance(movements: string) {
    const right = movements.replace(/[^>]/g, '')?.length;
    const left = movements.replace(/[^<]/g, '')?.length;
    const stars = movements.replace(/[^\*]/g, '')?.length;

    // Code here
    return Math.abs(right - left) + stars;
}