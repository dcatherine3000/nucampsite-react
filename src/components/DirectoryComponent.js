import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Container, Row } from 'reactstrap';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardImg width="100" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <Container>
            <Row>
                {directory}
            </Row>
        </Container>
    );
}


export default Directory;