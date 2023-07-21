function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cuentaRegresiva() {
    var numero = 10;
    var numeroElemento = document.getElementById("num");

    while (numero >= 1) {
        numeroElemento.innerText = numero;
        numero--;
        await delay(1000);
    }
}

cuentaRegresiva();
