import React, {PureComponent} from 'react';
import {View, TextInput} from "react-native";
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import Suggestions from "../suggestion/suggestion";


class AddModalBox extends PureComponent {


    render() {
        return (
            <Modal isVisible={this.props.modalVisibility}
                   onBackdropPress={() => {
                       this.props.toggleModal()
                   }}
            >
                <View style={{flex: 0.75, backgroundColor: 'white'}}>
                    <TextInput
                        style={{padding: 10, color: 'bluer'}}
                        onChangeText={text => this.props.onTextChange(text)}
                    />
                    <Suggestions
                        results={this.props.items}
                        onItemSelect={this.props.onItemSelect}
                    />
                </View>
            </Modal>
        );
    }

}

AddModalBox.propTypes = {
    items: PropTypes.array,
    onItemSelect: PropTypes.func,
    onTextChange: PropTypes.func,
    modalVisibility: PropTypes.bool,
    toggleModal: PropTypes.func
};

export default AddModalBox;