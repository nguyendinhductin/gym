import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePlan = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@your_plan', jsonValue);
  } catch (e) {
    throw e;
  }
};

export const getPlan = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@your_plan');

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw e;
  }
};
