import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {supabase} from '../api';
import AppIcon from '../components/AppIcon';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';

const logo = require('../assets/logo.png');

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const commingSoon = () => {
    ToastAndroid.show('Đang phát triển!', ToastAndroid.SHORT);
  };

  const login = async () => {
    if (email.length === 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập email');
      return;
    }

    if (password.length === 0) {
      Alert.alert('Thông báo', 'Vui lòng nhập mật khẩu');
      return;
    }

    const {user, error} = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      Alert.alert('Thông báo', error.message);
    } else {
      console.log('Đăng nhập thành công');
      console.log(user);
      setEmail('');
      setPassword('');
      navigation.navigate('home_tab');
    }
  };

  return (
    <Container safeArea>
      <ScrollView style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title={'Đăng nhập'} onPress={login} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('forgot');
          }}>
          <Text style={styles.txtForgot}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View style={styles.otherLogin}>
          <View style={styles.line} />
          <Text style={styles.txtOtherLogin}>Hoặc đăng nhập với</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.viewSocial}>
          <TouchableOpacity
            onPress={() => {
              commingSoon();
            }}
            style={[styles.roundIcon, styles.fb]}>
            <AppIcon name="logo-facebook" color={'white'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              commingSoon();
            }}
            style={[styles.roundIcon, styles.gg]}>
            <AppIcon name="logo-google" color={'white'} size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.createAcc}>
          <Text style={styles.txt}>Chưa có tài khoản?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('sign_up');
            }}>
            <Text style={styles.btnCreateAcc}>Tạo tài khoản?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  logo: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  createAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtForgot: {
    marginVertical: 8,
    textAlign: 'center',
    color: '#60AFBF',
  },
  txt: {
    color: '#726666',
  },
  btnCreateAcc: {
    color: '#60AFBF',
    marginLeft: 6,
    textTransform: 'uppercase',
  },
  otherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    width: 100,
    height: 1,
    color: 'blue',
    backgroundColor: '#C7C9D9',
  },
  txtOtherLogin: {
    marginHorizontal: 8,
    color: '#aaa',
  },
  roundIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fb: {
    backgroundColor: '#4E6297',
    marginRight: 32,
  },
  gg: {
    backgroundColor: '#C5331E',
  },
  viewSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default LoginScreen;
