import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICSearch} from '../../../assets';
import {colors, hp, wp} from '../../../constants';
import {ButtonIconOnly} from '../../atoms';
import Input from '../Input';

const Header = ({
  onPress,
  placeholder,
  iconRight,
  iconRight2,
  paddingRight,
}) => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.blue2,
      height: hp(8),
      paddingHorizontal: wp(2),
      paddingRight: paddingRight,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.header}>
      <Input
        colorText={colors.grayMuda}
        paddingHorizontal={wp(3)}
        backgroundColor={colors.white}
        placeholder={placeholder}
        fontSize={hp(1.5)}
        borderRadius={wp(1)}
        height={hp(4.8)}
        suffixComponent={<ICSearch />}
        widthInput={wp(70)}
        onPress={onPress}
      />
      <ButtonIconOnly icon={iconRight} size={10} />
      {iconRight2 && <ButtonIconOnly icon={iconRight2} />}
    </View>
  );
};

export default Header;
