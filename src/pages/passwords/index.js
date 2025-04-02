import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '@/src/hooks/useStorage';
import { PasswordItem } from '@/src/pages/passwords/components/passwordItem';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem('@pass');
      setListPasswords(passwords);
    }

    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(password) {
    const passwords = await removeItem('@pass', password);
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Minhas Senhas</ThemedText>
      </View>
      <View style={styles.content}>
        <FlatList 
          style={{ flex: 1, paddingTop: 14 }}
          data={listPasswords} 
          keyExtractor={ item => String(item)} 
          renderItem={ ({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item) } /> }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f17a7b",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  }
})