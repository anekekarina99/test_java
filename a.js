function main() {
    console.log("Selamat datang di Menara Sejati");

    let nama;
    while (true) {
        nama = prompt("Tolong masukkan nama anda [minimal 5 karakter]: ");
        if (nama.length >= 5) {
            break;
        } else {
            console.log("Nama anda harus lebih dari 4 karakter!");
        }
    }

    console.log(`Hello ${nama}! Selamat datang!`);

    const lantaiAwal = Math.floor(Math.random() * 10) + 1;
    console.log(`Saat ini lift berada di lantai: ${lantaiAwal}`);

    let lantaiPenjemputan, lantaiTujuan;
    while (true) {
        lantaiPenjemputan = parseInt(prompt("Silakan masukkan lantai penjemputan (1-10): "));
        if (lantaiPenjemputan >= 1 && lantaiPenjemputan <= 10) {
            break;
        } else {
            console.log("Lantai yang anda masukkan harus di antara rentang 1-10!");
        }
    }

    while (true) {
        lantaiTujuan = parseInt(prompt("Silakan masukkan lantai tujuan (1-10): "));
        if (lantaiTujuan >= 1 && lantaiTujuan <= 10) {
            break;
        } else {
            console.log("Lantai yang anda masukkan harus di antara rentang 1-10!");
        }
    }

    if (lantaiPenjemputan === lantaiTujuan) {
        console.log("Tidak perlu naik lift. Anda sudah berada di lantai tujuan.");
    } else {
        if (lantaiPenjemputan > lantaiAwal) {
            for (let lantai = lantaiAwal + 1; lantai <= lantaiPenjemputan; lantai++) {
                console.log("Lift turun ke lantai:", lantai);
            }
        } else if (lantaiPenjemputan < lantaiAwal) {
            for (let lantai = lantaiAwal - 1; lantai >= lantaiPenjemputan; lantai--) {
                console.log("Lift naik ke lantai:", lantai);
            }
        }

        console.log("Lift sudah sampai di lokasi penjemputan, pintu lift terbuka");
        console.log("Silakan masuk, Anda akan diantar ke lantai tujuan");

        if (lantaiPenjemputan > lantaiTujuan) {
            for (let lantai = lantaiPenjemputan - 1; lantai >= lantaiTujuan; lantai--) {
                console.log("Lift turun ke lantai:", lantai);
            }
        } else if (lantaiPenjemputan < lantaiTujuan) {
            for (let lantai = lantaiPenjemputan + 1; lantai <= lantaiTujuan; lantai++) {
                console.log("Lift naik ke lantai:", lantai);
            }
        }

        console.log("Lift sudah sampai di lokasi tujuan, pintu lift terbuka");
        console.log("Terima kasih, anda sudah sampai di lantai tujuan");
    }

    console.log("Program Lift selesai digunakan");
}

main();
