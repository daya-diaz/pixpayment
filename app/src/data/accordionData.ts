export interface AccordionItemData {
  title: string,
  content: string,
  id: string
}

export const accordionData: AccordionItemData[] = [
  {
    id: '1',
    title: '1. Onde posso usar meus pontos Livelo para pagar compras com Pix?',
    content: 'É possível realizar pagamentos em estabelecimentos comerciais físicos e digitais que aceitem a forma de pagamento Pix via QR Codeou Pix Copia e Cola.',
  },
  {
    id: '2',
    title: '2. Como posso pagar compras com meus pontos em estabelecimentos físicos e digitais?',
    content: 'Na hora do pagamento, escolha pagar com Pix via QR Code ou Pix Copia e Cola. No app da Livelo, selecione Pix e realiza sua compra escaneando o QR Code gerado com o valor do pagamento da compra. Para a opção Pix Copia e Cola, cole o código gerado com o valor da compra e finalize a operação.',
  },
  {
    id: '3',
    title: '3. O código de cobrança deve ser específico?',
    content: 'Sim. O estabelecimento deve gerar um QR Code ou Pix Copia e Cola que contenha o valor da compra.',
  },
  {
    id: '4',
    title: '4. Se eu não tiver pontos suficientes para realizar o pagamento integral, posso utilizar outros meios de pagamento para complementar o valor?',
    content: 'Sim, desde que o estabelecimento aceite a divisão do valor total da compra em mais de uma dorma de pagamento.',
  },
  {
    id: '5',
    title: '5. Há alguma limitação para realizar pagamentos com pontos Livelo usando o Pix?',
    content: 'Sim. O limite diário são 5 transações.',
  },
  {
    id: '6',
    title: '6. Posso pagar contas do dia a dia (água, luz, gás e telefone) com pontos Livelo, usando o Pix?',
    content: 'Sim, desde que a concessionária ofereça as opções de pagamento por Pix via QR Code ou Pix Copia e Cola. Fique atento aos limites diários de transações e aos valores máximos.',
  },
  {
    id: '7',
    title: '7. Posso pagar serviços variados como cabeleireiro, táxi, borracharia, lavanderia e postos de combustível com pontos Livelo, usando o Pix?',
    content: 'Sim, desde que sejam oferecidas as opções de pagamento por Pix via QR Code ou Pix Copia e Cola. Fique atento aos limites diários de transações e aos valores máximos.',
  },
  {
    id: '8',
    title: '8. Posso pagar aplicativos de delivery (como iFood, Rappi) com pontos Livelo, usando o Pix?',
    content: 'Sim. Basta solicitar a opção de pagamento via Pix Copia e Cola. Para realizar o pagamento no aplicativo da Livelo basta copiar o código de cobrança recebido e colar no campo.',
  },
]