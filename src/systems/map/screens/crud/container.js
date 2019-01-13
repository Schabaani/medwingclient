import React, {Component} from "react";
import CRUDScreen from "./index";
import {connect} from 'react-redux';
import {deletePointDispatcher} from "../../map.action";
import ShowToastHOC from '../../../../components/hoc/toast';

const coordinates = [
    [-73.98330688476561, 40.76975180901395],
    [-73.96682739257812, 40.761560925502806],
    [-74.00751113891602, 40.746346606483826],
    [-74.00751113891602, 40.746346606483826],
    [-74.00751113891602, 40.746346606483826],
];

class CRUD extends Component<{}> {
    static navigationOptions = {
        header: null,

    };

    constructor(props) {
        super(props);
    }

    addMapCallBack = () => {

    };
    editCallBack = (identifier) => {

    };

    deleteCallBack = (identifier) => {
        alert(identifier);
        // this.state.coordinates.pop();
        let a = coordinates.pop();
        this.setState({coordinates: [a]});
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

    };
};
const addedToast = ShowToastHOC(CRUD);
export default connect(mapStateToProps, mapDispatchToProps)(addedToast);

