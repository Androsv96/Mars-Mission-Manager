/* Redux */
import { connect } from "react-redux";

/* Components */
import View from "./view";

const mapStateToProps = state => ({
    state: state
});

const AppContainer = connect(mapStateToProps)(View);

export default AppContainer;
