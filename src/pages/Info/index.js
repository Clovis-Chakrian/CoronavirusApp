import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

// Styles
import styles from '../../styles/style';
import infoStyles from '../../styles/infoStyles';

// Images
import sick from '../../../assets/img/sick.png';
import mask from '../../../assets/img/mask.png';
import home from '../../../assets/img/homeOffice.png';
import diagnostic from '../../../assets/img/diagnostic.png';
import washHands from '../../../assets/img/washHands.png';
import distance from '../../../assets/img/distance.png';

function TipCard(props) {
  return (
    <View style={infoStyles.tipCard}>
      <Text style={infoStyles.title}>{props.title}</Text>
      <View style={infoStyles.imgContainer}>
        <Image source={props.img} style={infoStyles.imgs} />
        <Text style={infoStyles.tip}>{props.tip}</Text>
      </View>
    </View>
  );
};

const Info = () => {
  return (
    <ScrollView style={styles.container}>
      <TipCard title={'Distância...'} img={distance} tip={'Mantenha uma distância mínima de 1,5 metros de qualquer outra pessoa na rua.'} />
      <TipCard title={'Casa...'} img={home} tip={'FIQUE EM CASA, sempre que possível, faça o máximo para não sair dela e assim evitar ser contaminado e/ou propagar o COVID-19.'} />
      <TipCard title={'Máscara...'} img={mask} tip={'SEMPRE que haja necessidade de sair de casa, a use. Pense nela como seu celular, sempre que tiver que sair de casa leve-a, é um item extremamente necessário nessa luta contra o vírus.'} />
      <TipCard title={'Diagnosticado, e agora?...'} img={washHands} tip={'Lave sempre suas mão com água e sabão ou as desinfete com álcool, para que não aja chance de elas levarem o vírus a uma região mucosa.'} />
      <TipCard title={'Sentindo-se com um dos sintomas...'} img={sick} tip={'Caso sinta algum dos sintomas de COVID-19, procure a unidade de saúde mais próxima.'} />
      <TipCard title={'Diagnosticado, e agora?...'} img={diagnostic} tip={'Agora faça tudo o que seu médico recomendar, fique sempre em casa, caso more com mais pessoas, mantenha distância.'} />
    </ScrollView>
  );
};

export default Info;