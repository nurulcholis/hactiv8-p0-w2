function increment(){
    for(var i = 1;i <= 20;i++){
        console.log(i + ' - I love coding');
    }
}

function decrement(){
    for(var i = 20;i >= 1;i--){
        console.log(i + ' - I will become fullstack developer');
    }
} 

function label(txt){
    console.log(txt);
}


label('LOOPING PERTAMA');
increment();
label('LOOPING KEDUA');
decrement();