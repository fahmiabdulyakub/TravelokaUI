import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Akun, Awal, Inbox, Pesanan, Simpan, Splash} from '../screens';
import {BottomNavigation} from '../components';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../constants';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <BottomTab.Screen
        name="Awal"
        component={Awal}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Simpan"
        component={Simpan}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};
export const Routes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar backgroundColor={colors.blue2} />
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
