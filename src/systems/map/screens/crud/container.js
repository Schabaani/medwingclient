import React, {Component} from "react";
import CRUDScreen from "./index";
import {connect} from 'react-redux';
import {saveJobRequest} from "../../map.action";


class CRUD extends Component<{}> {
    static navigationOptions = {
        header: null,

    };

    constructor(props) {
        super(props);
        this.state = {
            spinner:false,
        };
        this.props.saveJobRequest(10)
    }




    render() {
        return (
            <CRUDScreen
            />
        )
    }
}

const mapStateToProps = (state) => {
        console.log(state);
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveJobRequest: (jobRequest) => dispatch(saveJobRequest(jobRequest)),

    };
};
// const addedToast = ShowToastHOC(AutoServiceGrade);
export default connect(mapStateToProps, mapDispatchToProps)(CRUD);


export const AutoServiceGradeIdentifier = {
    CHANGE_ECONOMY_PLAN: 'CHANGE_ECONOMY_PLAN',
    CHANGE_SERVICE_GRADE: 'CHANGE_SERVICE_GRADE',
    CANCEL: 'CANCEL',
    SELECT_SERVICES: 'SELECT_SERVICES',
    CHANGE_CATEGORY: 'CHANGE_CATEGORY',
};