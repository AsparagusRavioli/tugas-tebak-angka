const angkarandom = Math.floor(Math.random() * 10 + 1 );
console.log(angkarandom)

let angka = -1;
while (angkarandom !== angka) {
    barang = parseInt(prompt("Tebak harga barang! \nHarga mulai dari 1 sampai 10 "));
	if (isNaN(angka)) {
		alert("harus angka!!!");
	}else if (angkarandom === angka) {
        alert("Selamat tebakan  kamu benar!");
	}else if (angkarandom > angka) {
		alert(`nilai angka lebih tinggi dari ${barang}`);
    }else{
		alert(`nilai angka lebih rendah dari ${barang}`);
	}
}

const MainLagi = confirm(" Ingin main lagi?");
    if (MainLagi) {
        location.reload();
}