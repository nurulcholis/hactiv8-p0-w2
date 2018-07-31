function balikKata(txt){
    var bantu = '';
    for(var i = txt.length-1; i>=0; i--){
        bantu += txt[i];
    }
    return bantu;
}

// penelusuran
// ex : super = 5 - 1 -> 4
// i = 4 i >= 0 ->true -> txt[4] = S
// i = 3 i >= 0 ->true -> txt[3] = u
// i = 2 i >= 0 ->true -> txt[2] = p
// i = 1 i >= 0 ->true -> txt[1] = e
// i = 0 i >= 0 ->true -> txt[0] = r
// i = -1 i >=0 -> false -> end process

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS