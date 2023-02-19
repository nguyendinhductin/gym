import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CateItemV = ({text, onPress, img}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    width: 120,
    height: 160,
    paddingTop: 32,
    alignItems: 'center',
  },
  img: {
    height: 60,
    width: 60,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#96A0B5',
  },
});

export default CateItemV;
