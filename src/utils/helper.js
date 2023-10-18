import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'react-native-crypto-js';

const retrieveToDoList = async (key) => {
  let result = [];
  try {
    result = await AsyncStorage.getItem('todoList');
    if (result) {
      const parsedDecryptedResult = JSON.parse(
        CryptoJS.AES.decrypt(result, key).toString(CryptoJS.enc.Utf8),
      );
      result = parsedDecryptedResult;
    } else {
      result = [];
    }
  } catch (error) {
    console.log('retrieve error', error);
    result = [];
  }
  return result;
};

const saveTodoList = (payload, key) => {
  AsyncStorage.setItem('todoList', CryptoJS.AES.encrypt(JSON.stringify(payload), key).toString());
};

export {retrieveToDoList, saveTodoList};
