import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({style, ...otherProps}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 16,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default Input;
