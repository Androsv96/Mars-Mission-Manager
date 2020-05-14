/* Config */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import View from './view';

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const ChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default ChartContainer;
