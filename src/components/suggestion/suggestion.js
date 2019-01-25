import React from 'react';
import {View, Text, FlatList, StyleSheet} from "react-native";
import * as TestIDs from "../../../playground/testIDs";
import ColorPalette from "../../assets/color-palette";

const Suggestions = (props) => {
    const separator = () => (<View style={styles.separator}/>);

    const renderItem = (item, index) => {
        return (
            <Text key={item.id}
                  style={styles.itemWrapper}
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

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "99%",
        backgroundColor: ColorPalette.Separator,
        marginLeft: "1%"
    },
    itemWrapper: {
        paddingTop: 10,
        paddingBottom: 1
    }
});

export default Suggestions
