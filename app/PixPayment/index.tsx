import React from 'react';
import { View} from 'react-native';
import { styles } from './styles';
import Button from '../src/components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function PixPaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <Button text='Ler QR Code' IconRight={FontAwesome} iconRightName='qrcode' />
    </View>
  );
}


