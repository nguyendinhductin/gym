/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import Button from '../components/Button';
import Container from '../components/Container';
import Input from '../components/Input';

/**
 * Giới tính
 */
const Gender = ({gender, setGender}) => {
  return (
    <View>
      <Text style={styles.title}>Select Your Gender</Text>
      <Text style={styles.subtitle}>
        This is used to set up reccomendations just for you.
      </Text>
      <View style={styles.viewSelectGender}>
        <TouchableOpacity
          onPress={() => setGender(1)}
          style={[styles.itemGender, gender === 1 && styles.active]}>
          <AppIcon color={'#60AFBF'} name="male" size={32} />
          <Text style={styles.txtPrimary}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGender(2)}
          style={[styles.itemGender, gender === 2 && styles.active]}>
          <AppIcon color={'#60AFBF'} name="female" size={32} />
          <Text style={styles.txtPrimary}>Nữ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * Tuoi
 */
const Age = ({age, setAge}) => {
  return (
    <View>
      <Text style={styles.title}>How old are you?</Text>
      <Text style={styles.subtitle}>
        This is used to set up reccomendations just for you.
      </Text>

      <View style={{marginTop: 24}} />

      <Input
        placeholder="Tuổi của bạn"
        keyboardType="number-pad"
        onChangeText={setAge}
      />
    </View>
  );
};

const Goal = ({goal, setGoal}) => {
  return (
    <View>
      <Text style={styles.title}>Select Your Goal</Text>

      <View
        style={{
          marginTop: 32,
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setGoal(1)}
          style={[styles.itemBig, goal === 1 && styles.itemBigActive]}>
          <Text style={styles.txtTitleItemBig}>Lose Weight</Text>
          <Text style={styles.txtSubTitleItemBig}>
            This is used to set up reccomendations just for you.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setGoal(2)}
          style={[styles.itemBig, goal === 2 && styles.itemBigActive]}>
          <Text style={styles.txtTitleItemBig}>Gain Weight</Text>
          <Text style={styles.txtSubTitleItemBig}>
            This is used to set up reccomendations just for you.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setGoal(3)}
          style={[styles.itemBig, goal === 3 && styles.itemBigActive]}>
          <Text style={styles.txtTitleItemBig}>Gain Muscle</Text>
          <Text style={styles.txtSubTitleItemBig}>
            This is used to set up reccomendations just for you.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SelectActivity = ({acts, setActs}) => {
  const handlePress = value => {
    if (acts.includes(value)) {
      setActs(acts.filter(item => item !== value));
    } else {
      setActs([...acts, value]);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Physical Activity</Text>
      <Text style={styles.subtitle}>
        Choosing four activities that you enjoy.
      </Text>

      <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity
          onPress={() => {
            handlePress(1);
          }}
          style={[
            styles.activityItem,
            acts.includes(1) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(2)}
          style={[
            styles.activityItem,
            acts.includes(2) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(3)}
          style={[
            styles.activityItem,
            acts.includes(3) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(4)}
          style={[
            styles.activityItem,
            acts.includes(4) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(5)}
          style={[
            styles.activityItem,
            acts.includes(5) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(6)}
          style={[
            styles.activityItem,
            acts.includes(6) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(7)}
          style={[
            styles.activityItem,
            acts.includes(7) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(8)}
          style={[
            styles.activityItem,
            acts.includes(8) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(9)}
          style={[
            styles.activityItem,
            acts.includes(9) && styles.activityItemActive,
          ]}>
          <Image source={require('../assets/pa1.png')} />
          <Text style={styles.txtActivity}>Hula Hoop </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InitInfoScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = React.useState(1);
  const [gender, setGender] = React.useState(1);
  const [age, setAge] = React.useState(null);
  const [goal, setGoal] = React.useState(1);
  const [acts, setActs] = React.useState([]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Container safeArea style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={prevStep} style={styles.flexOne}>
            {step !== 1 && (
              <AppIcon name="chevron-back" size={24} color="#303030" />
            )}
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text>{`${step} / 4`}</Text>
          </View>
          <View style={styles.flexOne} />
        </View>
        <View style={styles.flexOne}>
          {step === 1 && <Gender gender={gender} setGender={setGender} />}
          {step === 2 && <Age age={age} setAge={setAge} />}
          {step === 3 && <Goal goal={goal} setGoal={setGoal} />}
          {step === 4 && <SelectActivity acts={acts} setActs={setActs} />}
        </View>
        <Button
          title={'Tiếp tục'}
          onPress={() => {
            if (step < 4) {
              nextStep();
            } else {
              navigation.navigate('welcome');
            }
          }}
        />
      </Container>
    </>
  );
};

const width = Dimensions.get('window').width;
const itemActivityWidth = (width - 24 * 2 - 16 * 2) / 3;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
  },
  headerContent: {
    flex: 3,
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 34,
    color: '#303030',
    textAlign: 'center',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#838383',
    textAlign: 'center',
  },
  viewSelectGender: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemGender: {
    height: 136,
    width: 136,
    borderColor: '#C7C9D9',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    borderColor: '#60AFBF',
  },
  txtPrimary: {
    color: '#60AFBF',
  },
  itemBig: {
    backgroundColor: '#f6f7fa',
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#f6f7fa',
    borderWidth: 2,
  },
  itemBigActive: {
    borderColor: '#60AFBF',
  },
  txtTitleItemBig: {
    color: '#303030',
    fontSize: 16,
    lineHeight: 20,
  },
  txtSubTitleItemBig: {
    color: '#8C8C8C',
    fontSize: 14,
    lineHeight: 21,
  },
  activityItem: {
    backgroundColor: '#f4f4f7',
    width: itemActivityWidth,
    height: itemActivityWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  activityItemActive: {
    borderColor: '#60AFBF',
    borderWidth: 2,
  },
  txtActivity: {
    color: '#acacac',
  },
});

export default InitInfoScreen;
