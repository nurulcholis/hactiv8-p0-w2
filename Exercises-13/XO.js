function xo(txt){
    // buat variabel bantu utk menghitung jumlah x & o
    var x=0;
    var o=0;
    // telusuri tiap huruf satu per satu
    for(var i = 0; i < txt.length; i++){
    // cek ada ga huruf x
        if(txt[i] == 'x'){
        // ada maka tambah satu pd varibel x
            x++;
        }
    // cek ada ga huruf o
        if(txt[i] == 'o'){
        // ada maka tambah satu pd variabel o
            o++;
        }
    }

    // cek jumlah nilai pd variabel x dan o
    if(x == o){
    // jika sama maka return true
        return true;
    }
    // jika tidak sama maka return false
    else{
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true