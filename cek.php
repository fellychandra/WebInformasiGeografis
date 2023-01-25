<?php
$koneksi = mysqli_connect("localhost", "root", "", "kelompokgis");

// Check connection
if (mysqli_connect_errno()) {
    echo "Koneksi database gagal : " . mysqli_connect_error();
}


$hasil = mysqli_query($koneksi, "SELECT nama, x, y FROM tempatwisata");



$dataArray;
while ($data = mysqli_fetch_assoc($hasil)) {
    // membuat array asosiatif untuk setiap data
    $item = array(
        "nama" => $data['nama'],
        "x" => $data['x'],
        "y" => $data['y']
    );
    // proses encode array asosiatif ke json
    // lalu tampilkan 
    echo json_encode($item);
    echo "<br>";
}


?>