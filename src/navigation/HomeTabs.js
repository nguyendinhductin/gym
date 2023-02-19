import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AppIcon from '../components/AppIcon';
import {StyleSheet, View} from 'react-native';
import YourPlanScreen from '../screens/YourPlanScreen';
import MonitorScreen from '../screens/MonitorScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const renderTabBarLabel = ({focused}) => {
  return <View style={[styles.label, focused && styles.selectedTab]} />;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={'home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AppIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: renderTabBarLabel,
        }}
      />

      <Tab.Screen
        name={'your_plan'}
        component={YourPlanScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AppIcon
              name={focused ? 'book' : 'book-outline'}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: renderTabBarLabel,
        }}
      />

      <Tab.Screen
        name={'category'}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AppIcon
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: renderTabBarLabel,
        }}
      />

      <Tab.Screen
        name={'monitor'}
        component={MonitorScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AppIcon
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: renderTabBarLabel,
        }}
      />

      <Tab.Screen
        name={'user'}
        component={UserScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AppIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: renderTabBarLabel,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    height: 4,
    width: 14,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  selectedTab: {
    backgroundColor: '#60AFBF',
  },
});

export default HomeTabs;
