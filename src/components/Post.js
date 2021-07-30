import React, { Component } from 'react';
import {Card, CardBody, CardText, Container, CardTitle} from 'reactstrap';

class Post extends Component {
    constructor(props) {
        super(props);
  }

  render() {
      return(
          <>
            <Card>
                <CardTitle>{this.props.user}{this.props.date}</CardTitle>
                <CardBody><CardText>{this.props.message}</CardText></CardBody>
            </Card> 
          </>
      );
  }
}

export default Post;