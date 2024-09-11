import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ActivityIndicator } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { styles } from "./styles";
import { useRouter } from "expo-router";

export default function QRCodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const getCameraPermissions = async ( ) => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    setIsLoading(true);
    // Passando os dados do QR Code como parâmetro
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/PixPayment/Resume?qrData=${encodeURIComponent(data)}`);
    }, 2000)
  };
  

  if(hasPermission === null) {
    return <Text>Solicitando permissão para câmera.</Text>
  }

  if(hasPermission === false) {
    return <Text>Sem acesso à câmera.</Text>
  }

  return(
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {
        isLoading && <ActivityIndicator size="large" color="pink" />
      }
    </View>
  )
}