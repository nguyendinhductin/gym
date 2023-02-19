import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CategoryItem from '../components/CategoryItem';
import Container from '../components/Container';
import TitleScreen from '../components/TitleScreen';
import {categories} from '../configs/data';

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleScreen txt="Danh mục" />
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <CategoryItem
            img={item.img}
            text={item.name}
            onPress={() => {
              navigation.navigate('exercises', {
                item,
                idCate: item.id,
              });
            }}
          />
        )}
      />
    </Container>
  );
};

export default CategoryScreen;
