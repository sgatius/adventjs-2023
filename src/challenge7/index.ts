function drawGift(size: number, symbol: string) {
    let bgSize = size - 2

    bgSize += +!(bgSize + 1)

    let response = ''

    let topCenter = ''
    let bottomCenter = ''

    for (const a of [...Array.from({ length: bgSize }).keys()]) {
        const c = '#'
            + symbol.repeat(bgSize)
            + '#' + symbol.repeat(a) + '#'
        bottomCenter = c + '\n' + bottomCenter
        topCenter += ' '.repeat(bgSize - a) + c + '\n'
    }

    response = ' '.repeat(size - 1)
        .concat('#'.repeat(size))
        .concat('\n')
        .concat(
            (topCenter
                .concat('#'.repeat(size))
                .concat(symbol.repeat(bgSize))
                .concat('#\n')
                .concat(bottomCenter)
                .concat('#'.repeat(size))
                .concat('\n'))
                .repeat(+!!(size - 1)))


    return response
}