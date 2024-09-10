import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function CashCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.span}>Seu saldo atual:</Text>
        <Text style={styles.points}>12.345 pontos</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.span}>Valor em reais:</Text>
        <Text style={styles.reais}>R$ 1.185,18</Text>
      </View>
    </View>
  )
}
