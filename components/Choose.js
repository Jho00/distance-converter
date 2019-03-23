import {View} from "react-native";
import { CheckBox } from 'react-native-elements';
import React from 'react';
import * as types from '../common/TypesDataProvider';
import * as langs from '../common/Langs';

export default class Choose extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let checks = [];
        checks = types.typesDataProvider.map((object, index) =>
            <CheckBox
                size={12}
                key={index}
                containerStyle = {{width: '65%', height: 50}}
                title={langs.convert(object, this.props.language)}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.props.initType === object.code}
                onPress={() => this.props.changeHandler( object.code)}
            />
        );

        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    {checks.slice(0,3)}
                </View>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    {checks.splice(3,7)}
                </View>
            </View>

        );
    }

}