

const namaUMKM = "Seblak Mamah Vanda";
console.log("Nama UMKM: " + namaUMKM);

let jumlahProduk = 25;
console.log("Jumlah produk awal: " + jumlahProduk);

jumlahProduk += 10;
console.log("Jumlah produk setelah penambahan stok: " + jumlahProduk);

let seblakCeker = 12;
let seblakSpesial = 8;
let seblakLevel5 = 15;

console.log("Jumlah Seblak Ceker: " + seblakCeker);
console.log("Jumlah Seblak Spesial: " + seblakSpesial);
console.log("Jumlah Seblak Level 5: " + seblakLevel5);

let totalProduk = seblakCeker + seblakSpesial + seblakLevel5;
console.log("Total semua produk berdasarkan jenis: " + totalProduk);

function cekUsia() {
    const usia = document.getElementById('usiaInput').value;
    const hasilKategori = document.getElementById('hasilKategori');
    if (usia < 13) {
        hasilKategori.textContent = "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
        hasilKategori.textContent = "Remaja";
    } else if (usia >= 18 && usia <= 60) {
        hasilKategori.textContent = "Dewasa";
    } else if (usia > 60) {
        hasilKategori.textContent = "Lansia";
    } else {
        hasilKategori.textContent = "Masukkan usia yang valid.";
    }
}
if (document.getElementById("hasil-rating-2")) {
    let rate = 5;

    if (rate >= 4.5) {
        document.getElementById("hasil-rating-2").textContent = "⭐⭐⭐⭐⭐ Sangat Disarankan";
    } else if (rate >= 3) {
        document.getElementById("hasil-rating-2").textContent = "⭐⭐⭐ Rekomendasi Biasa";
    } else {
        document.getElementById("hasil-rating-2").textContent = "⭐ Tidak Direkomendasikan";
    }
}
if (document.getElementById("hasil-rating-1")) {
    let rating = 4;

    if (rating >= 4.5) {
        document.getElementById("hasil-rating-1").textContent = "⭐⭐⭐⭐⭐ Sangat Disarankan";
    } else if (rating >= 3) {
        document.getElementById("hasil-rating-1").textContent = "⭐⭐⭐ Rekomendasi Biasa";
    } else {
        document.getElementById("hasil-rating-1").textContent = "⭐ Tidak Direkomendasikan";
    }
}

if (document.getElementById("hasil-rating-3")) {

    let rateaja = 2.5;

    if (rateaja >= 4.5) {
        document.getElementById("hasil-rating-3").textContent = "⭐⭐⭐⭐⭐ Sangat Disarankan";
    } else if (rateaja >= 3) {
        document.getElementById("hasil-rating-3").textContent = "⭐⭐⭐ Rekomendasi Biasa";
    } else {
        document.getElementById("hasil-rating-3").textContent = "⭐ Tidak Direkomendasikan";
    }
}

// ✅ Tambahkan fungsi hitungTotal
function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

function tampilkanTotal() {
    const harga = document.getElementById('harga').value;
    const jumlah = document.getElementById('jumlah').value;

    if (harga && jumlah) {
        const total = hitungTotal(harga, jumlah);

        // Format jadi mata uang Indonesia

        const totalFormatted = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(total);

        document.getElementById('total-belanja').textContent = totalFormatted;
    } else {
        alert("Mohon masukkan harga dan jumlah.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formKontak");
    if (!form) return;

    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // sembunyikan dulu semuanya
        errorMsg.classList.add("d-none");
        successMsg.classList.add("d-none");

        // errorMsg.style.display = "none";
        // successMsg.style.display = "none";

        if (nama.value.trim() === "" || email.value.trim() === "" || pesan.value.trim() === "") {
            // errorMsg.textContent = "⚠️ Semua field harus diisi!";
            // errorMsg.style.display = "block";
            errorMsg.classList.remove("d-none");
        } else {
            // successMsg.textContent = "✅ Pesan berhasil dikirim!";
            // successMsg.style.display = "block";
            successMsg.classList.remove("d-none");
            form.reset();

            // opsional: otomatis hilang setelah 3 detik
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 10000);
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const produkInput = document.getElementById("produkInput");
    const tambahBtn = document.getElementById("tambahBtn");
    const daftarProduk = document.getElementById("daftarProduk");
    const previewProduk = document.getElementById("previewProduk");
    const temaSelect = document.getElementById("temaSelect");

    // ✅ Jalankan bagian produk hanya jika tombol tambah ada di halaman
    if (tambahBtn && produkInput && daftarProduk && previewProduk) {
        tambahBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const namaProduk = produkInput.value.trim();
            if (namaProduk !== "") {
                const li = document.createElement("li");
                li.textContent = namaProduk;

                // 🔧 Perbaiki juga syntax event mouseover/mouseout (typo di kode lama)
                li.addEventListener("mouseover", () => {
                    li.style.backgroundColor = "#e0e0e0";
                });
                li.addEventListener("mouseout", () => {
                    li.style.backgroundColor = "";
                });

                li.addEventListener("dblclick", () => {
                    if (confirm("Yakin ingin menghapus produk ini?")) {
                        li.remove();
                    }
                });

                daftarProduk.appendChild(li);
                produkInput.value = "";
                previewProduk.textContent = "";
            }
        });

        produkInput.addEventListener("keyup", function () {
            previewProduk.textContent = produkInput.value;
        });
    }

    // ✅ Jalankan bagian tema hanya jika ada elemen temaSelect
    if (temaSelect) {
        temaSelect.addEventListener("change", function () {
            document.body.style.backgroundColor = temaSelect.value;
        });
    }
});

const formWebinar = document.getElementById("formWebinar");
const namaLengkap = document.getElementById("namaLengkap");
const emailWebinar = document.getElementById("emailWebinar");
const noHp = document.getElementById("noHp");
const topikWebinar = document.getElementById("topikWebinar");
const syaratKetentuan = document.getElementById("syaratKetentuan");

function showError(input, message) {
    const errorDiv = document.getElementById(input.id + "Error");
    errorDiv.textContent = message;
}

function clearError(input) {
    const errorDiv = document.getElementById(input.id + "Error");
    errorDiv.textContent = "";
}

function validateNama() {
    if (namaLengkap.value.trim().length < 3) {
        showError(namaLengkap, "Nama lengkap minimal 3 karakter.");
        return false;
    }
    clearError(namaLengkap);
    return true;
}

function validateEmail() {
    const emailValue = emailWebinar.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        showError(emailWebinar, "Format email harus @gmail.com");
        return false;
    }
    if (emailValue.endsWith("@yahoo.com")) {
        showError(emailWebinar, "Domain yahoo.com tidak diizinkan.");
        return false;
    }
    clearError(emailWebinar);
    return true;
}

function validateNoHp() {
    if (!/^[0-9]+$/.test(noHp.value.trim())) {
        showError(noHp, "No. HP harus berupa angka.");
        return false;
    }
    clearError(noHp);
    return true;
}

function validateTopik() {
    if (topikWebinar.value === "") {
        showError(topikWebinar, "Anda harus memilih topik webinar.");
        return false;
    }
    clearError(topikWebinar);
    return true;
}

function validateSyarat() {
    if (!syaratKetentuan.checked) {
        showError(
            syaratKetentuan,
            "Anda harus menyetujui syarat & ketentuan."
        );
        return false;
    }
    clearError(syaratKetentuan);
    return true;
}

namaLengkap.addEventListener("input", validateNama);
emailWebinar.addEventListener("input", validateEmail);
noHp.addEventListener("input", validateNoHp);
topikWebinar.addEventListener("change", validateTopik);
syaratKetentuan.addEventListener("change", validateSyarat);

formWebinar.addEventListener("submit", function (e) {
    e.preventDefault();
    const isNamaValid = validateNama();
    const isEmailValid = validateEmail();
    const isNoHpValid = validateNoHp();
    const isTopikValid = validateTopik();
    const isSyaratValid = validateSyarat();

    if (
        isNamaValid &&
        isEmailValid &&
        isNoHpValid &&
        isTopikValid &&
        isSyaratValid
    ) {
        alert("Pendaftaran webinar berhasil!");
        formWebinar.reset();
    }
});

