import { GaloisField, GaloisFields } from "../../../shared/customTypes";
import { binToHex, hextoBin } from "./convert";

export function binariseGF(GF: GaloisField) {

    const binGF: GaloisField = [[], [], [], []];
    for (let i = 0; i < GF.length; i++) {
        for (let j = 0; j < GF[i].length; j++) {
            
            const byte = GF[i][j];
            binGF[i].push(hextoBin(byte));
        }
        
    }

    return binGF;
}

export function hexadecimaliseGF(GF: GaloisField) {
    
    const binGF: GaloisField = [[], [], [], []];
    for (let i = 0; i < GF.length; i++) {
        for (let j = 0; j < GF[i].length; j++) {
            
            const byte = binToHex(GF[i][j]);
            binGF[i].push(byte);
        }
        
    }

    return binGF;
}

export function processTextIntoGFs(dataHex: string) {
    
    const GFArea = 128 / 4; // (x)16 -> (xxxx)2, (xx)16 -> (xxxxxxxx)2 (1 byte)

    const GFs: GaloisFields = [];

    for (let i = 0; i < dataHex.length; i += GFArea) {

        const GF: GaloisField = [[], [], [], []];
        const GFHex = dataHex.substring(i, i + GFArea);

        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {

                const byteStart = j*8 + k*2;
                const byteEnd = byteStart + 2;
                const byte = GFHex.substring(byteStart, byteEnd);
                GF[j].push(byte);
            }
        }

        GFs.push(GF);
    }

    return GFs;
}

export function processGFsIntoText(GFs: GaloisFields) {
    
    let finalString = "";

    GFs.forEach(GF => {
        GF.forEach(row => {
            row.forEach(byte => {
                finalString += byte;
            });
        });
    });

    return finalString;
}
