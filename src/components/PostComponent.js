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
                    <div className="col-md-3" id="userNameDisplay">{this.props.name}<div id="userUserNameDisplay"> @{this.props.userName}</div></div>
                    <div className="col-md-2" id="dateDisplay">{this.props.date}</div>
                </CardTitle>
                <CardBody >
                    <CardText>
                        <div id="postBody">{this.props.message}</div>  
                    </CardText>
                </CardBody>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col" id="footerItem">{this.props.numberOfComments} Comments</div>
                        <div className="col" id="footerItem">{this.props.numberOfLikes} Likes</div>
                        <div className="col" id="footerItem">Share</div>
                    </div>
                </div>
            </Card> 
          </>
      );
  }
}

export default Post;