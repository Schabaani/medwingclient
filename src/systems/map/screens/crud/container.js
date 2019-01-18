import React, {Component} from "react";
import CRUDScreen from "./index";
import {connect} from 'react-redux';
import {addPointDispatcher, deletePointDispatcher} from "../../map.action";
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
            items: []
        };
    }

    addMapCallBack = () => {
        this.setState({modalVisibility: !this.state.modalVisibility})
    };

    _toggleModal = () =>
        this.setState({modalVisibility: !this.state.modalVisibility});

    _onTextChange = async (text) => {
        let points = addressToPoint(text, {country: 'de'});
        let mapped = await extractPoints(points);
        this.setState({
            items: mapped
        });
    };
    _onItemSelect = (index) => {
        let item = this.state.items[index];
        this.props.addPoint({
            title: item.name,
            point: {latitude: item.geometry[0], longitude: item.geometry[1]},
        });
        this.setState({items: [], modalVisibility: false});
    };
    editCallBack = (identifier) => {

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

    };
};
const addedToast = ShowToastHOC(CRUD);
export default connect(mapStateToProps, mapDispatchToProps)(addedToast);

