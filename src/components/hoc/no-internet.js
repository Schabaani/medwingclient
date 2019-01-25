import React, {Component} from 'react';
import {StyleSheet, View, NetInfo, Text, Image} from 'react-native';
import * as images from '../../assets/img'
import I18n from "../../assets/languages/i18n";
import {LanguageKeys} from "../../assets/languages/locales/languageKeys";


export default (Comp) => {
    return class NoInternetHOC extends Component<{}> {
        constructor(props) {
            super(props);
            this.state = {
                isConnected: true,
            };
        }

        componentDidMount() {
            NetInfo.isConnected.fetch().then(isConnected => {
                this.handleIsConnected(isConnected);
            });
            NetInfo.isConnected.addEventListener(
                'connectionChange',
                this.handleIsConnected
            );
        }

        componentWillUnmount() {
            NetInfo.isConnected.removeEventListener(
                'connectionChange',
                this.handleIsConnected
            );
        }

        handleIsConnected = (isConnected) => {
            this.setState({isConnected});
        };

        render() {
            const props = this.props;
            const children = this.props.children;
            return (
                <View style={{flex: 1}}>
                    {
                        this.state.isConnected &&
                        <Comp {...props}>
                            {children}
                        </Comp>
                    }
                    {
                        !this.state.isConnected &&
                        <View
                            style={styles.container}
                        >
                            <Image source={images.wifi}
                                   style={styles.image}
                            />
                            <View style={styles.textView}>
                                <Text style={styles.text}>{I18n.t(LanguageKeys.NoInternet)}</Text>
                                <Text style={styles.text}>{I18n.t(LanguageKeys.PleaseConnectToInternet)}</Text>
                            </View>
                        </View>
                    }
                </View>
            )
        }
    };
};
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: '-30%',
    },
    textView: {
        width: '90%',
        height: '10%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        paddingTop: '2%',
    }
});