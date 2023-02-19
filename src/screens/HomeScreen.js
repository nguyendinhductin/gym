import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import CateItemV from '../components/CateItemV';
import Container from '../components/Container';
import EcerciseItem from '../components/EcerciseItem';
import {categories, exRecomend, findExByCateId} from '../configs/data';

const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <>
      <Container safeArea>
        <ScrollView>
          <View style={styles.appHeader}>
            <Text style={styles.appHeaderTxt}>Hello, DUZTIN!</Text>
            <View style={styles.viewBell}>
              <AppIcon name="notifications" size={32} color="#96a0b5" />
              <View style={styles.dotBell} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeder}>
              <Text style={styles.txtLg}>Danh mục</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('category');
                }}>
                <Text style={styles.txtSm}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContent}>
              <FlatList
                data={categories.slice(0, 3)}
                renderItem={({item}) => (
                  <CateItemV
                    text={item.name}
                    img={item.img}
                    onPress={() => {
                      navigation.navigate('exercises', {
                        item,
                      });
                    }}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListHeaderComponent={() => <View style={styles.separator} />}
                ListFooterComponent={() => <View style={styles.separator} />}
              />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeder}>
              <Text style={styles.txtLg}>Bài tập đề xuất</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('category');
                }}>
                <Text style={styles.txtSm}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionContent}>
              {exRecomend.map((item, idx) => {
                const ex = findExByCateId(item.exID, item.cateId);
                return (
                  <EcerciseItem
                    key={idx}
                    text={ex.name}
                    img={ex.img}
                    time={ex.time}
                    onPress={() => {
                      navigation.navigate('exercise_detail', {
                        item: ex,
                        idCate: item.cateId,
                      });
                    }}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 12,
  },
  sectionHeder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  txtLg: {
    fontSize: 20,
    fontWeight: '500',
    color: '#303030',
  },
  txtSm: {
    fontSize: 14,
    fontWeight: '500',
    color: '#303030',
    textDecorationLine: 'underline',
  },
  sectionContent: {
    marginTop: 16,
  },
  separator: {
    width: 16,
  },
  appHeader: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  appHeaderTxt: {
    color: '#303030',
    fontSize: 24,
  },
  viewBell: {},
  dotBell: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    right: 6,
    top: 4,
  },
});

export default HomeScreen;
