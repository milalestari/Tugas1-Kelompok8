// Kalkulator sederhana
const readline = require('readline');
const Table = require('cli-table3'); // Pastikan sudah diinstall
const {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  absolut,
  modulus,
  maksimum,
  minimum,
  bulatkan,
} = require('./solution');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat tabel untuk daftar operasi
function tampilkanMenu() {
  const table = new Table({
    head: ['No', 'Operasi'],
    colWidths: [5, 20],
  });

  const operasi = [
    'Tambah', 'Kurang', 'Kali', 'Bagi', 'Pangkat', 'Faktorial',
    'Cek Bilangan Prima', 'Nilai Absolut', 'Modulus', 'Maksimum', 'Minimum', 'Pembulatan'
  ];

  operasi.forEach((op, index) => table.push([index + 1, op]));

  console.log('\n=== KALKULATOR SEDERHANA ===');
  console.log(table.toString());
}

function kalkulator() {
  tampilkanMenu();

  rl.question('Masukkan pilihan (1-12): ', (choice) => {
    const pilihan = parseInt(choice);

    if (pilihan >= 1 && pilihan <= 12) {
      if ([6, 7, 8, 12].includes(pilihan)) {
        rl.question('Masukkan satu angka: ', (num) => {
          const angka = parseFloat(num);
          let hasil;
          switch (pilihan) {
            case 6:
              hasil = faktorial(angka);
              break;
            case 7:
              hasil = isPrima(angka) ? 'Bilangan Prima' : 'Bukan Bilangan Prima';
              break;
            case 8:
              hasil = absolut(angka);
              break;
            case 12:
              hasil = bulatkan(angka);
              break;
          }
          tampilkanHasil(angka, null, hasil);
          rl.close();
        });
      } else {
        rl.question('Masukkan angka pertama: ', (num1) => {
          rl.question('Masukkan angka kedua: ', (num2) => {
            const angka1 = parseFloat(num1);
            const angka2 = parseFloat(num2);
            let hasil;
            switch (pilihan) {
              case 1:
                hasil = tambah(angka1, angka2);
                break;
              case 2:
                hasil = kurang(angka1, angka2);
                break;
              case 3:
                hasil = kali(angka1, angka2);
                break;
              case 4:
                hasil = bagi(angka1, angka2);
                break;
              case 5:
                hasil = pangkat(angka1, angka2);
                break;
              case 9:
                hasil = modulus(angka1, angka2);
                break;
              case 10:
                hasil = maksimum(angka1, angka2);
                break;
              case 11:
                hasil = minimum(angka1, angka2);
                break;
            }
            tampilkanHasil(angka1, angka2, hasil);
            rl.close();
          });
        });
      }
    } else {
      console.log('Pilihan tidak valid! Masukkan angka antara 1-12.');
      rl.close();
    }
  });
}

// Fungsi untuk menampilkan hasil dalam bentuk tabel
function tampilkanHasil(angka1, angka2, hasil) {
  const table = new Table({
    head: ['Angka 1', 'Angka 2', 'Hasil'],
    colWidths: [10, 10, 15],
  });

  if (angka2 === null) {
    table.push([angka1, '-', hasil]);
  } else {
    table.push([angka1, angka2, hasil]);
  }

  console.log('\n=== HASIL PERHITUNGAN ===');
  console.log(table.toString());
}

kalkulator();
