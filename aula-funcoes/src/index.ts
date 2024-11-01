// Função que exibe "Hello World" no console
function SayHelloWorld() {
    console.log("Hello World");
}

// Chama a função SayHelloWorld para mostrar a mensagem
SayHelloWorld();

// Função que exibe uma mensagem personalizada no console
function CriarMensagem(msg: string) {
    console.log(msg);
}

// Chama a função CriarMensagem várias vezes com a mesma mensagem
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("typescript");

// Função que registra uma mensagem com o autor, se logar for verdadeiro
function LogMensagem(logar: boolean, msg: string, autor: string) {
    // Verifica se o log deve ser realizado
    if (logar === true) {
        console.log(`a msg ${msg} foi enviada por ${autor}`);
    }   
}

// Chama a função LogMensagem com logar como verdadeiro e falso
LogMensagem(true, 'log realizado', 'arthur');
LogMensagem(false, 'log realizado', 'arthur');

// Função que soma dois números e retorna o resultado
function somar(numUm: number, numDois: number) {
    return numUm + numDois;
}

// Chama a função somar e armazena o resultado na variável 'resultado'
const resultado = somar(1, 1);
console.log("O resultado é da função somar: ", resultado);

// Função que subtrai dois números e retorna o resultado
function subtrair(numUm: number, numDois: number): number {
    return numUm - numDois;
}

// Chama a função subtrair e armazena o resultado na variável 'menos'
const menos = subtrair(6, 5);
console.log("O resultado é da função subtrair: ", menos);

// Chama a função calculadora para diferentes operações
calculadora("somar", 10, 30);
calculadora("subtrair", 40, 100);
calculadora("dividir", 10, 2);

// Função calculadora que executa operações aritméticas com base na entrada
function calculadora(operacao: string, numUm: number, numDois: number) {
    // Verifica a operação e realiza o cálculo correspondente
    if (operacao == "somar") {
        return numUm + numDois;
    } else if (operacao == 'subtrair') {
        return numUm - numDois;
    } else if (operacao == 'dividir') {
        return numUm / numDois;
    }
}

// Exibe os resultados das operações da calculadora
console.log(calculadora("somar", 10, 30));
console.log(calculadora("subtrair", 40, 100));
console.log(calculadora("dividir", 40, 2));
