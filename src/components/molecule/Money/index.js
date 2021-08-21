import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICPayLater, ICPoint, ICWallet} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconText, Gap} from '../../atoms';

export const Money = () => {
  return (
    <View style={styles.container_point}>
      <ButtonIconText
        icon={<ICPoint width={wp(5)} height={wp(5)} />}
        title={'15.900 Points'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
      />
      <Gap width={wp(3)} />
      <ButtonIconText
        icon={<ICWallet width={wp(4)} height={wp(4)} />}
        title={'Payment'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
      />
      <Gap width={wp(3)} />
      <ButtonIconText
        icon={<ICPayLater width={wp(4)} height={wp(4)} />}
        title={'PayLater'}
        titleColor={colors.grayMuda}
        fontWeight={'bold'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_point: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: colors.concrete,
    paddingVertical: hp(2),
  },
});
