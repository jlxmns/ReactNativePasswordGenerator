import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (e) {
      console.error("Erro ao buscar", e);
      return [];
    }
  }

  const saveItem = async (key, value) => {
    try {
      const passwords = await getItem(key);
      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (e) {
      console.error("Erro ao salvar", e);
    }
  }

  const removeItem = async (key, value) => {
    try {
      const passwords = await getItem(key);
      const myPasswords = passwords.filter(password => {
        return password !== value;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

      return myPasswords;

    } catch (e) {
      console.error("Erro ao remover", e);
    }
  }

  return { getItem, saveItem, removeItem };
}

export default useStorage;