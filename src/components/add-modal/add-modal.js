import React, {PureComponent} from 'react';
import {View, TextInput, Image} from "react-native";
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import Suggestions from "../suggestion/suggestion";
import * as TestIDs from "../../../playground/testIDs";
import * as Images from "../../assets/img"

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
            >
                <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', width: '90%'}}>
                        <View style={{
                            marginTop: 5,
                            paddingRight: 3,
                            paddingLeft: 3,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 30,
                            borderColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TextInput
                                // value={this.props.searchText}
                                defaultValue={this.props.searchText}
                                placeholder={'Search'}
                                testID={TestIDs.SEARCH_BOX}
                                style={{color: 'blue', flex: 1}}
                                onChangeText={text => this.props.onTextChange(text)}
                                ref={this.searchBar}
                            />
                            <Image
                                source={Images.search}
                                style={{width: 32, height: 32}}
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

export default AddModalBox;