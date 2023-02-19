import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Container = ({children, style, safeArea = false}) => {
  return (
    <>
      {safeArea && (
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      )}

      {!safeArea && <View style={[styles.container, style]}>{children}</View>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default Container;
