import React from 'react';
import {View, Text} from "react-native";

const Suggestions = (props) => {
    const options = props.results.map((opt, index) => (
        <Text key={opt.id}
              onPress={() => {
                  props.onItemSelect(index);
              }}
        >
            {opt.name}
        </Text>
    ));
    return <View>{options}</View>
};

export default Suggestions
