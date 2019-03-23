import React from "react";
import * as types from "../common/TypesDataProvider";
import * as langs from '../common/Langs';
import {Text} from "react-native-elements";
import {View} from "react-native";


export default class Values extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            converter : types.getConverterByCode(this.props.code)
        }
    }

    render() {
        let checks = [];
        checks = types.typesDataProvider.map((object, index) =>
            <Text key={index}>
                {langs.convert(object, this.props.language)} : {types.convertThis(this.props.target, types.getConverterByCode(object.code), types.getReverseConverterByCode(this.props.code))}
            </Text>
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