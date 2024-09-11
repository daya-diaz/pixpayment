import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function CashCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.span}>Seu saldo atual:</Text>
        <Text style={styles.points}>73.300 pontos</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.span}>Valor em reais:</Text>
        <Text style={styles.reais}>R$ 7.300</Text>
      </View>
    </View>
  )
}
