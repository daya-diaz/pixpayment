import React from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../../src/components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { styles } from './styles';
import Button from '../../src/components/Button';
import PartnerIcon from '../../../assets/partner.png';
import { useState } from 'react';

// Define o tipo para os parâmetros esperados
interface QRData {
  chavePix?: string;
  nomeRecebedor?: string;
  valor?: number;
  descricao?: string;
  dataHora?: string;
  idTransaction?: string,
  orderNumber?: string
}

export default function Resume() {
  const router = useRouter();
  const { qrData } = useLocalSearchParams<{ qrData?: string }>();
  const [isLoading, setIsLoading] = useState(false);

  console.log("Received QR Data:", qrData);
  
  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const encodedData = encodeURIComponent(JSON.stringify(parsedData));
      router.push(`/PixPayment/Receipt?qrData=${encodedData}`);
    }, 5000);
  };

  const handleCancelTransaction = () => {
    router.push('/PixPayment');
  };

  // Decodifica e parseia os dados do QR Code
  let parsedData: QRData = {};
  try {
    if (qrData) {
      const decodedData = decodeURIComponent(qrData);
      parsedData = JSON.parse(decodedData);
    }
  } catch (e) {
    console.error("Erro ao parsear os dados do QR Code:", e);
  }

  return (
    <View style={styles.container}>
      <Header
        text="Dados do pagamento"
        IconLeft={MaterialIcons}
        iconLeftName="chevron-left"
        onIconLeftPress={() => router.push('/PixPayment/CopyAndPastPage')}
      />
      <View style={styles.content}>
        <View>
          <View style={styles.partnerContainer}>
            <Image source={PartnerIcon} />
            <View style={styles.partner}>
              <Text style={styles.partnerName}>{parsedData.nomeRecebedor || 'JM Comércio e Industria'}</Text>
              <Text style={styles.partnerCnpj}>{'Chave Pix: ' + (parsedData.chavePix || '12.345.678/0001-90')}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View>
            <Text style={styles.resumeTitle}>Resumo</Text>
            <View style={styles.resumeValues}>
              <View style={styles.resumeInfosContainer}>
                <Text style={styles.pointsQuantity}>Valor em pontos</Text>
                <Text style={styles.pointsQuantity}>
                  {parsedData.valor ? `${parsedData.valor * 10} pontos` : '2102'} {/* Exemplo de conversão para pontos */}
                </Text>
              </View>

              <View style={styles.resumeInfosContainer}>
                <Text style={styles.realQuantity}>Valor em reais</Text>
                <Text style={styles.realQuantity}>
                  {parsedData.valor ? `R$ ${parsedData.valor.toFixed(2)}` : 'R$ 170,00'}
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="primary" text="Finalizar pagamento" isLoading={isLoading} onPress={handlePayment} />
          <Button variant="secondary" text="Cancelar" onPress={handleCancelTransaction} />
        </View>
      </View>
    </View>
  );
}
