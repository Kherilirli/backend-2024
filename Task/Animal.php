<?php
class Animal {
    // Property animals
    public $animals = [];

    // Constructor untuk mengisi data awal (array)
    public function __construct($data) {
        $this->animals = $data;
    }

    // Method index untuk menampilkan seluruh data animals menggunakan foreach
    public function index() {
        echo "Daftar hewan:<br>";
        foreach ($this->animals as $key => $animal) {
            echo ($key + 1) . ". " . $animal . "<br>";
        }
        echo "<br>"; // Menambahkan baris baru setelah daftar hewan
    } 

    // Method store untuk menambahkan hewan baru menggunakan array_push
    public function store($data) {
        array_push($this->animals, $data);
        echo "Hewan '$data' berhasil ditambahkan.<br><br>";
    }

    // Method update untuk memperbarui data hewan
    public function update($index, $data) {
        if (isset($this->animals[$index])) {
            echo "Hewan '" . $this->animals[$index] . "' diubah menjadi '$data'.<br><br>";
            $this->animals[$index] = $data;
        } else {
            echo "Hewan pada index $index tidak ditemukan.<br><br>";
        }
    }

    // Method destroy untuk menghapus hewan menggunakan array_splice atau unset
    public function destroy($index) {
        if (isset($this->animals[$index])) {
            echo "Hewan '" . $this->animals[$index] . "' berhasil dihapus.<br><br>";
            array_splice($this->animals, $index, 1);
        } else {
            echo "Hewan pada index $index tidak ditemukan.<br><br>";
        }
    }
}

// Contoh penggunaan class Animal
$animalList = new Animal(['Kucing', 'Anjing', 'Buaya']);

// Menampilkan daftar hewan awal
$animalList->index();

// Menambahkan hewan baru
$animalList->store('Burung');
$animalList->index();

// Memperbarui data hewan pada index 1
$animalList->update(1, 'Onta');
$animalList->index();

// Menghapus hewan pada index 0
$animalList->destroy(0);
$animalList->index();
?>
