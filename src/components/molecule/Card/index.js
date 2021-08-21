import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import {Gap} from '../../atoms';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.contentText}>
        <Gap height={hp(1)} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.white,
    marginHorizontal: 4,
    marginVertical: hp(1.5),
    width: wp(45),
    height: hp(40),
  },
  image: {
    width: '100%',
    height: hp(20),
    borderRadius: 5,
  },
  contentText: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  price: {
    fontSize: hp(1.8),
    textTransform: 'capitalize',
    fontWeight: '500',
    color: colors.orange,
  },
});
