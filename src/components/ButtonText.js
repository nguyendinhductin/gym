import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonText = ({text}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 21,
    color: '#60AFBF',
  },
});

export default ButtonText;
