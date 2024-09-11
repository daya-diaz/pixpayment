import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../src/components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Button from "../../src/components/Button";
import { styles } from "./styles";
import { useState } from "react";

export default function CopyAndPastPage() {
  const router = useRouter();
  const [pixCode, setPixCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  //validação do cod pix
  const validatePixCode = (code: string) => {
    const alphanumericRegex = /^[a-zA-Z0-9]{32}$/;
    return alphanumericRegex.test(code);
  }
  
  const handlePayment = () => {
    // verifica se o cod pix é valido
    if(!validatePixCode(pixCode)) {
      setErrorMessage('Esse não é um código Pix válido')
      return;
    }
    // Se for válido, mostra o loading e simula o pagamento
    setIsLoading(true);
    setErrorMessage('');

    //simula um tempo de processamento do pagamento
    setTimeout(() => {
      setIsLoading(false);
      
      const isSuccess = Math.random() > 0.5; //50% de chances de sucesso
      
      isSuccess ? router.push('/PixPayment/Resume') : setErrorMessage('Esse não é um código Pix válido');
    }, 3000) // delay de 3s
  }

  const handleDeleteCode = () => {
    setPixCode('');
    setErrorMessage('');
  }

  return (
    <View style={styles.container}>
      <Header 
        text="Copia e cola" 
        IconLeft={MaterialIcons} 
        iconLeftName="chevron-left" 
        onIconLeftPress={() => router.push('/PixPayment')}
      />
      <View style={styles.content}>
        <View style={styles.inputArea}>
          <Text style={styles.label}>
            Copie e cole o código do QR code Pix
          </Text>
          <TextInput 
            value={pixCode}
            onChangeText={(e) => setPixCode(e)} 
            style={[
              styles.input, 
              isFocused ? styles.inputFocused : null,
              errorMessage ? styles.inputError : null
            ]}
            placeholder="Cole o código aqui"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <Button disabled={!pixCode} variant="primary" text="Próximo" onPress={handlePayment} isLoading={isLoading}/>
          <Button disabled={!pixCode} variant="secondary" text="Apagar código" onPress={handleDeleteCode} isLoading={isLoading} />
        </View>
      </View>
    </View>
  )
}
