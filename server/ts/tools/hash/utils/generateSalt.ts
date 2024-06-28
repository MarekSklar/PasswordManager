import config from "../../../../../shared/config.js";

export function generateSalt(text: string, key: string) {

    const chars = Object.keys(config.charSet.charToHex);

    // add all character's poses in char set together
    let addedPoses = 0;
    for (let i = 0; i < text.length; i++) addedPoses += chars.indexOf(text[i]);

    // character 1 (add pos of all characters in char set together and mod by char set length)
    // get character from char set
    const character1Pos = addedPoses % chars.length;
    const character1 = chars[character1Pos];

    // character 2 (mod character1Pos + addedPosses by key length)
    // get character from key
    const character2Pos = (character1Pos + addedPoses) % key.length;
    const character2 = key[character2Pos];

    // character 3 (multiply key length and addedPoses and modulo the result by char set length)
    // get character from char set
    const character3Pos = (key.length * addedPoses) % chars.length;
    const character3 = chars[character3Pos];
    
    return text + "salty" + character1 + character2 + character3;
}