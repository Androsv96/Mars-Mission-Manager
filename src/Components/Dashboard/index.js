/* Redux */
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

/* Components */
import View from "./view";

/* Redux-actions */
import { setOutpostData, setTempetureData, } from '../../Redux/Actions';

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ setOutpostData, setTempetureData, }, dispatch);

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);


export default DashboardContainer;
