import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import I18n from "../../assets/languages/i18n";
import {LanguageKeys} from '../../assets/languages/locales/languageKeys'
import {Button} from "../button/button";


class GridItem extends PureComponent {


    render() {
        const {title, latitude, longitude, uuid, deleteCallBack, editCallBack} = this.props;

        return (
            <View>
                <Text style={{fontSize: 15, color: 'blue'}}>{title}</Text>
                <Text>{title}</Text>
                <Text>{I18n.t(LanguageKeys.Latitude)}: {latitude}</Text>
                <Text>{I18n.t(LanguageKeys.Longitude)}: {longitude}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Button text={I18n.t(LanguageKeys.Edit)} callBack={editCallBack} uuid={uuid}/>
                    <Text> {I18n.t(LanguageKeys.Or)} </Text>
                    <Button text={I18n.t(LanguageKeys.Delete)} callBack={deleteCallBack} uuid={uuid}/>

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

export default GridItem;