import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import I18n from "../../assets/languages/i18n";
import {LanguageKeys} from '../../assets/languages/locales/languageKeys'
import {Button} from "../button/button";
import * as TestIDs from "../../../playground/testIDs";
import ColorPalette from "../../assets/color-palette";

let TITLE_SUB_LENGTH = 20;
let LAT_LNG_SUB_LENGTH = 7;

class GridItem extends PureComponent {

    render() {
        const {title, latitude, longitude, uuid, deleteCallBack, editCallBack, index} = this.props;

        return (
            <View>
                <Text style={styles.h1}>{title.substring(0, TITLE_SUB_LENGTH)}</Text>
                <Text>{title.substring(0, TITLE_SUB_LENGTH)}</Text>
                <Text>{I18n.t(LanguageKeys.Latitude)}: {latitude.toString().substring(0, LAT_LNG_SUB_LENGTH)}</Text>
                <Text>{I18n.t(LanguageKeys.Longitude)}: {longitude.toString().substring(0, LAT_LNG_SUB_LENGTH)}</Text>
                <View style={styles.buttonWrapper}>
                    <Button text={I18n.t(LanguageKeys.Edit)} callBack={editCallBack} testID={`${TestIDs.EDIT}${index}`}
                            uuid={uuid}/>
                    <Text> {I18n.t(LanguageKeys.Or)} </Text>
                    <Button text={I18n.t(LanguageKeys.Delete)} callBack={deleteCallBack}
                            testID={`${TestIDs.DELETE}${index}`} uuid={uuid}/>

                </View>
            </View>
        )
    }

}

GridItem.propTypes = {
    title: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    uuid: PropTypes.string,
    deleteCallBack: PropTypes.func,
    editCallBack: PropTypes.func,
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 15,
        color: ColorPalette.Title
    },
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default GridItem;