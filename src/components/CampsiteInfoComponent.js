import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
 
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id} className="mb-2">
                        <p>{comment.text}<br/>
                            &mdash; {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>)}
                </div>
            );
        }
        return <div />;
    }

    render() {
        const campsite = this.props.campsite;
        if (this.props.campsite) {
            return <Row>
                {this.renderCampsite(campsite)}
                {this.renderComments(campsite.comments)}
            </Row>
        }
        return <div />
    }
}

export default CampsiteInfo;