import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

class Post extends Component {
    constructor(props) {
        super(props);
  }

  render() {
      return(
          <>
            <Card style={{ borderRadius: 0 }}>
                <CardTitle className="row justify-content-between">
                    <div className="col-1">{this.props.user}</div>
                    <div className="col" id="dateDisplay">{this.props.date}</div>
                </CardTitle>
                <CardBody>
                    <CardText>
                        {this.props.message}
                    </CardText>
                </CardBody>
            </Card> 
          </>
      );
  }
}

export default Post;