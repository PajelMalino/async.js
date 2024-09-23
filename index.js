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

