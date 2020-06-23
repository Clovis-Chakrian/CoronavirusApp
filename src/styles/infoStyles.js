import React from 'react';
import { StyleSheet } from 'react-native';

const infoStyles = StyleSheet.create({
  tipCard: {
    height: 170,
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3',
    marginBottom: 10
  },

  title: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#00BFFF'
  },

  tip: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 12,
    color: '#00BFFF',
    alignSelf: 'center',
    marginLeft: 5,
    width: 180
  },

  imgContainer: {
    flex: 2,
    flexDirection: 'row'
  },

  imgs: {
    height: 108,
    width: 145
  }
});

export default infoStyles;