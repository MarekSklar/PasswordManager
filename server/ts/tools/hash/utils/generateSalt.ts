import { ASCII } from "../../../../../shared/customTypes";

export function generateSalt(text: string, key: string) {

    // add all character's poses in ASCII together
    let addedPoses = 0;
    for (let i = 0; i < text.length; i++) addedPoses += ASCII.indexOf(text[i]);

    // character 1 (add pos of all characters in ASCII together and mod by ASCII length)
    // get character from ASCII
    const character1Pos = addedPoses % ASCII.length;
    const character1 = ASCII[character1Pos];

    // character 2 (mod character1Pos + addedPosses by key length)
    // get character from key
    const character2Pos = (character1Pos + addedPoses) % key.length;
    const character2 = key[character2Pos];

    // character 3 (multiply key length and addedPoses and modulo the result by ASCII length)
    // get character from ASCII
    const character3Pos = (key.length * addedPoses) % ASCII.length;
    const character3 = ASCII[character3Pos];
    
    return text + "salty" + character1 + character2 + character3;
}