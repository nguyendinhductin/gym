import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Container from '../components/Container';
import EcerciseItem from '../components/EcerciseItem';
import Header from '../components/Header';
import {getPlan, savePlan} from '../utils';
import {findExByCateId} from '../configs/data';

const PlanDetailScreen = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const day = route.params.day;

  const [planData, setPlanData] = React.useState({});

  React.useEffect(() => {
    const boostrap = async () => {
      const plan = await getPlan();

      if (plan) {
        setPlanData(plan);
      }
    };

    boostrap();
  }, [day]);

  const handleDel = (exId, cateID) => {
    Alert.alert(
      'Xóa bài tập',
      'Bạn có chắc chắn muốn xóa bài tập này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: async () => {
            const newPlan = {...planData};
            newPlan[day] = planData[day].filter(
              item => !(item.idEx === exId && item.idCate === cateID),
            );
            await savePlan(newPlan);
            setPlanData(newPlan);
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <Container safeArea>
      <Header title={'Bài tập'} />
      <View style={styles.content}>
        {planData &&
          planData[day]?.map((dataExItem, idx) => {
            const exItem = findExByCateId(dataExItem.idEx, dataExItem.idCate);

            return (
              <EcerciseItem
                key={idx}
                img={exItem.img}
                text={exItem.name}
                time={exItem.time}
                onDel={() => handleDel(dataExItem.idEx, dataExItem.idCate)}
                isDone={dataExItem.isDone}
                onPress={() => {
                  navigation.navigate('activity', {
                    item: exItem,
                    idCate: dataExItem.idCate,
                    day,
                  });
                }}
              />
            );
          })}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 8,
  },
});

export default PlanDetailScreen;
