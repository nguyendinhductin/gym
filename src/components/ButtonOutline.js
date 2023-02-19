import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonOutline = ({title, onPress}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#60AFBF',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
    color: '#60AFBF',
  },
});

export default ButtonOutline;
