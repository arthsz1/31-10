"use strict";
// Função que exibe "Hello World" no console
function SayHelloWorld() {
    console.log("Hello World");
}
// Chama a função SayHelloWorld para mostrar a mensagem
SayHelloWorld();
// Função que exibe uma mensagem personalizada no console
function CriarMensagem(msg) {
    console.log(msg);
}
// Chama a função CriarMensagem várias vezes com a mesma mensagem
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("hj tem jogo");
CriarMensagem("typescript");
// Função que registra uma mensagem com o autor, se logar for verdadeiro
function LogMensagem(logar, msg, autor) {
    // Verifica se o log deve ser realizado
    if (logar === true) {
        console.log(`A mensagem "${msg}" foi enviada por ${autor}`);
    }
}
// Chama a função LogMensagem com logar como verdadeiro e falso
LogMensagem(true, 'log realizado', 'arthur');
LogMensagem(false, 'log realizado', 'arthur');
// Função que soma dois números e retorna o resultado
function somar(numUm, numDois) {
    return numUm + numDois;
}
// Chama a função somar e armazena o resultado na variável 'resultado'
const resultado = somar(1, 1);
console.log("O resultado da função somar é:", resultado);
// Função que subtrai dois números e retorna o resultado
function subtrair(numUm, numDois) {
    return numUm - numDois;
}
// Chama a função subtrair e armazena o resultado na variável 'menos'
const menos = subtrair(6, 5);
console.log("O resultado da função subtrair é:", menos);
// Função que multiplica dois números e retorna o resultado
function multiplicar(numUm, numDois) {
    return numUm * numDois;
}
// Chama a função multiplicar e armazena o resultado na variável 'vezes'
const vezes = multiplicar(6, 5);
console.log("O resultado da função multiplicar é:", vezes);
// Função que divide dois números e retorna o resultado, tratando divisão por zero
function dividir(numUm, numDois) {
    if (numDois === 0) {
        return "Erro: Divisão por zero não é permitida";
    }
    return numUm / numDois;
}
// Chama a função dividir e exibe o resultado
const divisao = dividir;
console.log("O resultado da função dividir é:", divisao);
// Função calculadora que executa operações aritméticas com base na entrada
function calculadora(operacao, numUm, numDois) {
    // Verifica a operação e realiza o cálculo correspondente
    if (operacao === "somar") {
        return somar(numUm, numDois);
    }
    else if (operacao === 'subtrair') {
        return subtrair(numUm, numDois);
    }
    else if (operacao === 'dividir') {
        return dividir(numUm, numDois);
    }
    else if (operacao === 'multiplicar') {
        return multiplicar(numUm, numDois);
    }
    return "Operação inválida";
}
// Exibe os resultados das operações da calculadora
console.log("Calculadora somar:", calculadora("somar", 10, 30));
console.log("Calculadora subtrair:", calculadora("subtrair", 40, 100));
console.log("Calculadora dividir:", calculadora("dividir", 40, 2));
console.log("Calculadora multiplicar:", calculadora("multiplicar", 6, 5));
