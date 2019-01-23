import React, {Component} from "react";
import CRUDScreen from "./index";
import {connect} from 'react-redux';
import {addPointDispatcher, deletePointDispatcher, editPointDispatcher} from "../../map.action";
import ShowToastHOC from '../../../../components/hoc/toast';
import {addressToPoint, extractPoints} from "../../../../utilities/geocoder";

class CRUD extends Component<{}> {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalVisibility: false,
            items: [],
            editingMode: false,
            searchText: undefined,
            editedIndex: undefined,
            typing: false
        };
        this.timeoutVar = undefined
    }

    addMapCallBack = () => {
        this.setState({modalVisibility: !this.state.modalVisibility, editingMode: false})
    };

    _toggleModal = () => {
        if (this.state.modalVisibility) {
            this.setState({modalVisibility: false, items: []});
        } else {
            this.setState({modalVisibility: true});
        }
    };

    updateTyping() {
        let TYPING_TIMER_LENGTH = 500;

        if (!this.state.typing) {
            this.setState({typing: true});
        } else {
            clearTimeout(this.timeoutVar);
        }

        this.timeoutVar = setTimeout(async () => {
            let points = addressToPoint(this.state.searchText, {country: 'de'});
            let mapped = await extractPoints(points);
            this.setState({
                items: mapped,
            });
            this.setState({typing: false});
        }, TYPING_TIMER_LENGTH);
    }

    _onTextChange = async (text) => {
        this.setState({searchText: text});
        this.updateTyping();
    };
    _onItemSelect = (index) => {
        if (this.state.editingMode) {
            this._handleEditingPoint(index);
        } else {
            this._handleAddingPoint(index)
        }
    };
    _handleAddingPoint = (index) => {
        let item = this.state.items[index];
        this.props.addPoint({
            title: item.name,
            point: {latitude: item.geometry[0], longitude: item.geometry[1]},
        });
        this.setState({items: [], modalVisibility: false, searchText: undefined});
    };
    _handleEditingPoint = (index) => {
        let editingItem = this.props.coordinates[this.state.editedIndex];
        let selectingPoint = this.state.items[index];
        this.props.editPoint(editingItem, selectingPoint);
        this.setState({items: [], modalVisibility: false, searchText: undefined});
    };
    editCallBack = (identifier) => {
        this.setState({
            modalVisibility: !this.state.modalVisibility,
            editingMode: true,
            editedIndex: identifier,
            searchText: this.props.coordinates[identifier].title
        });
    };

    deleteCallBack = (identifier) => {
        this.props.deletePoint(identifier);
        this.props.showToast('deleted');
    };


    render() {
        return (
            <CRUDScreen
                gridItems={this.props.coordinates}
                editCallBack={this.editCallBack}
                deleteCallBack={this.deleteCallBack}
                addMapCallBack={this.addMapCallBack}
                modalVisibility={this.state.modalVisibility}
                toggleModal={this._toggleModal}
                onItemSelect={this._onItemSelect}
                onTextChange={this._onTextChange}
                searchText={this.state.searchText}
                items={this.state.items}
            />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {coordinates: state.mapReducer.coordinates};
};
const mapDispatchToProps = (dispatch) => {
    return {
        deletePoint: (uuid) => dispatch(deletePointDispatcher(uuid)),
        addPoint: (point) => dispatch(addPointDispatcher(point)),
        editPoint: (editingItem, selectionPoint) => dispatch(editPointDispatcher(editingItem, selectionPoint)),
    };
};
const addedToast = ShowToastHOC(CRUD);
export default connect(mapStateToProps, mapDispatchToProps)(addedToast);

