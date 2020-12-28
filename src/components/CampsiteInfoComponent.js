import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Container, Row } from 'reactstrap';

function RenderCampsite({campsite}) {
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

function RenderComments({comments}) {
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

function CampsiteInfo(props) {
    const campsite = props.campsite;
    if (campsite) {
        return (
            <Container>
                <Row>
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </Row>
            </Container>
        );
    }
    return <div />
}


export default CampsiteInfo;