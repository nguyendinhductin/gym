import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIcon from './AppIcon';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flOne}
        onPress={() => {
          navigation.goBack();
        }}>
        <AppIcon name="chevron-back-outline" size={24} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <View style={styles.flOne} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    marginHorizontal: 24,
  },
  flOne: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 3,
    justifyContent: 'center',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '500',
    color: '#303030',
  },
});

export default Header;
