export function randomString(length: number, sourceArray: string[]) {

    let randomString = '';
    const arrayLength = sourceArray.length;
  
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * arrayLength);
        randomString += sourceArray[randomIndex];
    }
  
    return randomString;
}

export function randomNum(min: number = 0, max: number, mul: number = 1) {
    max = max - min + 1;
    return Math.floor(Math.random() * max + min) * mul;
}
