import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';
import {findExercises} from '../configs/data';
import EcerciseItem from '../components/EcerciseItem';

const ExercisesScreen = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  return (
    <Container safeArea>
      <Header title={item.name} />
      <FlatList
        keyExtractor={(item, idx) => idx.toString()}
        data={findExercises(item.id)}
        renderItem={({item: itemExe}) => (
          <EcerciseItem
            key={itemExe.id}
            text={itemExe.name}
            img={itemExe.img}
            time={itemExe.time}
            onPress={() => {
              navigation.navigate('exercise_detail', {
                item: itemExe,
                idCate: item.id,
              });
            }}
          />
        )}
      />
    </Container>
  );
};

export default ExercisesScreen;
