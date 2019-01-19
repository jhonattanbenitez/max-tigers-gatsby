import React from 'react';
import { Card, CardImg,  CardBody, CardTitle, Col, CardSubtitle} from 'reactstrap';
import Social from '../components/Social'

const Player = (props) =>{
    
    return(

        <div>
        <Col xs="12" sm="12" md="12">
            <Card className="cardproperties mt-4 cardPlayer" style={{ width: '320px', boxShadow: '5px 10px 8px #888888'}}>
              <CardImg 
                    top width="100%" 
                    src={props.src} 
                    alt="Card image cap" 
                    className="playerImg"
                    style={{borderBottom: '10px solid grey'}}
                    />
                <CardBody>
                  <CardTitle className="font-weight-bold">{props.invocador}</CardTitle>
                  <CardSubtitle className="mt-1">{props.linea}</CardSubtitle>
                  <CardSubtitle className="mt-1 ">{props.name}</CardSubtitle>
                  <CardSubtitle className="mt-1">{props.ciudad}</CardSubtitle>
                  <Social className="mt-1" socialUrl={props.socialUrl} />
                </CardBody>
            </Card>
        </Col>
        </div>
    );
}

export default Player;