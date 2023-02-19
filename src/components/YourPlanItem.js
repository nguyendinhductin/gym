import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const imgShadow = require('../assets/shadow.png');

const YourPlanItem = ({number, onPress, active}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imgShadow} style={styles.img} />
      <Text style={[styles.text, active && styles.txtActive]}>{number}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get('window').width;

const itemSize = (windowWidth - 24 * 2 - 24) / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 24,
    width: itemSize,
    height: itemSize,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 80,
    fontWeight: '500',
    color: '#FFA451',
  },
  txtActive: {
    color: '#60AFBF',
  },
  img: {
    position: 'absolute',
    bottom: 28,
  },
});

export default YourPlanItem;
