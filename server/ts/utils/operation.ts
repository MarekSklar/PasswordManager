export function xor(bin1: string, bin2: string) {
    
    const length = bin1.length > bin2.length ? bin1.length : bin2.length;
    const longer = bin1.length > bin2.length ? bin1 : bin2;
    const shorter = bin1.length > bin2.length ? bin2 : bin1;

    let binXor = '';

    for (let i = 0; i < length; i++) {

        const bitL = +longer[longer.length-1 - i];
        const bitS = shorter.length-1 - i < 0 ? 0 : +shorter[shorter.length-1 - i];

        const bitXor = (bitL + bitS) % 2;
        binXor = bitXor + binXor;
    }

    return binXor;
}
