import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { Modal as ModalPassword } from "@/src/components/modal/index";

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("@/src/assets/images/logo.png")}
        style={styles.logo}
      />
      <ThemedText style={styles.title}>{size} caracteres</ThemedText>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ffb1b0"
          minimumTrackTintColor="#1c1917"
          thumbTintColor="#b4454a"
          value={size}
          onValueChange={(value) => setSize(+value.toFixed(0))}>

        </Slider>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <ThemedText style={styles.buttonText}>Gerar senha</ThemedText>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1917",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#b4454a",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
})