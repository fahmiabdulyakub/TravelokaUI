import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {LogoTraveloka} from '../../assets';
import {colors, hp, wp} from '../../constants';

export const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.page_padding}>
      <Image source={LogoTraveloka} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '40%',
    width: '100%',
  },
  page_padding: {
    backgroundColor: colors.blue2,
    flex: 1,
    paddingHorizontal: wp(3),
    justifyContent: 'center',
    paddingBottom: hp(10),
  },
});
