import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Categories = () => {
  return (
    <>
      <TouchableOpacity style={styles.categoryList}>
        <Image
          source={require('../images/category_apex.jpg')}
          style={styles.categoryImage}></Image>
        <Text style={styles.categoryName} numberOfLines={1}>
          Apex Legends
        </Text>
        <View style={styles.categoryStatus}>
          <View style={styles.redCircle} />
          <Text style={styles.info}>51.9K</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryList}>
        <Image
          source={require('../images/category_csgo.jpg')}
          style={styles.categoryImage}></Image>
        <Text style={styles.categoryName} numberOfLines={1}>
          CS:GO
        </Text>
        <View style={styles.categoryStatus}>
          <View style={styles.redCircle} />
          <Text style={styles.info}>42.1K</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryList}>
        <Image
          source={require('../images/category_lol.jpg')}
          style={styles.categoryImage}></Image>
        <Text style={styles.categoryName} numberOfLines={1}>
          League of Legends
        </Text>
        <View style={styles.categoryStatus}>
          <View style={styles.redCircle} />
          <Text style={styles.info}>3</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryList}>
        <Image
          source={require('../images/category_fallguys.jpg')}
          style={styles.categoryImage}></Image>
        <Text style={styles.categoryName} numberOfLines={1}>
          Fall Guys
        </Text>
        <View style={styles.categoryStatus}>
          <View style={styles.redCircle} />
          <Text style={styles.info}>31.9K</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Categories;
