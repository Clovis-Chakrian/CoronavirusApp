import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../styles/style';
import cardStyles from '../../styles/cardsStyle';

const Brazil = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <View style={cardStyles.deathsCard}>
          <Text style={cardStyles.deathsLabel}>Mortes Brasil:</Text>
          <Text style={cardStyles.deathsNumber}>0</Text>
        </View>

        <View style={cardStyles.midleCardsContainer}>
          <View style={cardStyles.casesMediumCard}>
            <Text style={cardStyles.casesMediumLabel}>Casos Brasil:</Text>

            <Text style={cardStyles.casesNumber}>0</Text>
          </View>

          <View style={cardStyles.lethalityCard}>
            <Text style={cardStyles.lethalityLabel}>Letalidade Brasil:</Text>
            <Text style={cardStyles.lethalityNumber}>0%</Text>
          </View>
        </View>

        <View style={cardStyles.recoveredCard}>
          <Text style={cardStyles.recoveredLabel}>Recuperados Brasil:</Text>
          <Text style={cardStyles.recoveredNumber}>0</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/mask.jpg')} style={styles.images} />
        <Text style={styles.imageLabel}>Sempre use sua máscara ao sair.</Text>
      </View>
    </View>
  );
};

export default Brazil;