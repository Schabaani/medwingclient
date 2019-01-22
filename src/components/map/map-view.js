import React, {Component} from "react";
import {MAP_API_KEY} from 'react-native-dotenv';
import MapBoxGL from '@mapbox/react-native-mapbox-gl';
import {View} from "react-native";
import PropTypes from "prop-types";


class MapView extends Component<{}> {
    constructor(props) {
        super(props);
        MapBoxGL.setAccessToken(MAP_API_KEY);
    }

    static _renderAnnotation(annotation, counter) {
        const id = `pointAnnotation${counter}`;
        // const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

        return (
            <MapBoxGL.PointAnnotation
                key={id}
                id={id}
                title='Test'
                coordinate={[annotation.point.latitude, annotation.point.longitude]}>

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

    _renderAnnotations(annotations) {
        const items = [];

        for (let i = 0; i < annotations.length; i++) {
            items.push(MapView._renderAnnotation(annotations[i], i));
        }

        return items;
    }

    render() {
        return (
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

            >
                {this._renderAnnotations(this.props.annotations)}
            </MapBoxGL.MapView>)
    }
}

MapView.propTypes = {
    annotations: PropTypes.array,
};


export default MapView;