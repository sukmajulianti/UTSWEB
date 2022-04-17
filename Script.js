function tampilkan() {
    var nama_lengkap = document.getElementById("fill-nama").value;
    document.getElementById("print-nama").innerHTML = nama_lengkap;

    var tanggal_pesan = document.getElementById("fill-pesan").value;
    document.getElementById("print-pesan").innerHTML = tanggal_pesan;

    var tanggal_batas = document.getElementById("fill-batas").value;
    document.getElementById("print-batas").innerHTML = tanggal_batas;

    var no = document.getElementById("fill-no").value;
    document.getElementById("print-no").innerHTML = no;

    var produk = document.getElementById("fill-produk").value;
    document.getElementById("print-produk").innerHTML = produk;

    var bayar = document.getElementById("fill-bayar").value;
    document.getElementById("print-bayar").innerHTML = bayar;

    var message = document.getElementById("fill-message").value;
    document.getElementById("print-message").innerHTML = message;
    // var radio = document.forms["form1"].elements["inlineRadioOptions"];
    // var jenis_kelamin = "";
    // for (let i = 0; i < radio.length; i++) {
    //     if(radio[i].checked) {
    //         jenis_kelamin = radio[i].value;
    //     }
    // }
    // document.getElementById("print-gender").innerHTML = jenis_kelamin;

    // var checkbox = document.forms["form1"].elements["inlineCheckboxOptions"];
    // var hobi = "";
    // for (let i = 0; i < checkbox.length; i++) {
    //     if(checkbox[i].checked) {
    //         hobi = hobi + checkbox[i].value + ", ";
    //     }
    // }
    // document.getElementById("print-hobby").innerHTML = hobi.replace(/,\s*$/, "");

}