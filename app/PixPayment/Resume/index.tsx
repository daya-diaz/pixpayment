import { Image, Text, View } from "react-native";
import { Header } from "../../src/components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import Button from "../../src/components/Button";
import PartnerIcon from '../../../assets/partner.png'
import { useState } from "react";
export default function Resume() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, 2000)
  }

  const handleCancelTransaction = () => {
    router.push('/PixPayment')
  }
  return(
    <View style={styles.container}>
      <Header 
        text="Dados do pagamento"
        IconLeft={MaterialIcons} 
        iconLeftName="chevron-left" 
        onIconLeftPress={() => router.push('/PixPayment/CopyAndPastPage')}
      />
      <View style={styles.content}>
        <View style={styles.resumeContainer}>
          <View style={styles.partnerContainer}>
            <Image source={PartnerIcon} />
            <View style={styles.partner}>
              <Text style={styles.partnerName}>São João Comércio e Industria</Text>
              <Text style={styles.partnerCnpj}>CNPJ: 12.345.678/0001-90</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View>
            <Text style={styles.resumeTitle}>Resumo</Text>
            <View style={styles.resumeValues}>

              <View style={styles.resumeInfosContainer}>
                <Text style={styles.pointsQuantity}>
                  Valor em pontos
                </Text>
                <Text style={styles.pointsQuantity}>
                  1500 pontos
                </Text>
              </View>

              <View style={styles.resumeInfosContainer}>
                <Text style={styles.realQuantity}>
                  Valor em reais
                </Text>
                <Text style={styles.realQuantity}>
                  R$ 170,00
                </Text>
              </View>

            </View>
            <View style={styles.separator} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button variant="primary" text="Finalizar pagamento" isLoading={isLoading} onPress={handlePayment} />
          <Button variant="secondary" text="Cancelar" onPress={handleCancelTransaction}/>
        </View>
      </View>

    </View>
  )
}