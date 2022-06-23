// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let $botaoAtualizar = document.getElementById('atualizar-saldo');
let $botaoLimpar = document.getElementById('limpar-saldo')!;
let $soma = document.getElementById('soma')! as HTMLInputElement;
let $campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if($campoSaldo){
        saldoTotal += soma;
        $campoSaldo.innerHTML = saldoTotal.toString();
        limpaCampoSoma()
        $soma.focus();
    }
}

function limpaCampoSoma(){
    $soma.value = "";
    $soma.focus();
}   

function limparSaldo() {
    if($campoSaldo){
        saldoTotal = 0
        $campoSaldo.innerHTML = saldoTotal.toString();
        $soma.focus();
    }
}
if($botaoAtualizar){
    $botaoAtualizar.addEventListener('click', () => {
        const cSaldo = Number($soma.value);
        if(!isNaN(cSaldo)){
            somarAoSaldo(Number($soma.value));
        }else{
            alert('Por favor, digite apenas numeros!');
            limpaCampoSoma();
            $soma.focus();
        }
    });
}

$botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});

