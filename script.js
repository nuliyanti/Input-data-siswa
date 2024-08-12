function submitData() {
    const data = {
        nis: document.getElementById('nis').value,
        nama: document.getElementById('nama').value,
        jenisKelamin: document.getElementById('jenisKelamin').value,
        kelas: document.getElementById('kelas').value,
        jurusan: document.getElementById('jurusan').value,
        noTelepon: document.getElementById('noTelepon').value,
        alamat: document.getElementById('alamat').value
    };

    fetch('https://script.google.com/macros/s/AKfycbw6gPYOTJ83zrxmfKK6aDdW0w71OHiEYEE3jh18drJA6-MvNmfZumsljuF2f5ti5vSwKA/exec', { // Ganti YOUR_GOOGLE_SCRIPT_URL dengan URL Apps Script yang sudah di-deploy
        method: 'POST',
        mode: 'cors', // no-cors digunakan agar tidak memblokir permintaan lintas asal (cross-origin)
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('Data berhasil disimpan!');
        } else {
            alert('Gagal menyimpan data.');
        }
    })
    .catch(error => {
        alert('Terjadi kesalahan: ' + error.message);
    });
}