import React, {Component} from "react";
import {MAP_API_KEY} from 'react-native-dotenv';
import MapBoxGL from '@mapbox/react-native-mapbox-gl';
import {Image} from "react-native";
import PropTypes from "prop-types";
import * as Images from '../../assets/img'


class MapView extends Component {
    constructor(props) {
        super(props);
        MapBoxGL.setAccessToken(MAP_API_KEY);
    }

    static _renderAnnotation(annotation, counter) {
        const id = `pointAnnotation${counter}`;

        return (
            <MapBoxGL.PointAnnotation
                key={id}
                id={id}
                coordinate={[annotation.point.latitude, annotation.point.longitude]}>
                <Image
                    source={Images.marker}
                    style={{
                        resizeMode: 'contain',
                        width: 32,
                        height: 32,
                    }}/>
            </MapBoxGL.PointAnnotation>
        );
    }

    _renderAnnotations(annotations) {
        return annotations.map((annotation, index) => {
            return MapView._renderAnnotation(annotation, index)
        });
    }

    render() {
        return (
            <MapBoxGL.MapView
                style={{flex: 1}}
                logoEnabled={false}
                showUserLocation={true}
                centerCoordinate={[13, 52]}
                zoomLevel={16}
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