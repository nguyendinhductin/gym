import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIcon from './AppIcon';

const UserItem = ({title, subtitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.conatiner} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <AppIcon name="chevron-forward" size={24} color="#303030" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  title: {
    color: '#303030',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  subtitle: {
    marginTop: 8,
    color: '#8C8C8C',
    fontSize: 14,
    lineHeight: 16,
  },
});

export default UserItem;
