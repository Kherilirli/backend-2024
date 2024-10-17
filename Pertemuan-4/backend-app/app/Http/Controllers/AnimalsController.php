<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    // Property untuk menyimpan data animals
    private $animals = [];

    // Constructor untuk mengisi data awal
    public function __construct() {
        // Inisialisasi data hewan
        $this->animals = ['Kucing', 'Ayam', 'Ikan'];
    }

    // Method index untuk menampilkan seluruh data animals
    public function index() {
        echo "Daftar hewan:<br>";
        foreach ($this->animals as $key => $animal) {
            echo ($key + 1) . ". " . $animal . "<br>";
        }
        echo "<br>";
    }

    // Method store untuk menambahkan hewan baru
    public function store(Request $request) {
        $newAnimal = $request->input('animal'); // Mengambil data dari input
        array_push($this->animals, $newAnimal);
        echo "Hewan '$newAnimal' berhasil ditambahkan.<br><br>";
        $this->index(); // Menampilkan daftar terbaru
    }

    // Method update untuk mengupdate hewan
    public function update(Request $request, $id) {
        $newAnimal = $request->input('animal');
        
        if (isset($this->animals[$id])) {
            echo "Hewan '" . $this->animals[$id] . "' diubah menjadi '$newAnimal'.<br><br>";
            $this->animals[$id] = $newAnimal;
        } else {
            echo "Hewan pada index $id tidak ditemukan.<br><br>";
        }
        $this->index(); // Menampilkan daftar terbaru
    }

    // Method destroy untuk menghapus hewan
    public function delete($id) {
        if (isset($this->animals[$id])) {
            echo "Hewan '" . $this->animals[$id] . "' berhasil dihapus.<br><br>";
            array_splice($this->animals, $id, 1);
        } else {
            echo "Hewan pada index $id tidak ditemukan.<br><br>";
        }
        $this->index(); // Menampilkan daftar terbaru
    }
}
