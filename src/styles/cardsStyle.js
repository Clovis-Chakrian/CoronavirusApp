import React from 'react';
import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
  deathsCard: {
    height: 99,
    marginBottom: 15,
    borderRadius: 12,

    elevation: 2
  },

  deathsLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF0000',
    marginLeft: 12,
    marginTop: 7
  },

  deathsNumber: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF0000'
  },

  midleCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  casesMediumCard: {
    height: 87,
    width: 215,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2
  },

  casesMediumLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F45000',
    marginTop: 7,
    marginLeft: 12,
  },

  casesNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F45000',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  casesCard: {
    borderRadius: 12,
    height: 99,
    elevation: 2
  },

  casesLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F45000',
    marginLeft: 12,
    marginTop: 7,
  },

  casesNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#F45000'
  },

  lethalityCard: {
    height: 87,
    width: 115,
    borderRadius: 12,
    elevation: 2,
  },

  lethalityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#96DC00',
    marginTop: 7,
  },

  lethalityNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: '#96DC00'
  },

  recoveredCard: {
    borderRadius: 12,
    height: 99,
    elevation: 2
  },

  recoveredLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginLeft: 12,
    marginTop: 7,
  },

  recoveredNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#1E90FF'
  },

  recoveredMediumCard: {
    height: 87,
    width: 215,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2
  },

  recoveredMediumLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginTop: 7,
    marginLeft: 12,
  },

  recoveredNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E90FF',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default cardStyles;