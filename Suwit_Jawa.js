// menangkap pilihan player
var p = prompt('Silahkan pilihan : Gajah, Semut, Orang');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();
if (comp < 0.34){
    comp = 'Gajah';
} else if (comp >= 0.34 && comp < 0.67){
    comp = 'Orang';
}else{
    comp = 'Semut';
}

var hasil = '';
// menentukan rules
if (p == comp){
    hasil = 'SERI'
}else if ( p == 'Gajah') {
    //if ( comp == 'Orang'){
      //  hasil = 'MENANG!';
    //}else {
      // hasil = 'KALAH!'; 
    //}
    hasil = ( comp == 'Orang') ? 'MENANG!' : 'KALAH!';

}else if ( p == 'Orang'){
    hasil = (comp == 'Gajah') ? 'KALAH!' : 'MENANG!';
}else if (p == 'Semut'){
    hasil = ( comp == 'Orang') ? 'KALAH!' : 'MENANG!';
}else {
    hasil = 'Memasukkan pilihan yang salah!';
}
// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil ); 