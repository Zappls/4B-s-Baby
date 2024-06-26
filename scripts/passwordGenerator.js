import { rndNumInLen } from './encoder.js';

//Generates a password with user defined length.

export function generatePassword (length) {

    let generatedPassword = "";
    

    const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',  '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'
    ]

    while (generatedPassword.length < length) {

        generatedPassword += charArray[rndNumInLen(charArray)]

    }
    console.log(generatedPassword);
    return generatedPassword;
}

