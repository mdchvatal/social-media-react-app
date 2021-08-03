import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTimeline, addPost, addPostCompleted} from '../redux/actionCreators';
import AddPost from './AddPostComponent';
import Post from './PostComponent';

const mapStateToProps = (state) => {
	return {
        timelineData: state.timelineData,
        messageData: state.messageData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline: () => dispatch(fetchTimeline()),
        addPost: (message) => dispatch(addPost(message)),
        postComplete: () => dispatch(addPostCompleted())
    }
}



class Timeline extends Component {

    componentDidMount() {
        if (!(this.props.timelineData.status === 'succeeded')) {
            this.props.fetchTimeline();
        }
    }



    render() {
        if (this.props.messageData.status === 'succeeded') {
            this.props.fetchTimeline();
            this.props.postComplete();
        }
        return(
            <>
                <div className="row col-md-5 offset-md-3">
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
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timeline);