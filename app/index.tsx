import { Text, View } from "react-native";
import { styles } from "./styles";
import LinkNavigation from "./src/components/LinkNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  
  const handleClickOnNavigateLink = () => {
    router.push('/PixPayment')
  }
  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>Pague suas compras
        usando seus pontos.</Text>
        <Text style={styles.span}>
          Utilize seus pontos Livelo para pagar parte ou o total de suas compras clicando no botão abaixo.
        </Text>
      </View>
      <LinkNavigation text="Pague com pix" IconRight={MaterialIcons} onPress={handleClickOnNavigateLink} iconRightName="pix" />
    </View>
  )
}