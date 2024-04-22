// key
export type FieldKey = Array<string>;
export type Key = Array<FieldKey>;

// galois field
export type GaloisField = string[][];
export type GaloisFields = Array<GaloisField>;

// password
export type Password = {
    name: string;
    login: string;
    tag: string;
    text: string;
};
export type Data = Array<Password>;

export const bigSplitter = "!<0~0>!";
export const smallSplitter = "(X,,X)";

// lookup tables and just ASCII
export const ASCII = [
    ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ':', ';', '<', '=', '>', '?', '@',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '[', '\\', ']', '^', '_', '`',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '{', '|', '}', '~'
];