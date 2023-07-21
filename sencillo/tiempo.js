function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function cuentaRegresiva() {
    var numero = 10;
  
    while(numero >=1){
        console.log(numero);
        numero--;
        await delay(1000);
    }
}

function empezarCuentaRegresiva(){
cuentaRegresiva();
}
empezarCuentaRegresiva();

