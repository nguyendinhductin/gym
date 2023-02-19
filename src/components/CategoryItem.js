import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CategoryItem = ({text, onPress, img}) => {
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
    height: 96,
    marginHorizontal: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  img: {
    marginLeft: 16,
    height: 60,
    width: 60,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 28,
    color: '#96A0B5',
  },
});

export default CategoryItem;
