import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const cardStyles = StyleSheet.create({
  deathsCard: {
    justifyContent: 'space-between',
    height: 99,
    width: Dimensions.get('window').width - 20,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

  },

  deathsLabel: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#FF0000',
    marginLeft: 12,
    marginTop: 7
  },

  deathsNumber: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    color: '#FF0000'
  },

  midleCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  casesMediumCard: {
    justifyContent: 'space-between',
    height: 87,
    width: 215,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  casesMediumLabel: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    color: '#F45000',
    marginTop: 7,
    marginLeft: 12,
  },

  casesNumber: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    color: '#F45000',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  casesCard: {
    justifyContent: 'space-between',
    borderRadius: 12,
    height: 99,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  casesLabel: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#F45000',
    marginLeft: 12,
    marginTop: 7,
  },

  casesNumber: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    alignSelf: 'center',
    color: '#F45000'
  },

  lethalityCard: {
    justifyContent: 'space-between',
    height: 87,
    width: 115,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  lethalityLabel: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    color: '#96DC00',
    marginTop: 7,
  },

  lethalityNumber: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: '#96DC00'
  },

  recoveredCard: {
    justifyContent: 'space-between',
    borderRadius: 12,
    height: 99,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  recoveredLabel: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#1E90FF',
    marginLeft: 12,
    marginTop: 7,
  },

  recoveredNumber: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    alignSelf: 'center',
    color: '#1E90FF'
  },

  recoveredMediumCard: {
    justifyContent: 'space-between',
    height: 87,
    width: 215,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  recoveredMediumLabel: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    color: '#1E90FF',
    marginTop: 7,
    marginLeft: 12,
  },

  recoveredNumber: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    color: '#1E90FF',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  stateCard: {
    height: 99,
    borderRadius: 12,
    marginBottom: 15,
    width: Dimensions.get('window').width - 20,
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
  },

  stateName: {
    marginLeft: 17,
    marginTop: 11,
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#00BFFF',
    flex: 2
  },

  stateNumbersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1
  },

  cases: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#F45000',
  },

  deaths: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#FF0000',
  },

  recovered: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#1E90FF',
  },

  lethality: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#96DC00',
  },
});

export default cardStyles;