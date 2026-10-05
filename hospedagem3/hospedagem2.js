const valorProduto = parseFloat(prompt("Insira o valor dos produtos:"));
const qntdProduto = parseInt(prompt("Insira a quantidade de produtos:"));

const valorTotal = valorProduto * qntdProduto

document.write(`O valor total da sua compra é ${valorTotal}`)