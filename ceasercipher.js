/***
 * if the encryption is done with +3 # single will represent
 * +3 -3 +5 -5
 */


const sentence = "Zhe fox will always be clever";
const sentenceArray = sentence.split(' ');

let encryptedMessage = '';



// Encryption starts


for(let i=0; i<sentenceArray.length; i++){
    const sentenceWordArray = sentenceArray[i].split('');
    let newWord = '';
    for(let j=0; j<sentenceWordArray.length; j++){
        const sentenceLetter = sentenceWordArray[j];
        const asciiValue = sentenceLetter.charCodeAt(j);
        let letter = '';
        if(asciiValue >= 65 && asciiValue <= 90){
            letter = encryptUpperCase(asciiValue);
        }else if(asciiValue >= 97 && asciiValue <= 122){
            letter = encryptLowerCase(asciiValue);
        }
        newWord = newWord.concat(letter);
    }
    encryptedMessage = encryptedMessage + "#" + newWord
}



function encryptUpperCase(val){
    const increasedVal = val + 3;
    const character = String.fromCharCode(increasedVal);
    if(increasedVal > 90){
        const newVal = increasedVal - 91;
        const newIncreasedVal = 65 + newVal;
        const newChar = String.fromCharCode(newIncreasedVal);
        return newChar;
    }else{
        return character;
    }
}

function encryptLowerCase(val){
    const increasedVal = val + 3;
    const character = String.fromCharCode(increasedVal);
    if(increasedVal > 122){
        const newVal = increasedVal - 123;
        const newIncreasedVal = 97 + newVal;
        const newCharacter = String.fromCharCode(newIncreasedVal);
        return newCharacter;
    }else{
        return character;
    }
}



// Decryption starts

let decryptMessage = "";
const encryptMessageArray = encryptedMessage.split("#").filter((item)=> item != '');


for(let i=0; i<encryptMessageArray.length; i++){
    const decrptWord = encryptMessageArray[i];
    let word = '';
    for(let j=0; j<decrptWord.length; j++){
        let letter = '';
        const decryptLetter = decrptWord[j];
        letter = decryptEncryptMessage(decryptLetter);
        word = word.concat(letter);
    }
    decryptMessage = decryptMessage + " " + word;
}



function decryptEncryptMessage(val){
    const charValue = val.charCodeAt(0);
    const decreasedVal = charValue - 3;
    if(decreasedVal < 65){
        const char1 = 65 - decreasedVal;
        const newCharVal = 91 - char1;
        const character = String.fromCharCode(newCharVal);
        return character;
    }
    else if(decreasedVal <= 90 && decreasedVal >= 65){
        const character = String.fromCharCode(decreasedVal);
        return character;
    }
    else if(decreasedVal < 97){
        const char1 = 97 - decreasedVal;
        const newCharVal = 123 - char1;
        const character = String.fromCharCode(newCharVal);
        return character;
    }
    else if(decreasedVal <= 122 && decreasedVal >= 97){
        const character = String.fromCharCode(decreasedVal);
        return character
    }

}