import {fetchTimeline} from '../redux/actionCreators';

const mapStateToProps = (state) => {
	return {
        timelineData: state.timelineData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline: (userName) => dispatch(fetchTimeline(userName))
    }
}

class MainComponent extends Component{

    constructor(props) {
      	super(props);
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));