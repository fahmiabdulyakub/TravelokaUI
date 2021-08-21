import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICTitik, ICPindai, ICChat} from '../../assets';
import {Button, Card, Gap, Header, Menu, Money} from '../../components';
import {banner, colors, hotel, hp, kota, wp} from '../../constants';

export const Awal = ({navigation}) => {
  const [selected_city, setSelectedCity] = useState(kota[0]);

  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item, destinasi, fitur...'}
        iconRight={<ICTitik />}
        iconRight2={<ICChat />}
        onPress={() => navigation.navigate('Simpan')}
      />
      <ScrollView>
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
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={{
              uri: banner.promo,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Gap height={hp(3)} />
        <View style={styles.container}>
          <Text style={styles.title}>Hotel Pilihan</Text>
          <Text style={styles.textSmall}>
            Dapatkan keuntungan menginap di Hotel dengan menunjukkan Sertifikat
            Vaksinasi
          </Text>
        </View>
        <Gap height={hp(2)} />
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Gap width={wp(1.5)} />
            {kota.map((item, index) => {
              return (
                <Button
                  key={index}
                  title={item.name}
                  buttonColor={
                    selected_city.id === item.id
                      ? colors.blue3
                      : colors.concrete
                  }
                  textColor={
                    selected_city.id === item.id ? colors.white : colors.blue3
                  }
                  marginHorizontal={wp(1.5)}
                  paddingVertical={hp(1)}
                  onPress={() => setSelectedCity(item)}
                />
              );
            })}
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Gap width={wp(1.5)} />
            {hotel.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </ScrollView>
        </View>
        <Gap height={hp(10)} />
      </ScrollView>
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
    fontWeight: '500',
  },
});
