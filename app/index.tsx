import { Text, View } from "react-native";
import { styles } from "./styles";
import LinkNavigation from "./src/components/LinkNavigation";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>Pague suas compras
        usando seus pontos.</Text>
        <Text style={styles.span}>
          Utilize seus pontos Livelo para pagar parte ou o total de suas compras clicando no botão abaixo.
        </Text>
      </View>
      <LinkNavigation text="Pague com pix" IconRight={MaterialIcons} href="/PixPayment" iconRightName="pix" />
    </View>
  )
}