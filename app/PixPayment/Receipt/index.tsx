import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import SuccessImg from '../../../assets/success.png'
import PartnerIcon from '../../../assets/partner.png';
import Subtract from '../../../assets/subtract.png'
import Button from "../../src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Receipt() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateToHome = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push('/')
    }, 1200)
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image style={styles.image} source={SuccessImg} />
          <View style={styles.headerTexts}>
            <Text style={styles.headerTitle}>Pagamento efetuado com sucesso!</Text>
            <Text style={styles.headerDate}>12/10/24 - 12:40:10</Text>
          </View>
        </View>

        <View>
          <View style={styles.partnerContainer}>
            <Image source={PartnerIcon} width={56} height={56} />
            <View style={styles.partner}>
              <Text style={styles.partnerName}>São João Comércio e Industria</Text>
              <Text style={styles.partnerCnpj}>CNPJ: 12.345.678/0001-90</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infosContainer}>
            <Text style={styles.infosTitle}>Número do pedido</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.infosValue}>#123456</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.valueInRealContainer}>
            <Text style={styles.valueInRealTexts}>Valor em reais</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.valueInRealTexts}>R$ 170,00</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infosContainer}>
            <Text style={styles.infosTitle}>ID/Transação</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.infosValue}>E90400334320220544134504558503434504558503456</Text>
          </View>
          <Image style={styles.subtract} source={Subtract} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button variant="primary" isLoading={isLoading} text="Voltar ao início" onPress={handleNavigateToHome} />
      </View>
    </View>
  )
}