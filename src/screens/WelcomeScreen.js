import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';

const welcomeImg = require('../assets/welcome.png');

const WelcomeScreen = ({}) => {
  return (
    <Container safeArea>
      <View style={styles.conatiner}>
        <View style={styles.img}>
          <Image source={welcomeImg} />
        </View>

        <View style={styles.viewText}>
          <Text style={styles.title}>Welcome to GymTest</Text>
          <Text style={styles.subtitle}>
            Best free workout application for regular fitness training
          </Text>
        </View>
        <Button title={'Bắt đầu'} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewText: {
    marginBottom: 160,
  },
  img: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  conatiner: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 34,
    color: '#303030',
    textAlign: 'center',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#838383',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
