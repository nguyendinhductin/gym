/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Video from 'react-native-video';
import AppIcon from '../components/AppIcon';
import Container from '../components/Container';
import Slider from '@react-native-community/slider';
import {getPlan, savePlan} from '../utils';
import {videoDefault} from '../configs/data';

const ActivityScreen = ({}) => {
  const route = useRoute();
  const {item, idCate, day} = route.params;

  const [duration, setDuration] = React.useState(0);
  const player = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [planData, setPlanData] = React.useState({});

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getTime = t => {
    let minutes = Math.floor(t / 60);
    let seconds = Math.trunc(t - minutes * 60);
    return `${minutes}:${seconds}`;
  };

  React.useEffect(() => {
    getPlan()
      .then(data => {
        setPlanData(data ?? {});
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const checkExIsDone = () => {
    if (planData[day]) {
      for (const dataDay of planData[day]) {
        if (dataDay.idEx === item.id && dataDay.idCate === idCate) {
          return dataDay.isDone;
        }
      }
    }

    return false;
  };

  const onPressDone = () => {
    const plan = {...planData};

    for (const planDay of plan[day]) {
      if (planDay.idEx === item.id && planDay.idCate === idCate) {
        planDay.isDone = !planDay.isDone;
        break;
      }
    }

    savePlan(plan).catch(err => {
      console.log(err);
    });
  };

  return (
    <Container safeArea>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setIsPlaying(false);
        }}
        disabled={!isPlaying}>
        {!isPlaying && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnPlay}
            onPress={handlePlay}>
            <AppIcon name="play" size={24} color={'#FFA451'} />
          </TouchableOpacity>
        )}
        <Video
          repeat
          paused={!isPlaying}
          source={{
            uri: item.video ?? videoDefault,
          }}
          ref={ref => {
            player.current = ref;
          }}
          onLoad={data => {
            setDuration(data.duration);
          }}
          onError={e => {
            console.log(e);
          }}
          onProgress={e => {
            setCurrentTime(e.currentTime);
          }}
          style={styles.backgroundVideo}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={styles.progress}>
        <Slider
          style={{
            height: 10,
          }}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          minimumTrackTintColor="#60AFBF"
          maximumTrackTintColor="#ccc"
          onSlidingComplete={async value => {
            await player.current.seek(value);
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
          }}>
          <Text>{getTime(currentTime)}</Text>
          <Text>{getTime(duration)}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.txtName}>{item.name}</Text>
        <View style={styles.flRow}>
          <AppIcon name="timer-outline" size={16} color={'#96A0B5'} />
          <Text style={styles.txtTime}>{` ${item.time} phút`}</Text>
        </View>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addBtn}
            onPress={onPressDone}>
            <AppIcon
              name={checkExIsDone() ? 'checkmark-done-sharp' : 'close-sharp'}
              size={24}
              color={'#fff'}
            />
            <Text style={styles.txtBtn}>{'Hoàn thành'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
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
  flRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: 320,
    backgroundColor: '#96A0B5',
    marginBottom: 16,
  },
  btnPlay: {
    position: 'absolute',
    top: 320 / 2 - 30,
    left: width / 2 - 30,
    height: 60,
    width: 60,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#cead96',
    borderWidth: 10,
    borderRadius: 30,
  },
  progress: {
    // marginTop: 8,
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
    marginLeft: 8,
  },
  viewBtn: {
    marginTop: 16,
    flexDirection: 'row',
  },
});

export default ActivityScreen;
