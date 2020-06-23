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
    // World data.
    casesW: '...',
    deathsW: '...',
    lethalityW: '...',
    recoveredW: '...',
  };

  loadCases = async () => {
    // World data.
    const responseW = await api.get("/world");

    const world = responseW.data;

    const lethalityW = ((world.deaths / world.cases) * 100).toFixed(1).replace('.', ',') + '%';

    this.setState({ casesW: world.cases });
    this.setState({ deathsW: world.deaths });
    this.setState({ lethalityW: lethalityW });
    this.setState({ recoveredW: world.recovered });


  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <View style={cardStyles.deathsCard}>
            <Text style={cardStyles.deathsLabel}>Mortes Mundo:</Text>
            <Text style={cardStyles.deathsNumber}>{this.state.deathsW}</Text>
          </View>

          <View style={cardStyles.midleCardsContainer}>
            <View style={cardStyles.recoveredMediumCard}>
              <Text style={cardStyles.recoveredMediumLabel}>Recuperados Mundo:</Text>

              <Text style={cardStyles.recoveredNumber}>{this.state.recoveredW}</Text>
            </View>

            <View style={cardStyles.lethalityCard}>
              <Text style={cardStyles.lethalityLabel}>Letalidade Mundo:</Text>
              <Text style={cardStyles.lethalityNumber}>{this.state.lethalityW}</Text>
            </View>
          </View>

          <View style={cardStyles.casesCard}>
            <Text style={cardStyles.casesLabel}>Casos Mundo:</Text>
            <Text style={cardStyles.casesNumber}>{this.state.casesW}</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/img/sick.png')} style={styles.images} />
          <Text style={styles.imageLabel2}>Sentindo-se com algum sintoma? Procure o posto de saúde mais próximo.</Text>
        </View>
      </View>
    );
  }
}