import 'react-native-gesture-handler';
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
    {
      if (this.state.casesB == '...') {
        return (
          <View style={styles.container}>
            <View style={styles.cardsContainer}>
              <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.deathsCard} />

              <View style={cardStyles.midleCardsContainer}>
                <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.casesMediumCard}/>
                <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.lethalityCard}/>
              </View>

              <ShimmerPlaceHolder autoRun={true} visible={false} style={cardStyles.recoveredCard}/>
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('../../../assets/img/mask.png')} style={styles.images} />
              <Text style={styles.imageLabel}>Sempre use sua máscara ao sair.</Text>
            </View>
          </View>
        );
      }
      else {
        return (
          <View style={styles.container}>
            <View style={styles.cardsContainer}>
              <ShadowView style={cardStyles.deathsCard}>
                <Text style={cardStyles.deathsLabel}>Mortes Brasil:</Text>
                <Text style={cardStyles.deathsNumber}>{this.state.deathsB}</Text>
              </ShadowView>

              <View style={cardStyles.midleCardsContainer}>
                <ShadowView style={cardStyles.casesMediumCard}>
                  <Text style={cardStyles.casesMediumLabel}>Casos Brasil:</Text>
                  <Text style={cardStyles.casesNumber}>{this.state.casesB}</Text>
                </ShadowView>

                <ShadowView style={cardStyles.lethalityCard}>
                  <Text style={cardStyles.lethalityLabel}>Letalidade Brasil:</Text>
                  <Text style={cardStyles.lethalityNumber}>{this.state.lethalityB}</Text>
                </ShadowView>
              </View>

              <ShadowView style={cardStyles.recoveredCard}>
                <Text style={cardStyles.recoveredLabel}>Recuperados Brasil:</Text>
                <Text style={cardStyles.recoveredNumber}>{this.state.recoveredB}</Text>
              </ShadowView>
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('../../../assets/img/mask.png')} style={styles.images} />
              <Text style={styles.imageLabel}>Sempre use sua máscara ao sair.</Text>
            </View>
          </View>
        );
      }
    }
  }

}