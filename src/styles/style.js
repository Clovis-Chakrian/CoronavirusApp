import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },

  titleAppContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',

    height: 51,
  },

  titleApp: {
    fontSize: 18,
    color: '#00BFFF',
  },

  imageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  images: {
    width: 145,
    height: 108,
    alignSelf: 'center',
    marginRight: 10
  },

  imageLabel: {
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: 'Ubuntu_700Bold',
    color: '#00BFFF',
    marginRight: 10,
    width: 107,
    height: 60,
  },

  imageLabel2: {
    alignSelf: 'center',
    fontSize: 17,
    fontFamily: 'Ubuntu_700Bold',
    color: '#00BFFF',
    marginRight: 10,
    width: 147,
    height: 100,
  },

  cardsContainer: {
    marginBottom: 50
  },
});

export default styles;