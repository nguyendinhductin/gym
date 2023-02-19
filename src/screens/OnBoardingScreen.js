import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import ButtonOutline from '../components/ButtonOutline';
import Container from '../components/Container';

const img = require('../assets/on_boarding.png');

const OnBoardingScreen = props => {
  const navigation = useNavigation();

  return (
    <>
      <Container style={styles.container}>
        <View style={styles.viewImg}>
          <Image source={img} />
        </View>

        <View style={styles.viewText}>
          <Text style={styles.title}>Welcome to Gym Test</Text>
          <Text style={styles.subTitle}>
            Best free workout application for regular fitness training
          </Text>
        </View>

        <View style={styles.viewButton}>
          <Button
            title={'Đăng nhập'}
            onPress={() => {
              navigation.navigate('login');
            }}
          />
          <ButtonOutline
            title={'Đăng ký'}
            onPress={() => {
              navigation.navigate('sign_up');
            }}
          />
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  viewImg: {
    marginTop: 80,
    alignItems: 'center',
  },
  viewText: {
    marginTop: 30,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ccc',
    textAlign: 'center',
  },
  viewButton: {
    marginHorizontal: 24,
  },
});

export default OnBoardingScreen;
