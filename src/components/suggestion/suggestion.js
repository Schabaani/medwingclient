import React from 'react';
import {View, Text, FlatList} from "react-native";
import * as TestIDs from "../../../playground/testIDs";

const Suggestions = (props) => {
    const separator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "99%",
                    backgroundColor: "#b5ca67",
                    marginLeft: "1%"
                }}
            />
        )
    };

    const renderItem = (item, index) => {
        return (
            <Text key={item.id}
                  style={{paddingTop: 10, paddingBottom: 1}}
                  testID={`${TestIDs.SUGGESTION_ITEM}_${index}`}
                  onPress={() => {
                      props.searchBarRef.current.clear();
                      props.onItemSelect(index);
                  }}
            >
                {item.name}
            </Text>
        )
    };
    return <FlatList
        data={props.results}
        ItemSeparatorComponent={separator}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (renderItem(item, index))}
    />
};

export default Suggestions
