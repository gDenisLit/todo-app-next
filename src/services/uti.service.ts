export const utilService = {
    getRandomInt,
    makeId
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function makeId() {
    return `${Date.now()}-${getRandomInt(1000, 10000)}`
}