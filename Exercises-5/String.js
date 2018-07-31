// no.1

var word = "Javascript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
console.log('-------------------------------------------------------------------------------------------');
console.log('');

// no.2
var word = 'Wow Javascript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word : ' + exampleFirstWord);
console.log('Second Word : ' + secondWord);
console.log('Third Word : ' + thirdWord);
console.log('Four Word : ' + fourthWord);
console.log('Five Word : ' + fifthWord);
console.log('-----------------------------------------------------------------------------------------------');
console.log('');


// no.3 substring(index,panjang_yg_diambil)

var word3 = 'Wow Javascript is so cool';
var exampleFirstWord3 = word3.substring(0,3);
var secondWord3 = word3.substring(4,14);
var thirdWord3 = word3.substring(15,17);
var fourthWord3 = word3.substring(18,20);
var fifthWord3 = word3.substring(21,25);

console.log(exampleFirstWord3 + ' ' + secondWord3 + ' ' + thirdWord3 + ' ' + fourthWord3 + ' ' + fifthWord3);
console.log('----------------------------------------------------------------------------------------------');
console.log('');


// no.4

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
console.log('----------------------------------------------------------------------------------------------');
console.log('');
