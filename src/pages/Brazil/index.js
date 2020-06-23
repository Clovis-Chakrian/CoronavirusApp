import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../styles/style';
import cardStyles from '../../styles/cardsStyle';

import api from '../../services/api';

export default class Main extends Component {

  componentDidMount() {
    this.loadCases();
  }

  state = {
    // Brazil data.
    casesB: '...',
    deathsB: '...',
    lethalityB: '...',
    recoveredB: '...',
  };

  loadCases = async () => {
    // Brazil update.
    const responseB = await api.get("/brazil");

    const brazil = responseB.data;

    const lethalityB = ((brazil.deaths / brazil.cases) * 100).toFixed(1).replace('.', ',') + '%';

    this.setState({ casesB: brazil.cases });
    this.setState({ deathsB: brazil.deaths });
    this.setState({ lethalityB: lethalityB });
    this.setState({ recoveredB: brazil.recovered });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <View style={cardStyles.deathsCard}>
            <Text style={cardStyles.deathsLabel}>Mortes Brasil:</Text>
            <Text style={cardStyles.deathsNumber}>{this.state.deathsB}</Text>
          </View>

          <View style={cardStyles.midleCardsContainer}>
            <View style={cardStyles.casesMediumCard}>
              <Text style={cardStyles.casesMediumLabel}>Casos Brasil:</Text>
              <Text style={cardStyles.casesNumber}>{this.state.casesB}</Text>
            </View>

            <View style={cardStyles.lethalityCard}>
              <Text style={cardStyles.lethalityLabel}>Letalidade Brasil:</Text>
              <Text style={cardStyles.lethalityNumber}>{this.state.lethalityB}</Text>
            </View>
          </View>

          <View style={cardStyles.recoveredCard}>
            <Text style={cardStyles.recoveredLabel}>Recuperados Brasil:</Text>
            <Text style={cardStyles.recoveredNumber}>{this.state.recoveredB}</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/img/mask.png')} style={styles.images} />
          <Text style={styles.imageLabel}>Sempre use sua máscara ao sair.</Text>
        </View>
      </View>
    );
  }
}