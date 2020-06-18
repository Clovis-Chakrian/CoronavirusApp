import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../styles/style';
import cardStyles from '../../styles/cardsStyle';

const World = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <View style={cardStyles.deathsCard}>
          <Text style={cardStyles.deathsLabel}>Mortes Mundo:</Text>
          <Text style={cardStyles.deathsNumber}>0</Text>
        </View>

        <View style={cardStyles.midleCardsContainer}>
          <View style={cardStyles.recoveredMediumCard}>
            <Text style={cardStyles.recoveredMediumLabel}>Recuperados Mundo:</Text>

            <Text style={cardStyles.recoveredNumber}>0</Text>
          </View>

          <View style={cardStyles.lethalityCard}>
            <Text style={cardStyles.lethalityLabel}>Letalidade Mundo:</Text>
            <Text style={cardStyles.lethalityNumber}>0%</Text>
          </View>
        </View>

        <View style={cardStyles.casesCard}>
          <Text style={cardStyles.casesLabel}>Casos Mundo:</Text>
          <Text style={cardStyles.casesNumber}>0</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/sick.jpg')} style={styles.images} />
        <Text style={styles.imageLabel2}>Sentindo-se com algum sintoma? Procure o posto de saúde mais próximo.</Text>
      </View>
    </View>
  );
};

export default World;