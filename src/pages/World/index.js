import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ShadowView from 'react-native-shadow-view';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

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
    {
      if (this.state.deathsW == '...') {
        return (
          <View style={styles.container}>
            <View style={styles.cardsContainer}>
              <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.deathsCard} />

              <View style={cardStyles.midleCardsContainer}>
                <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.recoveredMediumCard} />
                <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.lethalityCard} />
              </View>
              
              <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.casesCard} />
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('../../../assets/img/sick.png')} style={styles.images} />
              <Text style={styles.imageLabel2}>Sentindo-se com algum sintoma? Procure o posto de saúde mais próximo.</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <View style={styles.cardsContainer}>
              <ShadowView style={cardStyles.deathsCard}>
                <Text style={cardStyles.deathsLabel}>Mortes Mundo:</Text>
                <Text style={cardStyles.deathsNumber}>{this.state.deathsW}</Text>
              </ShadowView>

              <View style={cardStyles.midleCardsContainer}>
                <ShadowView style={cardStyles.recoveredMediumCard}>
                  <Text style={cardStyles.recoveredMediumLabel}>Recuperados Mundo:</Text>

                  <Text style={cardStyles.recoveredNumber}>{this.state.recoveredW}</Text>
                </ShadowView>

                <ShadowView style={cardStyles.lethalityCard}>
                  <Text style={cardStyles.lethalityLabel}>Letalidade Mundo:</Text>
                  <Text style={cardStyles.lethalityNumber}>{this.state.lethalityW}</Text>
                </ShadowView>
              </View>

              <ShadowView style={cardStyles.casesCard}>
                <Text style={cardStyles.casesLabel}>Casos Mundo:</Text>
                <Text style={cardStyles.casesNumber}>{this.state.casesW}</Text>
              </ShadowView>
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('../../../assets/img/sick.png')} style={styles.images} />
              <Text style={styles.imageLabel2}>Sentindo-se com algum sintoma? Procure o posto de saúde mais próximo.</Text>
            </View>
          </View>
        );
      }
    }
  }
}