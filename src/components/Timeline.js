import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTimeline} from '../redux/actionCreators';
import Post from './Post';

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

class Timeline extends Component {

    constructor(props) {
        super(props);  
    }

    componentDidMount() {
        if (!(this.props.timelineData.status == 'succeeded')) {
            this.props.fetchTimeline();
        }
    }

    render() {
        return(
            <div className='container'>
                {this.props.timelineData.timeline.map((message) => {
                        return (
                            <Post key={message.id}
                                message={message.message} 
                                date={message.date} 
                                user={message.user.userName}/>);
                    }
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timeline);