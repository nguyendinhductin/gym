import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';

const MonitorScreen = ({}) => {
  return (
    <Container safeArea>
      <View style={styles.center}>
        <Text>Chưa có dữ liệu</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MonitorScreen;
