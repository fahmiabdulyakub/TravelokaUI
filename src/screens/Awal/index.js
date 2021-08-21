import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICTitik, ICPindai, ICChat} from '../../assets';
import {Button, Gap, Header, Menu, Money} from '../../components';
import {banner, colors, hp, Kota, wp} from '../../constants';

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
      <Gap height={hp(3)} />
      <Image
        source={{
          uri: banner.promo,
        }}
        style={styles.image}
      />
      <Gap height={hp(3)} />
      <View style={styles.container}>
        <Text style={styles.title}>Hotel Pilihan</Text>
        <Text style={styles.textSmall}>
          Dapatkan keuntungan menginap di Hotel dengan menunjukkan Sertifikat
          Vaksinasi
        </Text>
        <Gap height={hp(1)} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Kota.map((item, index) => {
            return (
              <Button
                key={index}
                title={item.name}
                buttonColor={colors.blue3}
                textColor={colors.white}
                marginRight={wp(3)}
                paddingVertical={hp(1)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: wp(3),
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
  image: {
    width: wp(100),
    height: hp(5),
  },
  title: {
    fontSize: hp(2.3),
  },
});
