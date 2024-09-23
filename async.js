// const { reject } = require("async");

// // async di node.js
// async function fetchData() {
//     return "Data berhasil diambil!";
// };

// fetchData().then(result => {
//     console.log(result); // Output: Data berhasil diambil
// });

// // promise di node.js
// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise berhasil");
//     } else {
//         reject("Promise gagal")
//     }
// });

// myPromise
//     .then(result => console.log(result)) // Output: Promise berhasil
//     .catch(error => console.log(error)); // untuk menganani error

// // https - mengakses API Dummy di node.js
// const https = require('https');
// const { resolve } = require("path");

// https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
//     let data = '';

//     // menerima potongan data
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });

//     // seluruh data telah diterima
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// }).on("error", (err) => {
//     console.log("Error", + err.message)
// });

// // timeout di node.js
// console.log("Mulai");
// setTimeout(() => {
//     console.log("Ini dieksekusi setelah 3 detik");
// }, 3000);
// console.log("Akhir");

// // interval di node.js
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Interval ke: ${count}`);
//     if (count === 5) {
//         clearInterval(intervalId);
//         console.log("Interval selesai.");
//     }
// }, 1000);

// // promise dengan timeout di node.js
// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Promise diselesaikan setelah ${ms} ms`);
//         }, ms);
//     });
// }

// delay(2000).then(result => {
//     console.log(result); // Output: Promise diselesaikan setelah 2000 ms
// });

/*
 * study kasus:
 * hafizh melamar si fulanah
 */

/**
 * study kasus:
 * hafiz melamar si fulanah
 */

// aksi melamar dengan memasukkan cv
const melamarFulanah = async (santriProfile) => {
  return new Promise((resolve, reject) => {
    // fulanah memvalidasi
    // fulanah ingin si fulan mandiri
    if (!santriProfile.sudah_mandiri) {
      reject("ditolak, fulanah menginginkan si fulan mandiri");
    }
    // fulanah menginginkan minimal 10 juz
    if (santriProfile.hafal_juz < 10) {
      reject("ditolak, fulanah menginginkan si fulan minimal hafal 10 juz");
    }

    console.log("si fulan lolos kreteria");

    // fulanah mau isqoroh 7 hari
    // let hari = 0;
    // const istiqoroh = setInterval(() => {
    // hari++;
    // console.log('si fulanah istiqoroh hari ke ', hari);

    // if (hari >= 7) {
    // console.log('si fulanah selesai istiqorah');
    // const keputusan = true;
    // if (keputusan) {
    // resolve('si fulan di terima');
    // } else {
    // resolve('si fulan di tolak');
    // }
    // clearInterval(istiqoroh);
    // }
    // }, 1000); // milisecond

    let hari = 0;
    const istiqoroh = setTimeout(() => {
      console.log("si fulanah selesai istiqorah");
      const keputusan = true;
      if (keputusan) {
        resolve("si fulan di terima");
      } else {
        resolve("si fulan di tolak");
      }
    }, 7000); // milisecond
  });
};

(async () => {
  // profile santri
  try {
    const santri = {
      name: "hafiz",
      hafal_juz: 30,
      sudah_mandiri: true,
    };

    // hasil keputusan di
    const hasil = await melamarFulanah(santri);
    console.log("hasil: ", hasil);
  } catch (error) {
    // ketika di reject
    console.log(error);
  }
})();
