import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import streamStyles from '../styles/streamStyles';

const StreamList = () => {
  return (
    <TouchableOpacity style={streamStyles.container}>
      <Image
        source={require('../images/final_round.jpg')}
        style={streamStyles.thumbnail}></Image>

      <View style={streamStyles.row}>
        <View style={streamStyles.column}>
          <View style={streamStyles.header}>
            <View style={streamStyles.avatar} />
            <Text numberOfLines={1} style={streamStyles.username}>
              FinalRoundProject
            </Text>
          </View>
          <Text numberOfLines={1} style={streamStyles.description}>
            Final Round Project - The biggest gaming channel on Twitch
          </Text>
          <Text numberOfLines={1} style={streamStyles.category}>
            Hardcore Gaming
          </Text>
        </View>

        <View style={streamStyles.tagRow}>
          <View style={streamStyles.tagView}>
            <Text style={streamStyles.tagText}>Shooter</Text>
          </View>
          <View style={streamStyles.tagView}>
            <Text style={streamStyles.tagText}>RPG</Text>
          </View>
          <View style={streamStyles.tagView}>
            <Text style={streamStyles.tagText}>CO-OP</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default StreamList;
