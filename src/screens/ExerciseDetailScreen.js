import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import Container from '../components/Container';
import Header from '../components/Header';
import {getPlan, savePlan} from '../utils';

const ItemDay = ({day, isActive, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.viewDay, isActive && styles.viewDayActive]}
      onPress={onPress}>
      <Text style={[styles.txtDay, styles.txtDayActive]}>{day}</Text>
    </TouchableOpacity>
  );
};

const ExerciseDetailScreen = ({}) => {
  const route = useRoute();
  const {item, idCate} = route.params;

  const [showDays, setShowDays] = React.useState(false);
  const [planData, setPlanData] = React.useState({
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  });

  const checkDayHaveExercise = day => {
    for (const dataDay of planData[day]) {
      if (dataDay.idEx === item.id && dataDay.idCate === idCate) {
        return true;
      }
    }
    return false;
  };

  React.useEffect(() => {
    const boostrap = async () => {
      const plan = await getPlan();

      if (plan) {
        setPlanData(plan);
      }
    };

    boostrap();
  }, []);

  const onPressDay = async day => {
    const newData = {...planData};

    if (checkDayHaveExercise(day)) {
      newData[day] = newData[day].filter(
        data => data.idEx !== item.id || data.idCate !== idCate,
      );
    } else {
      newData[day].push({idCate, idEx: item.id});
    }

    setPlanData(newData);
    await savePlan(newData);
  };

  return (
    <Container safeArea>
      <Header />
      <ScrollView>
        <Image source={item.img} style={styles.img} resizeMode="cover" />
        <View style={styles.content}>
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={styles.flRow}>
            <AppIcon name="timer-outline" size={16} color={'#96A0B5'} />
            <Text style={styles.txtTime}>{` ${item.time} phút`}</Text>
          </View>
          <Text style={styles.txtTitle}>Mô tả</Text>
          <Text style={styles.txtDesc}>{item.desc ?? 'Không'}</Text>
        </View>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addBtn}
            onPress={() => setShowDays(!showDays)}>
            <AppIcon name="add" size={24} color={'#fff'} />
            <Text style={styles.txtBtn}>Thêm bài tập</Text>
          </TouchableOpacity>
        </View>

        {showDays && (
          <View style={styles.viewDays}>
            {Object.keys(planData).map(key => {
              return (
                <ItemDay
                  key={key}
                  day={key}
                  isActive={checkDayHaveExercise(key)}
                  onPress={() => onPressDay(key)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 240,
  },
  content: {
    marginTop: 16,
    marginHorizontal: 24,
  },
  txtName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    lineHeight: 32,
  },
  txtTime: {
    flex: 16,
    lineHeight: 22,
    color: '#96A0B5',
  },
  txtTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: '#303030',
    fontWeight: '500',
  },
  txtDesc: {
    color: '#8C8C8C',
    fontSize: 16,
    lineHeight: 20,
  },
  flRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303030',
    borderRadius: 8,
    padding: 12,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
  },
  viewBtn: {
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  viewDays: {
    marginTop: 16,
    flexDirection: 'row',
    marginHorizontal: 24,
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  viewDayActive: {
    borderColor: '#60AFBF',
  },
  viewDay: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#303030',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginLeft: 8,
    marginBottom: 8,
  },
  txtDay: {
    color: '#303030',
    fontSize: 16,
    fontWeight: '600',
  },
  txtDayActive: {
    color: '#60AFBF',
  },
});

export default ExerciseDetailScreen;
