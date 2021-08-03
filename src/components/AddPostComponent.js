import { Component } from "react";
import {Card, CardBody, CardText, CardTitle, Button} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from 'react-redux';
import {fetchTimeline, addPost, addPostCompleted} from '../redux/actionCreators';
import { actions } from 'react-redux-form';

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
        resetPostForm: () => { dispatch(actions.reset('addPost'))},
        postComplete: () => dispatch(addPostCompleted())
    }
}

class AddPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Submit values: " + values);
        this.props.addPost(values.postText);
        this.setState({submit: true});
        this.props.resetPostForm();
    }

    render() {
        return(
            <>
                <Card id='addPostCard' style={{ borderRadius: 0 }}>
                    <Form model="addPost" onSubmit={(values) => this.handleSubmit(values)}>
                        <CardBody>
                            <Control.text model=".postText" id="postText" name="postText"
                                        placeholder="What would you like to share?"
                                        className="form-control"/>
                    
                        </CardBody>
                        <Button type="submit">Ring the Bell</Button>
                    </Form>
                </Card>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);