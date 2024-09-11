const QRCode= require('qrcode');
const fs = require('fs');
const path = require('path');

//Definindo os dados que irão compor o QRCODE
const pixData = JSON.stringify({
  chavePix: "99.888.777/0001-99",
  nomeRecebedor: "Loja iPhoneStore LTDA",
  valor: 5789.90,
  descricao: "Compra de 1 iPhone 15",
  dataHora: new Date().toISOString(),
  idTransaction: 'A123456789012345678901234567890123456',
  orderNumber: '987654'
});

//Define onde salvar o arquivo no diretorio assets
const outputPath = path.join(__dirname, 'assets', 'pixQRCode2.png');

console.log('Gerando QR Code no caminho:', outputPath);

//Gera o qrcode e salva como arquivo png
QRCode.toFile(outputPath, pixData, { type: 'png' }, (err) => {
  if(err) throw err;
  console.log('QR Code gerado com sucesso salvo em: ', outputPath);
});