// no.1 menyusun barisan bintang
var rows1  = 5;
for(var i = 0; i < rows1; i++){
  console.log('*');
}

console.log('');


// no.2 menyusun barisan bintang dg nested looping
var rows2 = 5;
var star = '';

for(var i = 0; i < rows2; i++){
  for(var j = 0; j < rows2; j++){
    star += '*';
  }
  star += '\n';
}
console.log(star);

console.log('');

// no.3 menyusun segitiga
var rows3 = 5;
star = '';
for(var i = 0; i < rows3; i++){
  for(var j = 0; j <= i; j++){
    star += '*';
  }
  star += '\n';
}

console.log(star);
S
