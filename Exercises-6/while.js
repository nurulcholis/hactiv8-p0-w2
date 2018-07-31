function loop1(){
    var start = 2;
    while(start <= 20){
        console.log(start + ' - I love coding');
        start = start+2;
    }
}

function loop2(){
    var start = 20;
    while(start >= 2){
        console.log(start + ' - I will become fullstack developer');
        start = start-2;
    }
}

function disp(txt){
    console.log(txt);
}

disp('LOOPING PERTAMA');
loop1();
disp('LOOPING KEDUA');
loop2();