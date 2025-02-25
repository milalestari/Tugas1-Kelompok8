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
