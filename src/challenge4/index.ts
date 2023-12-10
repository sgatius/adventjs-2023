function decode(message: string): string {
    // Code here
    const match = message.match(/\([^()]+\)/);
    if (!match) {
        return message;
    }
    const decodedMessage = match[0].slice(1, -1).split('').reverse().join('');
    return decode(message.replace(match[0], decodedMessage));
}