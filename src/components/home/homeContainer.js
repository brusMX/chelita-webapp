import React from 'react';
import KegStatus from './kegStatus';
import BeerActivity from './beerActivity';


import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kegRefills: []
    };
  }

  componentDidMount() {
    //Get Keg status
    fetch('https://chelita-api.azurewebsites.net/users').then(function(response) { 
      console.log(response);
    return response.json();
    }).then(res => {
      if (res.length > 0){
        const kegRefills = res;
        this.setState({ kegRefills });
      }
      }); 
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={7}>
            <KegStatus />
          </Col>
          <Col sm={12} md={5}>
            <BeerActivity />
          </Col>
        </Row>
      </div>
    );
  }
}
