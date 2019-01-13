import React, {PureComponent} from 'react';
import {View, Text} from "react-native";


class CRUDScreen extends PureComponent {

    render() {
        const { label, score = 0, total = Math.max(1, score) } = this.props;

        return (
            <View>
                <Text>Hi Donya!</Text>
            </View>
        )
    }

}

export default CRUDScreen;