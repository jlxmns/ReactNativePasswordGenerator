import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import * as Clipboard from 'expo-clipboard';
import useStorage from '@/src/hooks/useStorage';

export function Modal({password, handleClose}) {

  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem('@pass', password);

    alert('Senha copiada!');

    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.title}>Senha gerada</ThemedText>
        <Pressable style={styles.innerPassword}>
          <ThemedText style={styles.text} onLongPress={handleCopyPassword}>
            {password}
          </ThemedText>
        </Pressable>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <ThemedText style={styles.buttonText}>Voltar</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
            <ThemedText style={styles.buttonSaveText}>Salvar senha</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: "#fff",
    width: '85%',
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: '#000',
    width: '90%',
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 8,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: '#392DE9',
    borderRadius: 8,
  },
  buttonSaveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#000'
  }
}