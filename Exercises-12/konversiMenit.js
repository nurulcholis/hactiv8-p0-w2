function getJam(menit){
    return Math.floor(menit/60);
}

function getSisa(menit){
    var sisa = menit % 60;
    var transfer = sisa.toString();
    if(sisa < 10){
        transfer = transfer.replace(transfer,'0'+transfer);
    }
    return transfer;
}

function konversiMenit(menit){
    return getJam(menit) + ':' + getSisa(menit);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00