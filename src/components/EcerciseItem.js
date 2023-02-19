import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIcon from './AppIcon';

const EcerciseItem = ({text, time, onPress, img, onDel, isDone}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image style={styles.img} source={img} />
      <View style={styles.viewText}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.flRow}>
          <AppIcon name="timer-outline" size={16} color={'white'} />
          <Text style={styles.textSm}>{` ${time} phút`}</Text>
        </View>
      </View>

      {onDel && (
        <TouchableOpacity style={styles.delView} onPress={onDel}>
          <AppIcon name="trash" size={20} color={'white'} />
        </TouchableOpacity>
      )}

      {isDone && (
        <View style={styles.doneView}>
          <AppIcon name="checkmark-done-sharp" size={18} color={'white'} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 16,
    height: 200,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  img: {
    borderRadius: 16,
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#fff',
  },
  viewText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginLeft: 16,
    marginBottom: 16,
  },
  flRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSm: {
    fontSize: 12,
    color: '#fff',
  },
  delView: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  doneView: {
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 12,
    borderWidth: 2,
    width: 24,
    height: 24,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EcerciseItem;
