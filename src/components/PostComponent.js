import React, { Component } from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

class Post extends Component {
    constructor(props) {
        super(props);
  }

  render() {
      return(
          <>
            <Card>
                <CardTitle className="row justify-content-between">
                    <div className="col-4">{this.props.user}</div>
                    <div className="col-4" id="dateDisplay">{this.props.date}</div>
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