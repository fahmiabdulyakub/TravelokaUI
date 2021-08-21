import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICHotel, ICPlan, ICVilla} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconText} from '../../atoms';

export const Menu = () => {
  return (
    <View style={styles.container_menu}>
      <ButtonIconText
        icon={<View style={styles.icon(colors.blue)}>{<ICPlan />}</View>}
        title={'Tiket Pesawat'}
        titleColor={colors.abuMuda}
        width={wp(17)}
        flexDirection={'column'}
        paddingVertical={hp(1.5)}
        textAlign={'center'}
        widthText={wp(17)}
      />
      <ButtonIconText
        icon={<View style={styles.icon(colors.blue4)}>{<ICHotel />}</View>}
        title={'Hotel'}
        titleColor={colors.abuMuda}
        width={wp(17)}
        flexDirection={'column'}
        paddingVertical={hp(1.5)}
        textAlign={'center'}
        widthText={wp(13)}
      />
      <ButtonIconText
        icon={
          <View style={styles.icon(colors.blue4)}>
            {<ICVilla width={wp(6)} height={wp(6)} />}
          </View>
        }
        title={'Villa & Apartemen'}
        titleColor={colors.abuMuda}
        width={wp(17)}
        marginHorizontal={wp(1)}
        flexDirection={'column'}
        paddingVertical={hp(1.5)}
        textAlign={'center'}
        widthText={wp(17)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: wp(1),
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
