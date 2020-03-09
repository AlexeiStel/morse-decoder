const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '|||||':  ' ',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr10 = [];
    let arr2 = [];
    let arrMorze =[];
    let word;
    let k = 0;
    
    for (let i = 0; i < expr.length / 10; i++) {
        arr10[i] = [];
    }
    for (let i = 0; i < expr.length / 10; i++) {
        arr2[i] = [];
    }
    for (let i = 0; i < arr10.length; i++) {
        for (let j = 0; j < 10; j++) {
            arr10[i][j] = expr[k]; 
            k++;
        }
    arr.push(arr10[i].join(''));
    }
   
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < 5; i++) {      
               arr2[j][0] = arr[j].slice(0, 2);
               arr2[j][1] = arr[j].slice(2, 4);
               arr2[j][2] = arr[j].slice(4, 6);
               arr2[j][3] = arr[j].slice(6, 8);
               arr2[j][4] = arr[j].slice(8);
       }
   }
   for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        if (arr2[i][j] == 00) {
            arr2[i][j] = '';
        } else if (arr2[i][j] == 10) {
            arr2[i][j] = '.';
        } else if (arr2[i][j] == 11) {
            arr2[i][j] = '-';
        } else if (arr2[i][j] == "**" ) {
            arr2[i][j] = '|';
    }
}
arrMorze[i] = arr2[i].join('');

}
    word = arrMorze.map(function (item) {
    for (let key in MORSE_TABLE) {
        if (item == key) {
            return item = MORSE_TABLE[key]; 
        }
    }
});
return word.join('');
}


module.exports = {
    decode
};