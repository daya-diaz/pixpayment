import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import Button from '../src/components/Button';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CashCard from '../src/components/CashCard';
import PaymentFormCard from '../src/components/PaymentFormCard';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AccordionItem from '../src/components/Accordion';
import { accordionData, AccordionItemData } from '../src/data/accordionData';

export default function PixPaymentScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <ScrollView style={styles.container}>
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
            <PaymentFormCard text='Pix Copia e Cola' onPress={() => router.push('/PixPayment/CopyAndPastPage')} IconTop={FontAwesome} iconTopName='copy' />
          </View>
          <View>
            <Text style={styles.qeaTitle}>Perguntas frequentes:</Text>
            {
              accordionData.map((item: AccordionItemData) => (
                <AccordionItem 
                key={item.id}
                content={item.content} 
                title={item.title}
                isActive={activeIndex === parseInt(item.id)} 
                onPress={() => handlePress(parseInt(item.id))}
              />
              ))
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
