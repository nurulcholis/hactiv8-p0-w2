
function proxytia(nama, peran){
  
 if(peran ==='' && nama !==''){
    console.log('Halo ' + nama + ' pilih peranmu untuk memulai game');

  }else if(peran ==='ksatria' && nama !==''){
  
    console.log('Selamat datang di dunia Proxytia,' + nama);
  
    console.log('Halo ksatria ' + nama + ' , kamu dapat menyerang dengan senjatamu!');

  }else if(peran ==='tabib' && nama !==''){
  
    console.log('Selamat datang di dunia proxytia, ' + nama);
  
    console.log('Halo tabib ' + nama + ' , kamu akan membantu temanmu yang terluka');

  }else if(peran ==='penyihir' && nama !==''){
  
    console.log('Selamat datang di dunia proxytia, ' + nama);
  
    console.log('Halo penyihir ' + nama + ' ciptakan keajaiban yang membantu kemenanganmu');

  }else{
  
    console.log('Nama harus diisi');

  }

}

  var nama = 'agus';
  var peran = 'ksatria';
  
  proxytia(nama, peran);
  
