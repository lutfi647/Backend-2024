<?php

class Animal {
    private $animals = [];

    // Constructor untuk mengisi data awal animals
    public function __construct(array $animals = []) {
        $this->animals = $animals;
    }

    // Method untuk menampilkan seluruh data animals
    public function index() {
        foreach ($this->animals as $animal) {
            echo $animal . "\n";
        }
    }

    // Method untuk menambahkan hewan baru
    public function store($animal) {
        $this->animals[] = $animal;
    }

    // Method untuk memperbarui data hewan (misalnya, berdasarkan indeks)
    public function update($index, $newAnimal) {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $newAnimal;
        } else {
            echo "Index tidak ditemukan.\n";
        }
    }

    // Method untuk menghapus data hewan (misalnya, berdasarkan indeks)
    public function destroy($index) {
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
        } else {
            echo "Index tidak ditemukan.\n";
        }
    }
}

// Buat objek dari class Animal dan uji beberapa method
$zoo = new Animal(['Lion', 'Tiger', 'Elephant']);
echo "Daftar Hewan:\n";
$zoo->index();

$zoo->store('Giraffe');
echo "\nSetelah menambah Giraffe:\n";
$zoo->index();

$zoo->update(1, 'Panther');
echo "\nSetelah memperbarui indeks 1 menjadi Panther:\n";
$zoo->index();

$zoo->destroy(2);
echo "\nSetelah menghapus indeks 2:\n";
$zoo->index();
