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

    componentDidUpdate() {
        if (this.props.messageData.status === 'succeeded') {
            this.props.postComplete();
        }
    }




    render() {
        if (this.props.messageData.status === 'succeeded') {
            this.props.fetchTimeline();
        }
        return(
            <>
                <div className="row">
                    <div className="col-md-5 offset-md-3" id="timelinePostComponent">
                        <AddPost addPost={this.props.addPost} fetchTimeline={this.props.fetchTimeline}/>
                        {this.props.timelineData.timeline.map((message) => {
                                return (
                                    <Post key={message.id} //integer id
                                        message={message.message} //string
                                        date={message.date} //string formatted as hh:mm dd/mm
                                        userName={message.id && message.date && message.postingUser.userName} //From User object (postingUser)
                                        name={message.id && message.date && message.postingUser.name}
                                        likes={message.likes} //integer
                                        numberOfLikes={message.numberOfLikes} // integer
                                        comments={message.comments} //array of Comment objects
                                        numberOfComments={message.numberOfComments} //integer value
                                        />); 
                            }
                        )}
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Timeline);