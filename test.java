import random

def main():
    print("Selamat datang di Menara Sejati")
    while True:
        nama = input("Tolong masukkan nama anda [minimal 5 karakter]: ")
        if len(nama) >= 5:
            break
        else:
            print("Nama anda harus lebih dari 4 karakter!")

    print(f"Hello {nama}! Selamat datang!")

    lantai_awal = random.randint(1, 10)
    print(f"Saat ini lift berada di lantai: {lantai_awal}")

    while True:
        lantai_penjemputan = int(input("Silakan masukkan lantai penjemputan (1-10): "))
        if 1 <= lantai_penjemputan <= 10:
            break
        else:
            print("Lantai yang anda masukkan harus di antara rentang 1-10!")

    while True:
        lantai_tujuan = int(input("Silakan masukkan lantai tujuan (1-10): "))
        if 1 <= lantai_tujuan <= 10:
            break
        else:
            print("Lantai yang anda masukkan harus di antara rentang 1-10!")

    if lantai_penjemputan == lantai_tujuan:
        print("Tidak perlu naik lift. Anda sudah berada di lantai tujuan.")
    else:
        if lantai_penjemputan > lantai_awal:
            for lantai in range(lantai_awal + 1, lantai_penjemputan + 1):
                print("Lift turun ke lantai:", lantai)
        elif lantai_penjemputan < lantai_awal:
            for lantai in range(lantai_awal - 1, lantai_penjemputan - 1, -1):
                print("Lift naik ke lantai:", lantai)

        print("Lift sudah sampai di lokasi penjemputan, pintu lift terbuka")
        print("Silakan masuk, Anda akan diantar ke lantai tujuan")

        if lantai_penjemputan > lantai_tujuan:
            for lantai in range(lantai_penjemputan - 1, lantai_tujuan - 1, -1):
                print("Lift turun ke lantai:", lantai)
        elif lantai_penjemputan < lantai_tujuan:
            for lantai in range(lantai_penjemputan + 1, lantai_tujuan + 1):
                print("Lift naik ke lantai:", lantai)

        print("Lift sudah sampai di lokasi tujuan, pintu lift terbuka")
        print("Terima kasih, anda sudah sampai di lantai tujuan")

    print("Program Lift selesai digunakan")

if __name__ == "__main__":
    main()
