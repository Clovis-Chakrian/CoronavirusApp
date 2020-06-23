import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';

import styles from '../../styles/style';
import cardsStyle from '../../styles/cardsStyle';

import api from '../../services/numbersByRegionApi';

// Images for each region
import pb from '../../../assets/img/regions/pb.png';
import pe from '../../../assets/img/regions/pe.png';
import pi from '../../../assets/img/regions/pi.png';
import pr from '../../../assets/img/regions/pr.png';
import rj from '../../../assets/img/regions/rj.png';
import rn from '../../../assets/img/regions/rn.png';
import ro from '../../../assets/img/regions/ro.png';
import rr from '../../../assets/img/regions/rr.png';
import rs from '../../../assets/img/regions/rs.png';
import sc from '../../../assets/img/regions/sc.png';
import se from '../../../assets/img/regions/se.png';
import sp from '../../../assets/img/regions/sp.png';
import to from '../../../assets/img/regions/to.png';

function StateCard(props) {
  return (
    <View style={cardsStyle.stateCard}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 2}}>
        <Text style={cardsStyle.stateName}>{props.stateName}</Text>
        <Image source={props.img} style={props.styleI} />
      </View>
      <View style={cardsStyle.stateNumbersContainer}>
        <Text style={cardsStyle.cases}>{props.cases}</Text>
        <Text style={cardsStyle.deaths}>{props.deaths}</Text>
        {/* <Text style={cardsStyle.recovered}>{props.recovered}</Text> */}
        <Text style={cardsStyle.lethality}>{props.lethality}</Text>
      </View>
    </View>
  );
};

export default class Main extends Component {

  componentDidMount() {
    this.loadData();
  }

  state = {
    acre: ['Acre', '...', '...', '...'],
    alagoas: ['Alagoas', '...', '...', '...'],
    amapa: ['Amapá', '...', '...', '...'],
    amazonas: ['Amazonas', '...', '...', '...'],
    bahia: ['Bahia', '...', '...', '...'],
    ceara: ['Ceará', '...', '...', '...'],
    df: ['Distrito Federal', '...', '...', '...'],
    es: ['Espirito Santo', '...', '...', '...'],
    goias: ['Goiás', '...', '...', '...'],
    maranhao: ['Maranhão', '...', '...', '...'],
    mt: ['Mato Grosso', '...', '...', '...'],
    ms: ['Mato Grosso do Sul', '...', '...', '...'],
    mg: ['Minas Gerais', '...', '...', '...'],
    parana: ['Paraná', '...', '...', '...'],
    paraiba: ['Paraíba', '...', '...', '...'],
    para: ['Pará', '...', '...', '...'],
    pernambuco: ['Pernambuco', '...', '...', '...'],
    piaui: ['Piauí', '...', '...', '...'],
    rn: ['Rio Grande do Norte', '...', '...', '...'],
    rs: ['Rio Grande do Sul', '...', '...', '...'],
    rj: ['Rio de Janeiro', '...', '...', '...'],
    rondonia: ['Rondônia', '...', '...', '...'],
    roraima: ['Roraima', '...', '...', '...'],
    sc: ['Santa Catarina', '...', '...', '...'],
    sergipe: ['Sergipe', '...', '...', '...'],
    sp: ['São Paulo', '...', '...', '...'],
    tocantins: ['Tocantins', '...', '...', '...'],
  }

  loadData = async () => {
    const response = await api.get();

    const states = response.data;

    this.setState({ acre: ['Acre', states.infectedByRegion[22].count, states.deceasedByRegion[22].count, ((states.deceasedByRegion[22].count / states.infectedByRegion[22].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ alagoas: ['Alagoas', states.infectedByRegion[11].count, states.deceasedByRegion[11].count, ((states.deceasedByRegion[11].count / states.infectedByRegion[11].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ amapa: ['Amapá', states.infectedByRegion[13].count, states.deceasedByRegion[13].count, ((states.deceasedByRegion[13].count / states.infectedByRegion[13].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ amazonas: ['Amazonas', states.infectedByRegion[5].count, states.deceasedByRegion[5].count, ((states.deceasedByRegion[5].count / states.infectedByRegion[5].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ bahia: ['Bahia', states.infectedByRegion[7].count, states.deceasedByRegion[7].count, ((states.deceasedByRegion[7].count / states.infectedByRegion[7].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ ceara: ['Ceará', states.infectedByRegion[2].count, states.deceasedByRegion[2].count, ((states.deceasedByRegion[2].count / states.infectedByRegion[2].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ df: ['Distrito Federal', states.infectedByRegion[10].count, states.deceasedByRegion[10].count, ((states.deceasedByRegion[10].count / states.infectedByRegion[10].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ es: ['Espirito Santo', states.infectedByRegion[9].count, states.deceasedByRegion[9].count, ((states.deceasedByRegion[9].count / states.infectedByRegion[9].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ goias: ['Goiás', states.infectedByRegion[19].count, states.deceasedByRegion[19].count, ((states.deceasedByRegion[19].count / states.infectedByRegion[19].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ maranhao: ['Maranhão', states.infectedByRegion[4].count, states.deceasedByRegion[4].count, ((states.deceasedByRegion[4].count / states.infectedByRegion[4].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ mt: ['Mato Grosso', states.infectedByRegion[23].count, states.deceasedByRegion[23].count, ((states.deceasedByRegion[23].count / states.infectedByRegion[23].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ ms: ['Mato Grosso do Sul', states.infectedByRegion[26].count, states.deceasedByRegion[26].count, ((states.deceasedByRegion[26].count / states.infectedByRegion[26].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ mg: ['Minas Gerais', states.infectedByRegion[12].count, states.deceasedByRegion[12].count, ((states.deceasedByRegion[12].count / states.infectedByRegion[12].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ parana: ['Paraná', states.infectedByRegion[21].count, states.deceasedByRegion[21].count, ((states.deceasedByRegion[21].count / states.infectedByRegion[21].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ paraiba: ['Paraíba', states.infectedByRegion[8].count, states.deceasedByRegion[8].count, ((states.deceasedByRegion[8].count / states.infectedByRegion[8].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ para: ['Pará', states.infectedByRegion[3].count, states.deceasedByRegion[3].count, ((states.deceasedByRegion[3].count / states.infectedByRegion[3].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ pernambuco: ['Pernambuco', states.infectedByRegion[6].count, states.deceasedByRegion[6].count, ((states.deceasedByRegion[6].count / states.infectedByRegion[6].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ piaui: ['Piauí', states.infectedByRegion[20].count, states.deceasedByRegion[20].count, ((states.deceasedByRegion[20].count / states.infectedByRegion[20].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ rn: ['Rio Grande do Norte', states.infectedByRegion[14].count, states.deceasedByRegion[14].count, ((states.deceasedByRegion[14].count / states.infectedByRegion[14].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ rs: ['Rio Grande do Sul', states.infectedByRegion[15].count, states.deceasedByRegion[15].count, ((states.deceasedByRegion[15].count / states.infectedByRegion[15].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ rj: ['Rio de Janeiro', states.infectedByRegion[1].count, states.deceasedByRegion[1].count, ((states.deceasedByRegion[1].count / states.infectedByRegion[1].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ rondonia: ['Rondônia', states.infectedByRegion[18].count, states.deceasedByRegion[18].count, ((states.deceasedByRegion[18].count / states.infectedByRegion[18].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ roraima: ['Roraima', states.infectedByRegion[25].count, states.deceasedByRegion[25].count, ((states.deceasedByRegion[25].count / states.infectedByRegion[25].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ sc: ['Santa Catarina', states.infectedByRegion[17].count, states.deceasedByRegion[17].count, ((states.deceasedByRegion[17].count / states.infectedByRegion[17].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ sergipe: ['Sergipe', states.infectedByRegion[16].count, states.deceasedByRegion[16].count, ((states.deceasedByRegion[16].count / states.infectedByRegion[16].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ sp: ['São Paulo', states.infectedByRegion[0].count, states.deceasedByRegion[0].count, ((states.deceasedByRegion[0].count / states.infectedByRegion[0].count) * 100).toFixed(1).replace('.', ',') + '%'] });
    this.setState({ tocantins: ['Tocantins', states.infectedByRegion[24].count, states.deceasedByRegion[24].count, ((states.deceasedByRegion[24].count / states.infectedByRegion[24].count) * 100).toFixed(1).replace('.', ',') + '%'] });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <View>
          <TextInput placeholder='Procure por um estado...' style={styles.textInput} />
        </View> */}

        <StateCard stateName={this.state.acre[0]} cases={this.state.acre[1]} deaths={this.state.acre[2]} lethality={this.state.acre[3]} />
        <StateCard stateName={this.state.alagoas[0]} cases={this.state.alagoas[1]} deaths={this.state.alagoas[2]} lethality={this.state.alagoas[3]} />
        <StateCard stateName={this.state.amapa[0]} cases={this.state.amapa[1]} deaths={this.state.amapa[2]} lethality={this.state.amapa[3]} />
        <StateCard stateName={this.state.amazonas[0]} cases={this.state.amazonas[1]} deaths={this.state.amazonas[2]} lethality={this.state.amazonas[3]} />
        <StateCard stateName={this.state.bahia[0]} cases={this.state.bahia[1]} deaths={this.state.bahia[2]} lethality={this.state.bahia[3]} />
        <StateCard stateName={this.state.ceara[0]} cases={this.state.ceara[1]} deaths={this.state.ceara[2]} lethality={this.state.ceara[3]} />
        <StateCard stateName={this.state.df[0]} cases={this.state.df[1]} deaths={this.state.df[2]} lethality={this.state.df[3]} />
        <StateCard stateName={this.state.es[0]} cases={this.state.es[1]} deaths={this.state.es[2]} lethality={this.state.es[3]} />
        <StateCard stateName={this.state.goias[0]} cases={this.state.goias[1]} deaths={this.state.goias[2]} lethality={this.state.goias[3]} />
        <StateCard stateName={this.state.maranhao[0]} cases={this.state.maranhao[1]} deaths={this.state.maranhao[2]} lethality={this.state.maranhao[3]} />
        <StateCard stateName={this.state.mt[0]} cases={this.state.mt[1]} deaths={this.state.mt[2]} lethality={this.state.mt[3]} />
        <StateCard stateName={this.state.ms[0]} cases={this.state.ms[1]} deaths={this.state.ms[2]} lethality={this.state.ms[3]} />
        <StateCard stateName={this.state.mg[0]} cases={this.state.mg[1]} deaths={this.state.mg[2]} lethality={this.state.mg[3]} />
        <StateCard img={pr} styleI={{width: 55, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.parana[0]} cases={this.state.parana[1]} deaths={this.state.parana[2]} lethality={this.state.parana[3]} />
        <StateCard img={pb} styleI={{width: 70, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.paraiba[0]} cases={this.state.paraiba[1]} deaths={this.state.paraiba[2]} lethality={this.state.paraiba[3]} />
        <StateCard stateName={this.state.para[0]} cases={this.state.para[1]} deaths={this.state.para[2]} lethality={this.state.para[3]} />
        <StateCard img={pe} styleI={{width: 60, height: 20, marginTop: 20, marginRight: 30}} stateName={this.state.pernambuco[0]} cases={this.state.pernambuco[1]} deaths={this.state.pernambuco[2]} lethality={this.state.pernambuco[3]} />
        <StateCard img={pi} styleI={{width: 30, height: 50, marginTop: 20, marginRight: 30}} stateName={this.state.piaui[0]} cases={this.state.piaui[1]} deaths={this.state.piaui[2]} lethality={this.state.piaui[3]} />
        <StateCard img={rn} styleI={{width: 60, height: 35, marginTop: 20, marginRight: 30}} stateName={this.state.rn[0]} cases={this.state.rn[1]} deaths={this.state.rn[2]} lethality={this.state.rn[3]} />
        <StateCard img={rs} styleI={{width: 45, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.rs[0]} cases={this.state.rs[1]} deaths={this.state.rs[2]} lethality={this.state.rs[3]} />
        <StateCard img={rj} styleI={{width: 40, height: 30, marginTop: 20, marginRight: 30}} stateName={this.state.rj[0]} cases={this.state.rj[1]} deaths={this.state.rj[2]} lethality={this.state.rj[3]} />
        <StateCard img={ro} styleI={{width: 50, height: 42, marginTop: 20, marginRight: 30}} stateName={this.state.rondonia[0]} cases={this.state.rondonia[1]} deaths={this.state.rondonia[2]} lethality={this.state.rondonia[3]} />
        <StateCard img={rr} styleI={{width: 40, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.roraima[0]} cases={this.state.roraima[1]} deaths={this.state.roraima[2]} lethality={this.state.roraima[3]} />
        <StateCard img={sc} styleI={{width: 63, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.sc[0]} cases={this.state.sc[1]} deaths={this.state.sc[2]} lethality={this.state.sc[3]} />
        <StateCard img={se} styleI={{width: 40, height: 45, marginTop: 20, marginRight: 30}} stateName={this.state.sergipe[0]} cases={this.state.sergipe[1]} deaths={this.state.sergipe[2]} lethality={this.state.sergipe[3]} />
        <StateCard img={sp} styleI={{width: 60, height: 40, marginTop: 20, marginRight: 30}} stateName={this.state.sp[0]} cases={this.state.sp[1]} deaths={this.state.sp[2]} lethality={this.state.sp[3]} />
        <StateCard img={to} styleI={{width: 30, height: 50, marginTop: 20, marginRight: 30}} stateName={this.state.tocantins[0]} cases={this.state.tocantins[1]} deaths={this.state.tocantins[2]} lethality={this.state.tocantins[3]} />
      </ScrollView>
    );
  };
};