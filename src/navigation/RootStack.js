import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import PlanDetailScreen from '../screens/PlanDetailScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotScreen from '../screens/ForgotScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import InitInfoScreen from '../screens/InitInfoScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';
import ActivityScreen from '../screens/ActivityScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="login">
        <>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home_tab" component={HomeTabs} />
          <Stack.Screen name="plan_detail" component={PlanDetailScreen} />
          <Stack.Screen name="exercises" component={ExercisesScreen} />
          <Stack.Screen name="activity" component={ActivityScreen} />
          <Stack.Screen
            name="exercise_detail"
            component={ExerciseDetailScreen}
          />
          <Stack.Screen name="on_boarding" component={OnBoardingScreen} />
          <Stack.Screen name="sign_up" component={SignUpScreen} />
          <Stack.Screen name="forgot" component={ForgotScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="init_info" component={InitInfoScreen} />
        </>
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
