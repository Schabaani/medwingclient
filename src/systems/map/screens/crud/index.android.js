import React, {PureComponent} from 'react';
import {View, Text} from "react-native";
import {Button} from "../../../../components/button/button";
import I18n from "../../../../assets/languages/i18n";
import {LanguageKeys} from '../../../../assets/languages/locales/languageKeys';
import {MAP_API_KEY} from 'react-native-dotenv';
import MapBoxGL from '@mapbox/react-native-mapbox-gl';
import PropTypes from 'prop-types';
import GridItem from "../../../../components/grid-item/grid-item";
import GridView from 'react-native-super-grid';
import AddModalBox from "../../../../components/add-modal/add-modal";


class CRUDScreen extends PureComponent {
    constructor(props) {
        super(props);
        MapBoxGL.setAccessToken(MAP_API_KEY);
    }

    _renderAnnotation(item, counter) {
        const id = `pointAnnotation${counter}`;
        const coordinate = item;
        // const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

        return (
            <MapBoxGL.PointAnnotation
                key={id}
                id={id}
                title='Test'
                coordinate={[coordinate.point.latitude, coordinate.point.longitude]}>

                <View

                    style={{
                        flex: 1,
                        resizeMode: 'contain',
                        width: 25,
                        height: 25,
                        backgroundColor: 'yellow'
                    }}/>
            </MapBoxGL.PointAnnotation>
        );
    }

    _renderAnnotations(gridItems) {
        const items = [];

        for (let i = 0; i < gridItems.length; i++) {
            items.push(this._renderAnnotation(gridItems[i], i));
        }

        return items;
    }

    render() {
        const {gridItems, deleteCallBack, editCallBack, addMapCallBack} = this.props;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <MapBoxGL.MapView
                        style={{flex: 1}}
                        logoEnabled={false}
                        showUserLocation={true}

                        // centerCoordinate={[this.props.userLocation.longitude, this.props.userLocation.latitude]}
                        zoomLevel={12}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        pitchEnabled={true}
                        rotateEnabled={true}
                        // onPress={(evt) => {
                        //     console.log(evt);
                        //     this.props.onChangeState(this.props.identifiers.CHANGE_IN_PLACE_POINT, {
                        //         latitudeInPlaceService: evt.geometry.coordinates[0],
                        //         longitudeInPlaceService: evt.geometry.coordinates[1]
                        //     });
                        // }}
                    >
                        {this._renderAnnotations(gridItems)}

                    </MapBoxGL.MapView>
                </View>
                <View>
                    <Button
                        callBack={() => {
                            addMapCallBack()
                        }}
                        text={I18n.t(LanguageKeys.AddMap)}
                        style={{backgroundColor: 'red', width: 80, borderRadius: 5}}
                    />
                </View>
                <View style={{flex: 1}}>
                    <GridView
                        itemDimension={130}
                        items={gridItems}
                        style={{
                            paddingTop: 25,
                            flex: 1
                        }}
                        renderItem={item => (
                            <GridItem title={item.title} latitude={item.point.latitude} longitude={item.point.longitude}
                                      deleteCallBack={() => {
                                          deleteCallBack(item.uuid)
                                      }}
                                      editCallBack={() => {
                                          editCallBack(item.uuid)
                                      }}
                                      uuid={item.uuid}
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
    toggleModal: PropTypes.func
};
export default CRUDScreen;