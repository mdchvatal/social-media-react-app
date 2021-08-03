import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTimeline, addPost} from '../redux/actionCreators';
import AddPost from './AddPostComponent';
import Post from './PostComponent';

const mapStateToProps = (state) => {
	return {
        timelineData: state.timelineData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline: () => dispatch(fetchTimeline()),
        addPost: (message) => dispatch(addPost(message))
    }
}

class Timeline extends Component {

    componentDidMount() {
        if (!(this.props.timelineData.status === 'succeeded')) {
            this.props.fetchTimeline();
        }
    }

    render() {
        return(
            <div class="container">
                <div className="row col-md-6 offset-md-3">
                    <AddPost addPost={this.props.addPost} fetchTimeline={this.props.fetchTimeline}/>
                    {this.props.timelineData.timeline.map((message) => {
                            return (
                                <Post key={message.id}
                                    message={message.message} 
                                    date={message.date} 
                                    user={message.user.userName}/>);
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timeline);