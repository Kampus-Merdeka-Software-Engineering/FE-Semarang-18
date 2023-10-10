document.addEventListener("DOMContentLoaded", function() {
  const priceCalculatorForm = document.getElementById("price-calculator");
  const kodePosSelect = document.getElementById("kodepos");
  const hargaOutput = document.getElementById("harga");

  priceCalculatorForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const selectedKodePos = kodePosSelect.value;

    // Daftar kode pos dan harga yang sesuai
    const hargaPerKodePos = {
      "depok": 15,
      "semarang": 25,
      "makassar": 45,
      "yogyakarta": 35,
      "bandung": 38,
      "medan": 40,
      "jayapura": 77,
      "surakarta": 28,
      "Surabaya": 34,
      "Serang": 24,
      "Tangerang": 24,
      "Tangerang Selatan": 24,
      "Bekasi": 24,
      "Bogor": 24,
      "Ciamis": 24,
      "Cianjur": 24,
      "Cirebon": 24,
      "Garut": 24,
      "Indramayu": 24,
      "Karawang": 24,
      "Kuningan": 24,
      "Majalengka": 24,
      "Banjarnegara": 27,
      "Purbalingga": 27,
    // Tambahkan kode pos lain sesuai kebutuhan
  };

  // Cek apakah kode pos yang dipilih ada dalam daftar
  if (hargaPerKodePos.hasOwnProperty(selectedKodePos)) {
    const harga = hargaPerKodePos[selectedKodePos];
    hargaOutput.textContent = `Harga: Rp${harga.toFixed(3)}`;
  } else {
    hargaOutput.textContent = "Kode Pos Tidak Valid";
  }
});
});
