import { Component } from "react";
import {Card, CardBody, CardText, CardTitle, Button} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import {connect} from 'react-redux';
import {fetchTimeline, addPost} from '../redux/actionCreators';

const mapStateToProps = (state) => {
	return {
        timelineData: state.timelineData,
        messageData: state.messageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimeline: () => dispatch(fetchTimeline()),
        addPost: (message) => dispatch(addPost(message))
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
        if (this.props.messageData.messageData.status === 'succeeded'){
            this.props.fetchTimeline();
        }
    }

    render() {
        return(
            <>
                <Card>
                    <CardBody>
                        <Form model="addPost" onSubmit={(values) => this.handleSubmit(values)}>
                            <Control.text model=".postText" id="postText" name="postText"
                                        placeholder="What would you like to share?"
                                        className="form-control"/>
                        </Form>
                    </CardBody>
                    <Button type="submit" color="primary">Rage</Button>
                </Card>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);