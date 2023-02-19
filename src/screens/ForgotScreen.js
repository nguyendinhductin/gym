import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';

const forgotImg = require('../assets/forgot.png');

const ForgotScreen = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');

  const submit = () => {
    if (email.length === 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập email');
      return;
    }

    Alert.alert(
      'Thông báo',
      'Gửi email thành công!\nVui lòng kiểm tra email để lấy lại mật khẩu',
    );

    console.log({
      email,
    });
  };

  return (
    <Container safeArea>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Quên mật khẩu?</Text>
          <Text style={styles.subtitle}>
            Enter your registered email below to receive password reset
            instruction
          </Text>
        </View>
        <Image source={forgotImg} style={styles.img} />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Button title={'Gửi'} onPress={submit} />

        <View style={styles.viewTxt}>
          <Text style={styles.txt}>Nhớ mật khẩu?</Text>
          <TouchableOpacity>
            <Text
              style={styles.txtLogin}
              onPress={() => {
                navigation.navigate('login');
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
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
  img: {},
  txt: {
    color: '#aaa',
    marginRight: 6,
  },
  viewTxt: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtLogin: {
    color: '#60AFBF',
    textTransform: 'uppercase',
  },
});

export default ForgotScreen;
