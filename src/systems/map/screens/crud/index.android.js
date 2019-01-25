import React, {PureComponent} from 'react';
import {View} from "react-native";
import I18n from "../../../../assets/languages/i18n";
import {LanguageKeys} from '../../../../assets/languages/locales/languageKeys';
import PropTypes from 'prop-types';
import GridItem from "../../../../components/grid-item/grid-item";
import GridView from 'react-native-super-grid';
import AddModalBox from "../../../../components/add-modal/add-modal";
import {Button} from "../../../../components/button/button";
import * as TestIDs from "../../../../../playground/testIDs";
import MapView from "../../../../components/map/map-view";
import styles from "./styles"


class CRUDScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {gridItems, deleteCallBack, editCallBack, addMapCallBack} = this.props;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <MapView
                        annotations={gridItems}
                    />
                </View>
                <View>
                    <Button
                        testID={TestIDs.ADD_NEW_AREA}
                        callBack={() => {
                            addMapCallBack()
                        }}
                        text={I18n.t(LanguageKeys.AddMap)}
                        style={styles.addButton}
                    />
                </View>
                <View style={{flex: 1}}>
                    <GridView
                        testID={TestIDs.GRID_VIEW}
                        itemDimension={130}
                        items={gridItems}
                        style={styles.gridView}
                        renderItem={(item, index) => (
                            <GridItem title={item.title} latitude={item.point.latitude} longitude={item.point.longitude}
                                      deleteCallBack={() => {
                                          deleteCallBack(item.uuid)
                                      }}
                                      editCallBack={() => {
                                          editCallBack(index)
                                      }}
                                      uuid={item.uuid}
                                      index={index}

                            />
                        )}
                    />
                </View>
                <AddModalBox
                    items={this.props.items}
                    onItemSelect={this.props.onItemSelect}
                    onTextChange={this.props.onTextChange}
                    modalVisibility={this.props.modalVisibility}
                    toggleModal={this.props.toggleModal}
                    searchText={this.props.searchText}
                />
            </View>
        )
    }

}

CRUDScreen.propTypes = {
    gridItems: PropTypes.array,
    deleteCallBack: PropTypes.func,
    editCallBack: PropTypes.func,
    addMapCallBack: PropTypes.func,
    modalVisibility: PropTypes.bool,
    toggleModal: PropTypes.func,
    searchText: PropTypes.string,
};
export default CRUDScreen;