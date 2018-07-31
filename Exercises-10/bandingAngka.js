function bandingkanAngka(num1,num2){
    // cek apakah nilai2 sama dengan nilai 1
    if(num2 === num1){
        // jika iya maka return -1
        return -1;
    // jika tidak cek apakah nilai2 lebih besar dr nilai 1
    }else if(num2 > num1){
        //jika iya return true
        return true;
    }else{
        // jika tidak return false
        return false;
    }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false