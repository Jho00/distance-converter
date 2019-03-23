import {Text, Picker, View} from "react-native";
import * as langs from '../common/Langs';
import React from "react";

export default class Dropdown extends React.Component {
    constructor(props) {
     super(props);
    }

    render() {
        return (
                <View>
                    <Picker
                        selectedValue={this.props.language}
                        style={{height: 50, width: 130}}
                        onValueChange={(itemValue, itemIndex) => {
                            this.props.changeHandler(itemValue);
                        }}>
                        <Picker.Item label="Русский" value={langs.RU} />
                        <Picker.Item label="English" value={langs.EN} />
                    </Picker>
                </View>
        );
    }
}