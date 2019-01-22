import React, {PureComponent} from 'react';
import {View, TextInput, Image} from "react-native";
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import Suggestions from "../suggestion/suggestion";
import * as TestIDs from "../../../playground/testIDs";
import * as Images from "../../assets/img"

class AddModalBox extends PureComponent {


    render() {
        return (
            <Modal isVisible={this.props.modalVisibility}
                   onBackdropPress={() => {
                       this.props.toggleModal()
                   }}
                // style={{}}
            >
                <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center'}}>
                        <View style={{
                            flexDirection: 'row',
                            border: 10,
                            borderColor: 'red',
                            justifyContent: 'center',
                            width: '90%',
                            alignItems: 'center',
                            // backgroundColor:'blue'
                        }}>
                            <TextInput
                                value={this.props.searchText}
                                placeholder={'I am going to'}
                                testID={TestIDs.SEARCH_BOX}
                                style={{padding: 10, color: 'blue', flex: 1}}
                                onChangeText={text => this.props.onTextChange(text)}
                            />
                            <Image
                                source={Images.search}
                                style={{width: 32, height: 32}}
                            />
                        </View>
                        <Suggestions
                            results={this.props.items}
                            onItemSelect={this.props.onItemSelect}
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