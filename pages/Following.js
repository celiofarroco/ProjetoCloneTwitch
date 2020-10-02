import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import styles from '../styles/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
import Feather from 'react-native-vector-icons/Feather';
import Categories from '../components/categories';
import StreamList from '../components/streamList';
Feather.loadFont();

const Following = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <TouchableOpacity style={styles.avatar}>
              <View style={styles.onlineStatus}></View>
            </TouchableOpacity>
            <View style={styles.rightSide}>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons
                  name="notifications-none"
                  size={26}
                  color={colors.black}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons
                  name="message-outline"
                  size={26}
                  color={colors.black}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons name="search" size={26} color={colors.black} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>Following</Text>
            </View>
            <Text style={styles.titleText}>FOLLOWED CATEGORIES</Text>

            <View style={styles.organizador}>
              <Categories />
            </View>

            <Text style={styles.titleText}>LIVE CHANNELS</Text>

            <StreamList />
            <StreamList />
            <StreamList />
            <Text style={styles.titleText}>CONTINUE WATCHING</Text>
            <StreamList />
            <StreamList />
            <StreamList />
            <Text style={styles.titleText}>OFFLINE CHANNELS</Text>
            <StreamList />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Following;
