import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICTitik, ICPindai, ICChat} from '../../assets';
import {Gap, Header, Menu, Money} from '../../components';
import {colors, hp, wp} from '../../constants';

export const Awal = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item, destinasi, fitur...'}
        iconRight={<ICTitik />}
        iconRight2={<ICChat />}
        onPress={() => navigation.navigate('Simpan')}
      />
      <View style={styles.containerRow}>
        <View style={styles.row}>
          <View style={styles.circle}>
            <Text>FA</Text>
          </View>
          <Gap width={wp(3)} />
          <Text style={styles.textBold}>Fahmi Abdul Yakub</Text>
        </View>
        <View>
          <TouchableOpacity>
            {<ICPindai width={wp(10)} height={wp(10)} />}
          </TouchableOpacity>
          <Text style={styles.textSmall}>Pindai</Text>
        </View>
      </View>
      <Money />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: wp(5),
  },
  containerRow: {
    paddingTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    backgroundColor: colors.concrete,
  },
  textBold: {
    color: colors.gray,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  circle: {
    backgroundColor: colors.abu,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSmall: {
    color: colors.grayMuda,
    fontSize: hp(1.5),
  },
});
