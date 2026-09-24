function hitung(operator) {

    const bilangan1 = parseFloat(
        document.getElementById("bilangan1").value
    );

    const bilangan2 = parseFloat(
        document.getElementById("bilangan2").value
    );

    const output = document.getElementById("output");

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        output.value = "Masukkan kedua bilangan terlebih dahulu!";
        return;
    }

    let hasil;

    switch (operator) {

        case "+":
            hasil = bilangan1 + bilangan2;
            break;

        case "-":
            hasil = bilangan1 - bilangan2;
            break;

        case "*":
            hasil = bilangan1 * bilangan2;
            break;

        case "/":
            if (bilangan2 === 0) {
                output.value = "Tidak dapat dibagi 0!";
                return;
            }

            hasil = bilangan1 / bilangan2;
            break;
    }

    output.value = hasil;
}