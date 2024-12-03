<?php
class Person {
    public $nama;
    public $alamat;
    public $jurusan;

    public function __construct($nama, $alamat, $jurusan){
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }
    public function cetak(){
        echo 'Nama'.$this->nama.'<br>';
        echo 'Alamat'.$this->alamat.'<br>' ;
        echo 'Jurusan'.$this->jurusan;
    }
}
?>