import React, {PureComponent} from "react";
import {MAP_API_KEY} from 'react-native-dotenv';
import MapBoxGL from '@mapbox/react-native-mapbox-gl';
import {Image} from "react-native";
import PropTypes from "prop-types";
import * as Images from '../../assets/img'


class MapView extends PureComponent {
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
        return annotations.map((annotation, index)=>{
            return MapView._renderAnnotation(annotation, index)
        });
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