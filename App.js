import React from 'react';
import * as langs from './common/Langs';
import * as types from './common/TypesDataProvider';
import { StyleSheet,  View } from 'react-native';
import { Input } from 'react-native-elements';
import Dropdown from "./components/Dropdown";
import Choose from "./components/Choose";
import Values from "./components/Values";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: langs.EN,
      currentType: types.typesDataProvider[0].code,
      target: 1
    };

    this.setLang = this.setLang.bind(this);
    this.setType = this.setType.bind(this);
    this.setTargetValue = this.setTargetValue.bind(this);
  }

  setLang(lang) {
    this.setState({
      lang: lang
    })
  }

  setType(type) {
    this.setState( {
      currentType: type
    })
  }

  setTargetValue(value) {
    this.setState( {
      target: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Input placeholder={langs.convert(langs.inputText, this.state.lang)} keyboardType='numeric' onChangeText={(text) => this.setTargetValue(text)} value={String(this.state.target)}/>
          <Dropdown style={styles.dropdown} language={this.state.lang} changeHandler={this.setLang}/>
          <Choose language={this.state.lang} changeHandler={this.setType} initType={this.state.currentType}/>
          <Values code={this.state.currentType} language={this.state.lang} target={this.state.target} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 10
  },

  dropdown: {
    alignItems: 'flex-end',
  }
});
