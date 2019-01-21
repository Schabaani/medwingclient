import React from 'react';
import {View, Text} from "react-native";
import * as TestIDs from "../../../playground/testIDs";

const Suggestions = (props) => {
    const options = props.results.map((opt, index) => (
        <Text key={opt.id}
              testID={`${TestIDs.SUGGESTION_ITEM}_${index}`}
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
