import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import Button from '../src/components/Button';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CashCard from '../src/components/CashCard';
import PaymentFormCard from '../src/components/PaymentFormCard';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AccordionItem from '../src/components/Accordion';

export default function PixPaymentScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handlePress = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.navigationButton}>
          <FontAwesome6 name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pague com Pix</Text>
      </View>
      <View style={styles.content}>
        <CashCard />
        <View style={styles.paymentFormSection} >
          <View style={styles.textContainer}>
            <Text style={styles.paymentFormTitle}>Pague com Pix</Text>
            <Text style={styles.paymentFormSpan}>Pague o valor integral ou parte das suas compras com pontos Livelo usando Pix via QR Code ou Pix Copia e Cola.</Text>
          </View>
          <View style={styles.selectPaymentForm}>
            <PaymentFormCard text='Ler QR Code Pix' IconTop={FontAwesome} iconTopName='qrcode' />
            <PaymentFormCard text='Pix Copia e Cola' IconTop={FontAwesome} iconTopName='copy' />
          </View>
          <View>
            <AccordionItem 
              content='É possível realizar pagamentos em estabelecimentos comerciais físicos e digitais que aceitem a forma de pagamento Pix
              via QR Codeou Pix Copia e Cola.' 
              title='1. Onde posso usar meus pontos Livelo para pagar compras com Pix?' 
              isActive={activeIndex === 0} 
              onPress={() => handlePress(0)}
            />
          </View>
        </View>
      </View>
      
      <Button text='Ler QR Code' IconRight={FontAwesome} iconRightName='qrcode' />
    </View>
  );
}
