import {Text, TouchableOpacity} from "react-native";
import React from "react";

export const Button = ({text, callBack, identifier = null, style = {}, testID= null}) => {
    return (
        <TouchableOpacity
            testID={testID}
            onPress={() => {
                callBack(identifier)
            }}
            style={{
                alignItems: 'center',
                backgroundColor: '#fff1dc',
                padding: 5,
                ...style
            }}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    )
};
