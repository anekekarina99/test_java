import java.util.Scanner;

public class LiftSimulator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Selamat datang di Menara Sejati");
        String nama;

        do {
            System.out.print("Tolong masukkan nama anda [minimal 5 karakter]: ");
            nama = scanner.nextLine();
        } while (nama.length() < 5);

        System.out.println("Hello " + nama + "! Selamat datang!");

        int lantaiAwal = (int) (Math.random() * 10) + 1;
        System.out.println("Saat ini lift berada di lantai: " + lantaiAwal);

        int lantaiPenjemputan, lantaiTujuan;

        do {
            System.out.print("Silakan masukkan lantai penjemputan (1-10): ");
            lantaiPenjemputan = scanner.nextInt();
        } while (lantaiPenjemputan < 1 || lantaiPenjemputan > 10);

        do {
            System.out.print("Silakan masukkan lantai tujuan (1-10): ");
            lantaiTujuan = scanner.nextInt();
        } while (lantaiTujuan < 1 || lantaiTujuan > 10);

        if (lantaiPenjemputan == lantaiTujuan) {
            System.out.println("Tidak perlu naik lift. Anda sudah berada di lantai tujuan.");
        } else {
            if (lantaiPenjemputan > lantaiAwal) {
                for (int i = lantaiAwal + 1; i <= lantaiPenjemputan; i++) {
                    System.out.println("Lift turun ke lantai: " + i);
                }
            } else {
                for (int i = lantaiAwal - 1; i >= lantaiPenjemputan; i--) {
                    System.out.println("Lift naik ke lantai: " + i);
                }
            }

            System.out.println("Lift sudah sampai di lokasi penjemputan, pintu lift terbuka");
            System.out.println("Silakan masuk, Anda akan diantar ke lantai tujuan");

            if (lantaiPenjemputan > lantaiTujuan) {
                for (int i = lantaiPenjemputan - 1; i >= lantaiTujuan; i--) {
                    System.out.println("Lift turun ke lantai: " + i);
                }
            } else {
                for (int i = lantaiPenjemputan + 1; i <= lantaiTujuan; i++) {
                    System.out.println("Lift naik ke lantai: " + i);
                }
            }

            System.out.println("Lift sudah sampai di lokasi tujuan, pintu lift terbuka");
            System.out.println("Terima kasih, anda sudah sampai di lantai tujuan");
        }

        System.out.println("Program Lift selesai digunakan");
    }
}
