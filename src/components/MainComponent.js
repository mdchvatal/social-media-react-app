import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTimeline} from '../redux/actionCreators';
import Timeline from './Timeline';


const mapStateToProps = (state) => {
	return {
        timelineData: state.timelineData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline: () => dispatch(fetchTimeline())
    }
}

class MainComponent extends Component{

    constructor(props) {
      	super(props);
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={() => <Timeline/>}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));