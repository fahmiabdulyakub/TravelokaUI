import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Akun, Awal, Inbox, Pesanan, Simpan} from '../screens';
import {BottomNavigation} from '../components';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <BottomTab.Screen name="Awal" component={Awal} />
      <BottomTab.Screen name="Simpan" component={Simpan} />
      <BottomTab.Screen name="Pesanan" component={Pesanan} />
      <BottomTab.Screen name="Inbox" component={Inbox} />
      <BottomTab.Screen name="Akun" component={Akun} />
    </BottomTab.Navigator>
  );
};
export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
