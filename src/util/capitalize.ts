export const capitalize = (str: string) => {
    const words = str.split(' ')

    return words.map(word => {
        const letters = word.split('')

        letters[0] = letters[0].toUpperCase()

        return letters.join('')
    }).join(' ')
}