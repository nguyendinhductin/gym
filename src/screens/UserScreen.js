import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';

import Container from '../components/Container';
import UserItem from '../components/UserItem';

const UserScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <Container safeArea>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://picsum.photos/seed/picsum/100/100',
            }}
            style={styles.img}
          />

          <Text style={styles.txtName}>Nguyen Duztin</Text>
          <Text style={styles.txtMode}>Chế độ giảm cân</Text>
        </View>

        <View style={styles.divider} />

        <UserItem title={'Edit Profile'} subtitle={'Edit name, age'} />
        <UserItem title={'Edit Profile'} subtitle={'Edit name, age'} />
        <UserItem title={'Edit Profile'} subtitle={'Edit name, age'} />
        <UserItem title={'Edit Profile'} subtitle={'Edit name, age'} />
        <UserItem title={'Edit Profile'} subtitle={'Edit name, age'} />

        <View style={styles.btnView}>
          <Button
            title={'Đăng xuất'}
            onPress={() => {
              navigation.navigate('login');
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  header: {
    marginTop: 24,
    marginHorizontal: 24,
    alignItems: 'center',
  },
  txtName: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#303030',
  },
  txtMode: {
    fontSize: 14,
    color: '#8C8C8C',
  },
  divider: {
    marginTop: 32,
    marginBottom: 16,
    marginHorizontal: 16,
    height: 1,
    backgroundColor: '#C7C9D9',
  },
  btnView: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
});

export default UserScreen;
