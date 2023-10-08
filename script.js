// contoh program javascript menggunakan if,else,nested if
//contoh if else
let nilai = 75;

if (nilai >=70) {
    console.log("Anda Lulus.");
} else {
    console.log("Anda tidak lulus");
}

//contoh nested if
let nilaiMatematika = 80;
let nilaiBahasaIndonesia = 75;

if (nilaiMatematika >=70) {
    if (nilaiBahasaIndonesia >= 70) {
        console.log("Anda lulus kedua mata pelajaran.");
    } else {
        console.log("Anda hanya lulus nilai Matematika.");
    }
} else {
    console.log("Anda tidak lulus kedua mata pelajaran.");
}

// contoh program javascript menggunakan switch case
var bulan = 3;
var namaBulan;

switch (bulan) {
    case 1:
        namaBulan = "Januari";
        break;
    case 2:
        namaBulan = "Februari";
        break;
    case 3:
        namaBulan = "Maret";
        break;
    case 4:
        namaBulan = "April";
        break;
    case 5:
        namaBulan = "Mei";
        break;
    case 6:
        namaBulan = "Juni";
        break;
    case 7:
        namaBulan = "Juli";
        break;
    case 8:
        namaBulan = "Agustus";
        break;
    case 9:
        namaBulan = "September";
        break;
    case 10:
        namaBulan = "Oktober";
        break;
    case 11:
        namaBulan = "November";
    case 12:
        namaBulan = "Desember";
        break;
    default:
        namaBulan = "Bulan tidak valid";
}

console.log("Sekarang adalah bulan " + namaBulan);

//contoh program javascript menggunakan for statement

for (let i = 1; i<= 9; i++) {
    console.log(i);
}

//contoh penggunaan js menggunakan while

let i = 1;
while(i < 5) {
    console.log(i);
    i++;
}

//contoh program js menggunakan do while

let a = 1;

do {
    console.log("buku pinjaman ke-" + a);
    a++;
} while (a <= 5);


//contoh program js menggunakan function
function tambah(a,b){
    hasilTambah = a + b;
    return hasilTambah;
}

//memanggil fungsi
var nilai1 = 4;
var nilai2 = 2;
var hasilPenambahan = tambah(nilai1, nilai2);

console.log(hasilPenambahan); //->6