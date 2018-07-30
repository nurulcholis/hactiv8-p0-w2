
function cek_hari(hari){
  if(hari <= 0 || hari >= 32){
    return 0;
  }else{
    return hari;
  } 
}

//cek_hari(2);

function cek_tahun(tahun){
  if(tahun <1990 || tahun > 2200){
    return 0;
  }else{
    return tahun;
  }
}

//cek_tahun(2000);

function cek_bulan(bulan){
  switch(bulan){
    case 1 :
      return 'Januari';
      break;
    case 2 : 
      return 'Februari';
      break;
    case 3 :
      return 'Maret';
      break;
    case 4 :
      return 'April';
      break;
    case 5 :
      return 'Mei';
      break;
    case 6 :
      return 'Juni';
      break;
    case 7 :
      return 'Juli';
      break;
    case 8 : 
      return 'Agustus';
      break;
    case 9 :
      return 'September';
      break;
    case 10 :
      return 'Oktober';
      break;
    case 11 :
      return 'November';
      break;
    case 12 :
      return 'Desember';
      break;
    default:
      return 0;
      break;
  }
}

function format(hari,bulan,tahun){
  console.log('Hari ini tanggal : ' + cek_hari(hari) + ' ' + cek_bulan(bulan) + ' ' + cek_tahun(tahun));
}

format(30,7,2018);

