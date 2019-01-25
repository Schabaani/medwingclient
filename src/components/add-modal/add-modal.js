import React, {PureComponent} from 'react';
import {View, TextInput, Image, StyleSheet} from "react-native";
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import Suggestions from "../suggestion/suggestion";
import * as TestIDs from "../../../playground/testIDs";
import * as Images from "../../assets/img"
import I18n from "../../assets/languages/i18n";
import {LanguageKeys} from "../../assets/languages/locales/languageKeys";
import ColorPalette from "../../assets/color-palette";

class AddModalBox extends PureComponent {
    constructor(props) {
        super(props);
        this.searchBar = React.createRef();
    }

    render() {
        return (
            <Modal isVisible={this.props.modalVisibility}
                   onBackdropPress={() => {
                       this.props.toggleModal()
                   }}
                   onBackButtonPress={() => {
                       this.props.toggleModal()
                   }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.container}>
                        <View style={styles.searchBar}>
                            <TextInput
                                defaultValue={this.props.searchText}
                                placeholder={I18n.t(LanguageKeys.Search)}
                                testID={TestIDs.SEARCH_BOX}
                                style={styles.searchInput}
                                onChangeText={text => this.props.onTextChange(text)}
                                ref={this.searchBar}
                            />
                            <Image
                                source={Images.search}
                                style={styles.searchImage}
                            />
                        </View>
                        <Suggestions
                            results={this.props.items}
                            onItemSelect={this.props.onItemSelect}
                            searchBarRef={this.searchBar}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

AddModalBox.propTypes = {
    items: PropTypes.array,
    onItemSelect: PropTypes.func,
    onTextChange: PropTypes.func,
    searchText: PropTypes.string,
    modalVisibility: PropTypes.bool,
    toggleModal: PropTypes.func
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: ColorPalette.White,
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center',
        width: '90%'
    },
    searchBar: {
        marginTop: 5,
        paddingRight: 3,
        paddingLeft: 3,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: ColorPalette.SearchBarBorder,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        color: ColorPalette.SearchInput,
        flex: 1
    },
    searchImage: {
        width: 32,
        height: 32
    }
});
export default AddModalBox;