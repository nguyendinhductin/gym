import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../components/Container';
import TitleScreen from '../components/TitleScreen';
import YourPlanItem from '../components/YourPlanItem';

const YourPlanScreen = ({}) => {
  const navigation = useNavigation();

  const onPressItem = day => {
    navigation.navigate('plan_detail', {day});
  };

  return (
    <Container>
      <TitleScreen txt="Your Plan" />
      <ScrollView>
        <View style={styles.itemContainer}>
          <YourPlanItem number={2} onPress={() => onPressItem(2)} />
          <YourPlanItem number={3} onPress={() => onPressItem(3)} />
          <YourPlanItem number={4} onPress={() => onPressItem(4)} />
          <YourPlanItem number={5} onPress={() => onPressItem(5)} />
          <YourPlanItem number={6} onPress={() => onPressItem(6)} />
          <YourPlanItem number={7} onPress={() => onPressItem(7)} />
          <YourPlanItem number={8} onPress={() => onPressItem(8)} active />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default YourPlanScreen;
