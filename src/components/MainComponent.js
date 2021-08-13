import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTimeline} from '../redux/actionCreators';
import Timeline from './TimelineComponent';
import Header from './HeaderComponent';


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
            <>
                <Header id="mainHeader"/>
                <Switch>
                    <Route path='/' component={() => <Timeline/>}/>
                </Switch>
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));