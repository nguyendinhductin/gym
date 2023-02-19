import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TitleScreen = ({txt}) => {
  return <Text style={styles.text}>{txt} </Text>;
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 24,
    marginTop: 16,
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
});

export default TitleScreen;
