import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ICAllProduct,
  ICBus,
  ICCar,
  ICExperience,
  ICFinansial,
  ICHotel,
  ICJRPass,
  ICKuliner,
  ICPlan,
  ICVilla,
} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconText} from '../../atoms';

export const Menu = () => {
  return (
    <>
      <View style={styles.container_menu}>
        <ButtonIconText
          icon={<View style={styles.icon(colors.blue)}>{<ICPlan />}</View>}
          title={'Tiket Pesawat'}
          titleColor={colors.grayMuda}
          fontSize={hp(1.2)}
          width={wp(17)}
          flexDirection={'column'}
          paddingVertical={hp(1.5)}
          textAlign={'center'}
          widthText={wp(16)}
          justifyContent={'flex-start'}
        />
        <ButtonIconText
          icon={<View style={styles.icon(colors.blue4)}>{<ICHotel />}</View>}
          title={'Hotel'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          paddingVertical={hp(1.5)}
          textAlign={'center'}
          widthText={wp(13)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.blue4)}>
              {<ICVilla width={wp(6)} height={wp(6)} />}
            </View>
          }
          title={'Villa & Apartemen'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          paddingVertical={hp(1.5)}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.experience)}>
              {<ICExperience />}
            </View>
          }
          title={'Xperience'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          paddingVertical={hp(1.5)}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.orange)}>
              {<ICKuliner width={wp(5)} height={wp(5)} />}
            </View>
          }
          title={'Kuliner'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          paddingVertical={hp(1.5)}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
      </View>
      <View style={styles.container_menu}>
        <ButtonIconText
          icon={<View style={styles.icon(colors.train)}>{<ICJRPass />}</View>}
          title={'Tiket Kereta Api'}
          titleColor={colors.grayMuda}
          fontSize={hp(1.2)}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(16)}
          justifyContent={'flex-start'}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.green)}>
              {<ICBus width={wp(7)} height={wp(7)} />}
            </View>
          }
          title={'Tiket Bus & Travel'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(13)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.car)}>
              {<ICCar width={wp(8)} height={wp(8)} bottom={hp(0.5)} />}
            </View>
          }
          title={'Mobil'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.dark_blue)}>{<ICFinansial />}</View>
          }
          title={'Finansial'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
        <ButtonIconText
          icon={
            <View style={styles.icon(colors.concrete)}>{<ICAllProduct />}</View>
          }
          title={'Semua Produk'}
          titleColor={colors.grayMuda}
          width={wp(17)}
          flexDirection={'column'}
          textAlign={'center'}
          widthText={wp(17)}
          justifyContent={'flex-start'}
          fontSize={hp(1.2)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: backgroundColor => ({
    backgroundColor: backgroundColor,
    borderRadius: wp(11) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(11),
    height: wp(11),
    flexDirection: 'row',
  }),
});
